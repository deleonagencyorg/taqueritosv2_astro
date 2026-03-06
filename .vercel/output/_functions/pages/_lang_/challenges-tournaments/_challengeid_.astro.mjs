/* empty css                                            */
import { g as createAstro, c as createComponent } from '../../../chunks/astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://taqueritos.com");
async function getStaticPaths() {
  return [];
}
const $$challengeId = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$challengeId;
  const { lang } = Astro2.params;
  if (lang === "en") {
    return Astro2.redirect("/en/");
  }
  return Astro2.redirect("/es/retos-torneos");
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/challenges-tournaments/[challengeId].astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/challenges-tournaments/[challengeId].astro";
const $$url = "/[lang]/challenges-tournaments/[challengeId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$challengeId,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
