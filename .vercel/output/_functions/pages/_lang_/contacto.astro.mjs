/* empty css                                         */
import { g as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import $$Index$1 from '../../chunks/index_DJWSpsjE.mjs';
import { g as getHeaderColors } from '../../chunks/MainLayout_CEv0P3ec.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://taqueritos.com");
async function getStaticPaths() {
  const locales = ["es"];
  return locales.map((locale) => ({
    params: { lang: locale },
    props: { currentLang: locale }
  }));
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { currentLang } = Astro2.props;
  const headerColorConfig = getHeaderColors("contact");
  return renderTemplate`${renderComponent($$result, "ContactView", $$Index$1, { "currentLang": currentLang, "headerColorConfig": headerColorConfig })}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/contacto/index.astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/contacto/index.astro";
const $$url = "/[lang]/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
