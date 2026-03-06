/* empty css                                         */
import { _ as __variableDynamicImportRuntimeHelper } from '../../chunks/dynamic-import-helper_uMTE3ehW.mjs';
import { g as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import $$Index$1 from '../../chunks/index_DMChJKOo.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://taqueritos.com");
async function getStaticPaths() {
  const locales = ["en", "es"];
  return locales.map((locale) => ({
    params: { lang: locale },
    props: { currentLang: locale }
  }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { currentLang } = Astro2.props;
  const blogPosts = (await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../../../locales/en/news.json": () => import('../../chunks/i18n_BuYowHj0.mjs').then(n => n.a),"../../../locales/es/news.json": () => import('../../chunks/i18n_BuYowHj0.mjs').then(n => n.n)})), `../../../locales/${currentLang}/news.json`, 6)).items || [];
  return renderTemplate`${renderComponent($$result, "BlogListing", $$Index$1, { "blogPosts": blogPosts, "currentLang": currentLang })}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/blog/index.astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/blog/index.astro";
const $$url = "/[lang]/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
