import { cmsClient } from './client';
import { withSiteFilter } from './config';
import { TtlCache } from './runtime';

interface CmsMenuItem {
  id: string;
  label: string;
  href: string;
  order: number;
  parentId: string | null;
  isExternal: boolean;
  action?: string;
}

interface CmsNavigationConfig {
  id: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  items: CmsMenuItem[];
}

interface NavigationListResponse {
  data: CmsNavigationConfig[];
}

export interface MenuItem {
  id: string;
  text: string;
  href: string;
  isExternal: boolean;
  action: string;
  submenu?: MenuItem[];
}

export interface NavigationData {
  openMenuLabel: string;
  closeMenuLabel: string;
  items: MenuItem[];
}

function buildTree(items: CmsMenuItem[], parentId: string | null = null): MenuItem[] {
  return items
    .filter((item) => (item.parentId ?? null) === parentId)
    .slice()
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((item) => {
      const children = buildTree(items, item.id);
      const menuItem: MenuItem = {
        id: item.id,
        text: item.label,
        href: item.href || '#',
        isExternal: item.isExternal,
        action: item.action || '',
      };
      if (children.length) menuItem.submenu = children;
      return menuItem;
    });
}

export async function getNavigation(locale: string = 'es'): Promise<NavigationData | null> {
  try {
    const response = await cmsClient.get<NavigationListResponse>(
      'v1/navigation',
      withSiteFilter({
        page: 1,
        pageSize: 1,
        languageCode: locale,
      })
    );

    const config = response.data?.[0];
    if (!config) {
      console.log(`[CMS] Sin navegación para ${locale}`);
      return null;
    }

    console.log(`[CMS] Navegación recibida: ${config.items?.length ?? 0} items (${locale})`);

    return {
      openMenuLabel: config.openMenuLabel || '',
      closeMenuLabel: config.closeMenuLabel || '',
      items: buildTree(config.items ?? []),
    };
  } catch (error) {
    console.error('[CMS] Error al obtener navegación:', error);
    return null;
  }
}

export interface LegacyMenuItem extends MenuItem {
  key: string;
}

const LEGACY_KEYS: Record<string, string> = {
  where_to_buy: 'where-buy',
  products_menu: 'products',
  games_menu: 'games',
  mobile_only: 'taqueritos-gaming',
};

function legacyKey(item: MenuItem): string {
  return LEGACY_KEYS[item.action] || item.id;
}

const legacyMenuByLocale = new TtlCache<string, Promise<{ navigation: NavigationData | null; items: LegacyMenuItem[] }>>();

export function getLegacyMenu(locale: string = 'es'): Promise<{ navigation: NavigationData | null; items: LegacyMenuItem[] }> {
  const cached = legacyMenuByLocale.get(locale);
  if (cached) return cached;
  const request = getNavigation(locale).then((navigation) => {
    if (!navigation) legacyMenuByLocale.delete(locale);
    return {
      navigation,
      items: (navigation?.items ?? []).map((item) => ({ ...item, id: legacyKey(item), key: legacyKey(item) })),
    };
  });
  legacyMenuByLocale.set(locale, request);
  return request;
}
