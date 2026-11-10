import type { APIRoute } from 'astro';
import esProducts from '../locales/es/products.json';
import enProducts from '../locales/en/products.json';

const SITE = 'https://www.taqueritos.com';

type IdRecord = { id?: string };

const staticUrls = [
  '/es/',
  '/en/',
  '/es/nosotros/',
  '/en/about-us/',
  '/es/contacto/',
  '/en/contact/',
  '/es/productos/',
  '/en/products/',
  '/es/recetas/',
  '/en/recipes/',
  '/es/retos-torneos/',
  '/en/challenges-tournaments/',
  '/es/marcas/',
  '/en/brands/',
  '/es/blog/',
  '/en/blog/',
  '/es/participacion/',
  '/es/jurados/',
];

function idsFrom(items: IdRecord[] | undefined, prefix: string): string[] {
  return (items || [])
    .map((item) => item.id)
    .filter((id): id is string => Boolean(id))
    .map((id) => `${prefix}${id}/`);
}

function idsFromModules(modules: Record<string, { default?: IdRecord }>, prefix: string): string[] {
  return Object.values(modules)
    .map((mod) => mod.default?.id)
    .filter((id): id is string => Boolean(id))
    .map((id) => `${prefix}${id}/`);
}

export const GET: APIRoute = async () => {
  const esRecipeModules = import.meta.glob('../locales/es/recipes/*.json', { eager: true }) as Record<string, { default?: IdRecord }>;
  const enRecipeModules = import.meta.glob('../locales/en/recipes/*.json', { eager: true }) as Record<string, { default?: IdRecord }>;
  const challengeModules = import.meta.glob('../locales/es/challenges/*.json', { eager: true }) as Record<string, { default?: IdRecord }>;

  const urls = [...new Set([
    ...staticUrls,
    ...idsFrom((esProducts as { items?: IdRecord[] }).items, '/es/productos/'),
    ...idsFrom((enProducts as { items?: IdRecord[] }).items, '/en/products/'),
    ...idsFromModules(esRecipeModules, '/es/recetas/'),
    ...idsFromModules(enRecipeModules, '/en/recipes/'),
    ...idsFromModules(challengeModules, '/es/retos-torneos/'),
  ])];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${SITE}${url}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
