import type { APIRoute } from 'astro';
import config from '../i18n/config';
import { getAllProducts } from '../services/api/products';
import { getAllRecipes } from '../services/api/recipes';
import { getBlogPosts } from '../services/api/news';

const staticPages = ['/', '/nosotros', '/about-us', '/contacto', '/contact', '/blog'];

// Menu URLs from both languages (landing pages)
const menuUrls = [
  '/marcas', '/brands',
  '/productos', '/products',
  '/recetas', '/recipes',
  '/retos-torneos', '/challenges-tournaments',
  '/blog',
  '/contacto', '/contact',
  '/encontranos', '/find-us'
];

export const GET: APIRoute = async () => {
  const [productsEs, productsEn, recipesEs, recipesEn, postsEs, postsEn] = await Promise.all([
    getAllProducts('es'),
    getAllProducts('en'),
    getAllRecipes('es'),
    getAllRecipes('en'),
    getBlogPosts('es'),
    getBlogPosts('en'),
  ]);
  
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

  const blogPosts = [
    ...postsEs.map((post) => `/es/blog/${post.slug}`),
    ...postsEn.map((post) => `/en/blog/${post.slug}`),
  ];

  // ==== URLs dinámicas de retos (solo ES) ====
  const challengesModules = import.meta.glob('../locales/es/challenges/*.json', { eager: true }) as Record<string, any>;
  const challengeUrls = Object.values(challengesModules)
    .map((mod: any) => mod.default)
    .filter((challenge: any) => challenge && challenge.id)
    .map((challenge: any) => `/es/retos-torneos/${challenge.id}`);

  const recipeUrlsEn = recipesEn.map((recipe) => `/en/recipes/${recipe.slug}`);
  const recipeUrlsEs = recipesEs.map((recipe) => `/es/recetas/${recipe.slug}`);
  const productUrlsEn = [
    ...productsEs.map((product) => `/es/productos/${product.id}`),
    ...productsEn.map((product) => `/en/products/${product.id}`),
  ];

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
