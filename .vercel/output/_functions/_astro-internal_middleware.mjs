import { d as defineMiddleware, s as sequence } from './chunks/index_D_GqJmlK.mjs';
import { f as findRouteBySlug } from './chunks/routes_Cxx1RSUa.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Bh5x8ExO.mjs';
import 'kleur/colors';
import './chunks/astro/server_BXq2V0OX.mjs';
import 'clsx';
import 'cookie';

const routeMappings = {
  "products": { es: "productos", en: "products" },
  "news": { es: "noticias", en: "news" },
  "recipes": { es: "recetas", en: "recipes" },
  "yummiesone": { es: "yummiesone", en: "yummiesone" }
};
const onRequest$1 = defineMiddleware(async ({ request, redirect }, next) => {
  const url = new URL(request.url);
  const pathSegments = url.pathname.split("/").filter(Boolean);
  const isGamingRoot = pathSegments.length === 1 && pathSegments[0] === "gaming";
  const isGamingWithLang = pathSegments.length >= 2 && (pathSegments[0] === "es" || pathSegments[0] === "en") && pathSegments[1] === "gaming";
  if (isGamingRoot || isGamingWithLang) {
    const targetBase = "https://www.taqueritos.com/es/retos-torneos";
    const targetUrl = `${targetBase}${url.search}`;
    return new Response(null, {
      status: 301,
      headers: {
        Location: targetUrl
      }
    });
  }
  if (pathSegments.length < 2) {
    return next();
  }
  const lang = pathSegments[0];
  const section = pathSegments[1];
  if (lang !== "es" && lang !== "en") {
    return next();
  }
  if (section === "yummiesone" && lang === "en") {
    return redirect("/en");
  }
  const routeExists = findRouteBySlug(lang, section);
  if (!routeExists) {
    return redirect(`/${lang}`);
  }
  for (const [routeId, slugs] of Object.entries(routeMappings)) {
    if (section !== slugs[lang]) {
      let matchedRoute = null;
      let matchedLang = null;
      for (const [l, s] of Object.entries(slugs)) {
        if (section === s) {
          matchedRoute = routeId;
          matchedLang = l;
          break;
        }
      }
      if (matchedRoute && matchedLang && matchedLang !== lang) {
        const correctSlug = slugs[lang];
        const newPathSegments = [...pathSegments];
        newPathSegments[1] = correctSlug;
        const newPath = "/" + newPathSegments.join("/");
        return redirect(newPath);
      }
    }
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
