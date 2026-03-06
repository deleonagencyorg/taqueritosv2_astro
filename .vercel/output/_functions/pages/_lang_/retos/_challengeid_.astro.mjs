/* empty css                                            */
import { g as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../../chunks/MainLayout_CEv0P3ec.mjs';
import { $ as $$Index } from '../../../chunks/index_BDKWRxiB.mjs';
import { s as setLocale } from '../../../chunks/i18n_BuYowHj0.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://taqueritos.com");
async function getStaticPaths() {
  const paths = [];
  const locale = "es";
  const modules = /* #__PURE__ */ Object.assign({});
  const files = Object.values(modules);
  console.log(`Encontrados ${files.length} retos para idioma ${locale}`);
  for (const mod of files) {
    const challenge = mod.default;
    if (!challenge?.id) continue;
    paths.push({
      params: { lang: locale, challengeId: challenge.id },
      props: { challenge, currentLang: locale }
    });
  }
  console.log(`Generadas ${paths.length} rutas de retos en espa\xF1ol`);
  return paths;
}
const $$challengeId = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$challengeId;
  const { lang, challengeId } = Astro2.params;
  setLocale(lang);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "", "description": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ChallengesDetail", $$Index, { "currentLang": lang, "challengeId": challengeId })} ` })}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/retos/[challengeId].astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/retos/[challengeId].astro";
const $$url = "/[lang]/retos/[challengeId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$challengeId,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
