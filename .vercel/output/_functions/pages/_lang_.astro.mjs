/* empty css                                      */
import { g as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, u as unescapeHTML, b as addAttribute } from '../chunks/astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { g as getRouteById } from '../chunks/routes_Cxx1RSUa.mjs';
import { s as setLocale, t } from '../chunks/i18n_BuYowHj0.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_CEv0P3ec.mjs';
import $$Index$1 from '../chunks/index_f_fQtMUN.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://taqueritos.com");
async function getStaticPaths() {
  const homeRoute = getRouteById("home");
  if (!homeRoute) return [];
  return Object.keys(homeRoute.slugs).map((lang) => ({
    params: { lang }
  }));
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  setLocale(lang);
  const homeRoute = getRouteById("home");
  if (!homeRoute) {
    throw new Error("Home route configuration is missing.");
  }
  const pageTitle = homeRoute.metaTitleKey ? t(homeRoute.metaTitleKey) : "Home";
  const pageDescription = homeRoute.metaDescriptionKey ? t(homeRoute.metaDescriptionKey) : "";
  const ContentComponent = $$Index$1;
  const socialMedia = t("social_media", { namespace: "common", locale: lang });
  const sameAs = [
    socialMedia?.facebook?.url,
    socialMedia?.instagram?.url,
    socialMedia?.tiktok?.url
  ].filter(Boolean);
  const seoKeywords = lang === "es" ? "snacks centroam\xE9rica, taqueritos, zambos, ranchitas, superman snacks,snacks honduras, snacks guatemala, marca l\xEDder snacks, snacks yummies" : "central america snacks, honduras snacks, guatemala snacks, leading snack brand, snacks yummies, taqueritos, zambos, ranchitas, superman snacks";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "description": pageDescription }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "ContentComponent", ContentComponent, {})} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template(['  <meta name="keywords"', '> <meta name="author" content="Taqueritos"> <meta name="robots" content="index, follow"> <link rel="canonical"', '>  <meta property="og:title"', '> <meta property="og:description"', '> <meta property="og:image" content="https://snack.yummiespromociones.com/taqueritos/Logo-Taqueritos-2019-300x100.webp"> <meta property="og:url"', '> <meta property="og:type" content="website"> <meta property="og:site_name" content="Taqueritos"> <meta property="og:locale"', '>  <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"', '> <meta name="twitter:description"', '> <meta name="twitter:image" content="https://snack.yummiespromociones.com/taqueritos/Logo-Taqueritos-2019-300x100.webp"> <meta name="twitter:site" content="@taqueritos">  <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> "])), addAttribute(seoKeywords, "content"), addAttribute(`https://taqueritos.com/${lang}`, "href"), addAttribute(`Taqueritos - ${pageTitle}`, "content"), addAttribute(pageDescription, "content"), addAttribute(`https://taqueritos.com/${lang}`, "content"), addAttribute(lang === "es" ? "es_ES" : "en_US", "content"), addAttribute(`Taqueritos - ${pageTitle}`, "content"), addAttribute(pageDescription, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Taqueritos",
    "alternateName": "Taqueritos",
    "url": "https://taqueritos.com",
    "logo": "https://snack.yummiespromociones.com/taqueritos/Logo-Taqueritos-2019-300x100.webp",
    "description": lang === "es" ? "Marca l\xEDder de snacks en Centroam\xE9rica. Taqueritos, Zambos, Ranchitas y Superman. Calidad y sabor inigualable." : "Leading snack brand in Central America. Taqueritos, Zambos, Ranchitas and Superman. Unmatched quality and flavor.",
    "foundingDate": "1990",
    "areaServed": [
      "Honduras",
      "Guatemala",
      "El Salvador",
      "Nicaragua",
      "Costa Rica",
      "Rep\xFAblica Dominicana"
    ],
    "brand": [
      {
        "@type": "Brand",
        "name": "Taqueritos",
        "url": "https://taqueritos.com"
      }
    ],
    "sameAs": sameAs,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+504-2275-3370",
      "contactType": "customer service",
      "availableLanguage": ["Spanish", "English"],
      "hoursAvailable": "Mo-Fr 08:00-17:00"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Barrio Moraz\xE1n, Frente a Plantas Tropicales, Bulevar Suyapa",
      "addressLocality": "Tegucigalpa",
      "addressCountry": "Honduras"
    }
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Taqueritos",
    "url": "https://taqueritos.com",
    "description": lang === "es" ? "Sitio web oficial de Taqueritos, la marca l\xEDder de snacks en Centroam\xE9rica" : "Official website of Taqueritos, the leading snack brand in Central America",
    "inLanguage": lang === "es" ? "es-ES" : "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `https://taqueritos.com/${lang}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": lang === "es" ? "Inicio" : "Home",
        "item": `https://taqueritos.com/${lang}`
      }
    ]
  }))) })}` })}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/index.astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
