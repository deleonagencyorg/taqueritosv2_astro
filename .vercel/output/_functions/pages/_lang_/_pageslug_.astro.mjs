/* empty css                                         */
import { g as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { f as findRouteBySlug, r as routesConfig } from '../../chunks/routes_Cxx1RSUa.mjs';
import { s as setLocale, t } from '../../chunks/i18n_BuYowHj0.mjs';
import { $ as $$MainLayout } from '../../chunks/MainLayout_CEv0P3ec.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://taqueritos.com");
async function getStaticPaths() {
  const paths = [];
  for (const route of routesConfig) {
    if (route.id === "home") continue;
    for (const lang in route.slugs) {
      paths.push({
        params: { lang, pageSlug: route.slugs[lang] },
        props: { routeId: route.id }
      });
    }
  }
  return paths;
}
const $$pageSlug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$pageSlug;
  await Astro2.glob(/* #__PURE__ */ Object.assign({"../../views/AboutUs/index.astro": () => import('../../chunks/index_B8V7GJ0w.mjs'),"../../views/Blog/index.astro": () => import('../../chunks/index_DMChJKOo.mjs'),"../../views/Brands/index.astro": () => import('../../chunks/index_C91k0TLd.mjs'),"../../views/Challenges/index.astro": () => import('../../chunks/index_4BKxLRK2.mjs'),"../../views/Contact/index.astro": () => import('../../chunks/index_DJWSpsjE.mjs'),"../../views/Home/index.astro": () => import('../../chunks/index_f_fQtMUN.mjs'),"../../views/Jurados/index.astro": () => import('../../chunks/index_DJ1vcJ12.mjs'),"../../views/Participacion/index.astro": () => import('../../chunks/index_KWMybFPF.mjs'),"../../views/Products/index.astro": () => import('../../chunks/index_IA7DDD9i.mjs'),"../../views/Recipes/index.astro": () => import('../../chunks/index_vT8tP3fK.mjs'),"../../views/YummiesOne/index.astro": () => import('../../chunks/index_EdM0NaYe.mjs')}), () => "../../views/*/index.astro");
  const { lang, pageSlug } = Astro2.params;
  const { routeId } = Astro2.props;
  setLocale(lang);
  let pageTitle = "";
  let pageDescription = "";
  let ContentComponent;
  const currentRoute = findRouteBySlug(lang, pageSlug);
  console.log("Ruta encontrada:", currentRoute?.id);
  if (!currentRoute) {
    console.error(`Ruta no encontrada para lang=${lang}, pageSlug=${pageSlug}`);
    return Astro2.redirect(`/${lang}/404`);
  }
  const modules = /* #__PURE__ */ Object.assign({"../../views/AboutUs/index.astro": () => import('../../chunks/index_B8V7GJ0w.mjs'),"../../views/Blog/index.astro": () => import('../../chunks/index_DMChJKOo.mjs'),"../../views/Brands/index.astro": () => import('../../chunks/index_C91k0TLd.mjs'),"../../views/Challenges/index.astro": () => import('../../chunks/index_4BKxLRK2.mjs'),"../../views/Contact/index.astro": () => import('../../chunks/index_DJWSpsjE.mjs'),"../../views/Home/index.astro": () => import('../../chunks/index_f_fQtMUN.mjs'),"../../views/Jurados/index.astro": () => import('../../chunks/index_DJ1vcJ12.mjs'),"../../views/Participacion/index.astro": () => import('../../chunks/index_KWMybFPF.mjs'),"../../views/Products/index.astro": () => import('../../chunks/index_IA7DDD9i.mjs'),"../../views/Recipes/index.astro": () => import('../../chunks/index_vT8tP3fK.mjs'),"../../views/YummiesOne/index.astro": () => import('../../chunks/index_EdM0NaYe.mjs')});
  console.log("M\xF3dulos de VISTAS encontrados por import.meta.glob():", Object.keys(modules));
  const targetModulePath = currentRoute.contentComponent.replace("@/", "../../");
  console.log(`Buscando m\xF3dulo con ruta: ${targetModulePath} para la ruta ID: ${currentRoute.id}`);
  const moduleLoader = modules[targetModulePath];
  if (!moduleLoader) {
    console.error(`Cargador de m\xF3dulo no encontrado para la ruta: ${currentRoute.id}. Se esperaba la ruta: ${targetModulePath}`);
    console.error("M\xF3dulos de VISTAS disponibles de import.meta.glob():", Object.keys(modules));
    return Astro2.redirect(`/${lang}/404`);
  }
  const loadedModule = await moduleLoader();
  const ContentComponentModule = loadedModule;
  ContentComponent = ContentComponentModule.default;
  if (!ContentComponent) {
    console.error(`Componente por defecto no exportado o no encontrado en el m\xF3dulo: ${targetModulePath} para la ruta ID: ${currentRoute.id}`);
    return Astro2.redirect(`/${lang}/404`);
  }
  if (currentRoute.metaTitleKey) {
    pageTitle = t(currentRoute.metaTitleKey);
  } else if (currentRoute.id === "challenges") {
    pageTitle = lang === "es" ? "Retos y torneos" : "Challenges & Tournaments";
  } else {
    pageTitle = "Page";
  }
  pageDescription = currentRoute.metaDescriptionKey ? t(currentRoute.metaDescriptionKey) : "";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "description": pageDescription }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentComponent", ContentComponent, {})} ` })}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/[pageSlug].astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/[pageSlug].astro";
const $$url = "/[lang]/[pageSlug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$pageSlug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
