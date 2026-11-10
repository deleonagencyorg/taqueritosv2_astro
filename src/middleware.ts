import { defineMiddleware } from 'astro:middleware';

const sectionByAnySlug: Record<string, { es: string; en: string }> = {
  productos: { es: 'productos', en: 'products' },
  products: { es: 'productos', en: 'products' },
  recetas: { es: 'recetas', en: 'recipes' },
  recipes: { es: 'recetas', en: 'recipes' },
  contacto: { es: 'contacto', en: 'contact' },
  contact: { es: 'contacto', en: 'contact' },
  nosotros: { es: 'nosotros', en: 'about-us' },
  'about-us': { es: 'nosotros', en: 'about-us' },
  marcas: { es: 'marcas', en: 'brands' },
  brands: { es: 'marcas', en: 'brands' },
  'retos-torneos': { es: 'retos-torneos', en: 'challenges-tournaments' },
  'challenges-tournaments': { es: 'retos-torneos', en: 'challenges-tournaments' },
};

const legacyRoots: Record<string, string> = {
  producto: '/es/productos/',
  productos: '/es/productos/',
  receta: '/es/recetas/',
  recetas: '/es/recetas/',
  encontranos: '/es/contacto/',
};

export const onRequest = defineMiddleware(async ({ request, redirect }, next) => {
  try {
    const url = new URL(request.url);
    if (/\.[a-z0-9]+$/i.test(url.pathname)) return next();

    const hadTrailingSlash = url.pathname.endsWith('/');
    const pathSegments = url.pathname.split('/').filter(Boolean);

    const isGamingRoot = pathSegments.length === 1 && pathSegments[0] === 'gaming';
    const isGamingWithLang =
      pathSegments.length >= 2 &&
      (pathSegments[0] === 'es' || pathSegments[0] === 'en') &&
      pathSegments[1] === 'gaming';

    if (isGamingRoot || isGamingWithLang) {
      return redirect(`https://www.taqueritos.com/es/retos-torneos/${url.search}`, 301);
    }

    if (pathSegments.length === 0) return next();

    const root = pathSegments[0];
    if (root === 'api') return next();
    if (root !== 'es' && root !== 'en') {
      if (legacyRoots[root] && pathSegments.length === 1) return redirect(legacyRoots[root], 301);
      return new Response('Not found', { status: 404, headers: { 'content-type': 'text/plain; charset=utf-8' } });
    }

    if (pathSegments.length < 2) {
      if (!hadTrailingSlash && pathSegments.length > 0) {
        return redirect(`/${pathSegments.join('/')}/${url.search}`, 301);
      }
      return next();
    }

    const lang = root as 'es' | 'en';
    const section = pathSegments[1];

    const validSections = new Set([
      'productos', 'products', 'recetas', 'recipes', 'contacto', 'contact', 'nosotros', 'about-us',
      'marcas', 'brands', 'retos-torneos', 'challenges-tournaments', 'blog', 'noticias', 'news',
      'retos', 'challenges', 'jurados', 'participacion', 'yummiesone', 'donde-comprar', 'where-to-buy', 'gaming',
    ]);

    if (!validSections.has(section)) {
      return new Response('Not found', { status: 404, headers: { 'content-type': 'text/plain; charset=utf-8' } });
    }

    if (section === 'yummiesone' && lang === 'en') return redirect('/en/', 301);
    if (section === 'donde-comprar') return redirect('/es/contacto/', 301);
    if (section === 'where-to-buy') return redirect('/en/contact/', 301);

    const pair = sectionByAnySlug[section];
    if (pair && pair[lang] !== section) {
      const nextSegments = [...pathSegments];
      nextSegments[1] = pair[lang];
      return redirect(`/${nextSegments.join('/')}/${url.search}`, 301);
    }

    if (!hadTrailingSlash) {
      return redirect(`/${pathSegments.join('/')}/${url.search}`, 301);
    }

    return next();
  } catch (error) {
    console.error('[Middleware] Error processing request:', error);
    return next();
  }
});
