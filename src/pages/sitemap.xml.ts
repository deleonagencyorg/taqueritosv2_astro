import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import config from '../i18n/config';
import enProducts from '../locales/en/products.json';

const staticPages = ['/', '/menu', '/nosotros', '/contacto'];

// Menu URLs from both languages (landing pages)
const menuUrls = [
  '/marcas', '/brands',
  '/productos', '/products',
  '/recetas', '/recipes',
  '/retos-torneos', '/challenges-tournaments',
  '/yummiesone',
  '/blog',
  '/contacto', '/contact',
  '/encontranos', '/find-us'
];

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  
  // Generate language versions of static pages
  const staticPagesWithLang = staticPages.flatMap((page) =>
    config.supportedLocales.map((lang) => `/${lang}${page}`)
  );

  // Generate language versions of menu URLs
  const menuUrlsWithLang = menuUrls.flatMap((url) => {
    const lang = url.startsWith('/en') ? 'en' : url.startsWith('/es') ? 'es' : null;
    if (lang && config.supportedLocales.includes(lang)) {
      return [`/${lang}${url.replace(`/${lang}`, '')}`];
    }
    // Si la URL no lleva prefijo, generamos para ambos idiomas
    return config.supportedLocales.map((lng) => `/${lng}${url}`);
  });

  // Blog posts with language prefixes (colección "blog")
  const blogPosts = posts.map((post) =>
    `/${post.slug.split('/')[0]}/blog/${post.slug.split('/')[1]}`
  );

  // ==== URLs dinámicas de retos (solo ES) ====
  const challengesModules = import.meta.glob('../locales/es/challenges/*.json', { eager: true }) as Record<string, any>;
  const challengeUrls = Object.values(challengesModules)
    .map((mod: any) => mod.default)
    .filter((challenge: any) => challenge && challenge.id)
    .map((challenge: any) => `/es/retos-torneos/${challenge.id}`);

  // ==== URLs dinámicas de recetas (ES y EN) ====
  const recipesEnModules = import.meta.glob('../locales/en/recipes/*.json', { eager: true }) as Record<string, any>;
  const recipesEsModules = import.meta.glob('../locales/es/recipes/*.json', { eager: true }) as Record<string, any>;

  const recipeUrlsEn = Object.values(recipesEnModules)
    .map((mod: any) => mod.default)
    .filter((recipe: any) => recipe && recipe.id)
    .map((recipe: any) => `/en/recipes/${recipe.id}`);

  const recipeUrlsEs = Object.values(recipesEsModules)
    .map((mod: any) => mod.default)
    .filter((recipe: any) => recipe && recipe.id)
    .map((recipe: any) => `/es/recipes/${recipe.id}`);

  // ==== URLs dinámicas de productos (actualmente EN) ====
  const enItems = (enProducts as any)?.items || (enProducts as any) || [];
  const productUrlsEn = (Array.isArray(enItems) ? enItems : [])
    .filter((p: any) => p && p.id)
    .map((p: any) => `/en/products/${p.id}`);

  const allUrls = [
    ...staticPagesWithLang,
    ...menuUrlsWithLang,
    ...blogPosts,
    ...challengeUrls,
    ...recipeUrlsEn,
    ...recipeUrlsEs,
    ...productUrlsEn,
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls.map(url => `
        <url>
          <loc>https://taqueritos.com${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `).join('')}
    </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  );
};
