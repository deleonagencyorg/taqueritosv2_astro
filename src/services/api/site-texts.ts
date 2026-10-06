import { cmsClient } from './client';
import { withSiteFilter } from './config';
import { TtlCache } from './runtime';

interface CmsSiteText {
  id: string;
  key: string;
  value: string;
}

interface SiteTextListResponse {
  data: CmsSiteText[];
}

export type SiteTextMap = Record<string, string>;

const siteTextsByLocale = new TtlCache<string, Promise<SiteTextMap>>();

export function getSiteTexts(locale: string = 'es'): Promise<SiteTextMap> {
  const cached = siteTextsByLocale.get(locale);
  if (cached) return cached;
  const request = loadSiteTexts(locale);
  siteTextsByLocale.set(locale, request);
  return request;
}

async function loadSiteTexts(locale: string): Promise<SiteTextMap> {
  try {
    const response = await cmsClient.get<SiteTextListResponse>(
      'v1/site-texts',
      withSiteFilter({
        page: 1,
        pageSize: 500,
        languageCode: locale,
      })
    );

    const items = response.data ?? [];
    const map: SiteTextMap = {};
    for (const item of items) {
      if (item.key) map[item.key] = item.value ?? '';
    }

    console.log(`[CMS] Site texts recibidos: ${items.length} (${locale})`);
    return map;
  } catch (error) {
    siteTextsByLocale.delete(locale);
    console.error('[CMS] Error al obtener site texts:', error);
    return {};
  }
}

export function text(map: SiteTextMap, key: string, fallback: string = ''): string {
  return map[key] ?? fallback;
}
