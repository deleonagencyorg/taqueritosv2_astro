import esProducts from '../locales/es/products.json';
import enProducts from '../locales/en/products.json';

const SITE = 'https://www.taqueritos.com';

type RecipeRecord = { id?: string };

const esRecipeModules = import.meta.glob('../locales/es/recipes/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, RecipeRecord>;
const enRecipeModules = import.meta.glob('../locales/en/recipes/*.json', {
  eager: true,
  import: 'default',
}) as Record<string, RecipeRecord>;

function idsOf(items: { id?: string }[] | undefined): Set<string> {
  return new Set((items || []).map((item) => item.id).filter((id): id is string => Boolean(id)));
}

function idsOfModules(modules: Record<string, RecipeRecord>): Set<string> {
  return new Set(
    Object.values(modules)
      .map((item) => item?.id)
      .filter((id): id is string => Boolean(id))
  );
}

const esProductIds = idsOf((esProducts as { items?: { id?: string }[] }).items);
const enProductIds = idsOf((enProducts as { items?: { id?: string }[] }).items);
const esRecipeIds = idsOfModules(esRecipeModules);
const enRecipeIds = idsOfModules(enRecipeModules);

const sections: Record<string, { es?: string; en?: string }> = {
  nosotros: { es: '/es/nosotros/', en: '/en/about-us/' },
  'about-us': { es: '/es/nosotros/', en: '/en/about-us/' },
  contacto: { es: '/es/contacto/', en: '/en/contact/' },
  contact: { es: '/es/contacto/', en: '/en/contact/' },
  productos: { es: '/es/productos/', en: '/en/products/' },
  products: { es: '/es/productos/', en: '/en/products/' },
  recetas: { es: '/es/recetas/', en: '/en/recipes/' },
  recipes: { es: '/es/recetas/', en: '/en/recipes/' },
  'retos-torneos': { es: '/es/retos-torneos/', en: '/en/challenges-tournaments/' },
  'challenges-tournaments': { es: '/es/retos-torneos/', en: '/en/challenges-tournaments/' },
  marcas: { es: '/es/marcas/', en: '/en/brands/' },
  brands: { es: '/es/marcas/', en: '/en/brands/' },
  blog: { es: '/es/blog/', en: '/en/blog/' },
  participacion: { es: '/es/participacion/' },
  jurados: { es: '/es/jurados/' },
};

export type HreflangLink = { hreflang: string; href: string };

export type PageSeo = {
  canonical: string;
  alternates: HreflangLink[];
};

function absolute(path: string): string {
  return `${SITE}${path}`;
}

function withSlash(pathname: string): string {
  const clean = pathname.split('?')[0].split('#')[0];
  const parts = clean.split('/').filter(Boolean);
  if (parts.length === 0) return '/es/';
  return `/${parts.join('/')}/`;
}

function links(esPath: string | undefined, enPath: string | undefined, currentPath: string): PageSeo {
  const alternates: HreflangLink[] = [];
  if (esPath) alternates.push({ hreflang: 'es', href: absolute(esPath) });
  if (enPath) alternates.push({ hreflang: 'en', href: absolute(enPath) });
  const fallback = esPath || enPath || currentPath;
  alternates.push({ hreflang: 'x-default', href: absolute(fallback) });
  const lang = currentPath.startsWith('/en/') ? 'en' : 'es';
  const canonicalPath = lang === 'en' ? enPath || currentPath : esPath || currentPath;
  return { canonical: absolute(canonicalPath), alternates };
}

export function getPageSeo(pathname: string): PageSeo {
  const path = withSlash(pathname);
  const parts = path.split('/').filter(Boolean);
  const lang = parts[0] === 'en' ? 'en' : 'es';

  if (parts.length === 1 && (parts[0] === 'es' || parts[0] === 'en')) {
    return links('/es/', '/en/', path);
  }

  const section = parts[1];
  const id = parts[2];

  if (section === 'productos' || section === 'products') {
    if (!id) return links(sections.productos.es, sections.productos.en, path);
    const esPath = esProductIds.has(id) ? `/es/productos/${id}/` : undefined;
    const enPath = enProductIds.has(id) ? `/en/products/${id}/` : undefined;
    return links(esPath, enPath, path);
  }

  if (section === 'recetas' || section === 'recipes') {
    if (!id) return links(sections.recetas.es, sections.recetas.en, path);
    const esPath = esRecipeIds.has(id) ? `/es/recetas/${id}/` : undefined;
    const enPath = enRecipeIds.has(id) ? `/en/recipes/${id}/` : undefined;
    return links(esPath, enPath, path);
  }

  if (section && !id && sections[section]) {
    return links(sections[section].es, sections[section].en, path);
  }

  const only = lang === 'en' ? { en: path } : { es: path };
  return links(only.es, only.en, path);
}
