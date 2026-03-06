/* empty css                                            */
import { _ as __vite_glob_0_0 } from '../../../chunks/baked-pasta-with-taqueritos-cheese-fusion_BVTdNRg9.mjs';
import { _ as __vite_glob_0_1 } from '../../../chunks/cesar-salad-with-bullfighting-chicken-and-taqueritos-fusion-cheese_vsq5q62_.mjs';
import { _ as __vite_glob_0_2 } from '../../../chunks/crazy-corn-toreados_CD6BSHyn.mjs';
import { _ as __vite_glob_0_3 } from '../../../chunks/crunchy-folded-tortillas-with-taqueritos-cheese-fusion_B1bBzJhL.mjs';
import { _ as __vite_glob_0_4 } from '../../../chunks/empanized-chicken-wings-torado-taqueritos-and-fusion-cheese_CbE5IVoo.mjs';
import { _ as __vite_glob_0_5 } from '../../../chunks/fired-cheese-with-taqueritos_BZTolZXA.mjs';
import { _ as __vite_glob_0_6 } from '../../../chunks/ham-and-cheese-cheese-with-chile-fusion-cheese-taqueritos_DE5fx7o5.mjs';
import { _ as __vite_glob_0_7 } from '../../../chunks/ice-cream-taqueritos-chile-toreado_Ca41Rit5.mjs';
import { _ as __vite_glob_0_8 } from '../../../chunks/jalapeno-poppers-with-taqueritos-chile-toreado_DIdIgznO.mjs';
import { _ as __vite_glob_0_9 } from '../../../chunks/mango-prepared-with-taqueritos-fusion-cheese-and-chile-toreado_DZpltVVV.mjs';
import { _ as __vite_glob_0_10 } from '../../../chunks/omelette-with-taqueritos-chile-toreado_BpemzOyg.mjs';
import { _ as __vite_glob_0_11 } from '../../../chunks/roasted-meat-with-taqueritos_Bngsyd_1.mjs';
import { _ as __vite_glob_0_12 } from '../../../chunks/small-balls-covered-of-zibas-with-taqueritos_piBpm4aB.mjs';
import { _ as __vite_glob_0_13 } from '../../../chunks/spicy-shrimp-with-taqueritos_CumBt8Me.mjs';
import { _ as __vite_glob_0_14 } from '../../../chunks/taquedogs_JNk01OyN.mjs';
import { _ as __vite_glob_0_15 } from '../../../chunks/towed-taled-chile-taqueritos-cheese-dice_Be_oHT78.mjs';
import { _ as __vite_glob_0_16 } from '../../../chunks/veggie-sticks-with-taqueritos-chile-toreado_DRUDeh_M.mjs';
import { _ as __vite_glob_1_16, a as __vite_glob_1_15, b as __vite_glob_1_14, c as __vite_glob_1_13, d as __vite_glob_1_12, e as __vite_glob_1_11, f as __vite_glob_1_10, g as __vite_glob_1_9, h as __vite_glob_1_8, i as __vite_glob_1_7, j as __vite_glob_1_6, k as __vite_glob_1_5, l as __vite_glob_1_4, m as __vite_glob_1_3, n as __vite_glob_1_2, o as __vite_glob_1_1, p as __vite_glob_1_0 } from '../../../chunks/taquedogs_rwPL-3nY.mjs';
import { g as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { s as setLocale } from '../../../chunks/i18n_BuYowHj0.mjs';
import { $ as $$MainLayout } from '../../../chunks/MainLayout_CEv0P3ec.mjs';
import { $ as $$Index } from '../../../chunks/index_EOPSZ8v-.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://taqueritos.com");
async function getStaticPaths() {
  const paths = [];
  const enModules = /* #__PURE__ */ Object.assign({"../../../locales/en/recipes/baked-pasta-with-taqueritos-cheese-fusion.json": __vite_glob_0_0,"../../../locales/en/recipes/cesar-salad-with-bullfighting-chicken-and-taqueritos-fusion-cheese.json": __vite_glob_0_1,"../../../locales/en/recipes/crazy-corn-toreados.json": __vite_glob_0_2,"../../../locales/en/recipes/crunchy-folded-tortillas-with-taqueritos-cheese-fusion.json": __vite_glob_0_3,"../../../locales/en/recipes/empanized-chicken-wings-torado-taqueritos-and-fusion-cheese.json": __vite_glob_0_4,"../../../locales/en/recipes/fired-cheese-with-taqueritos.json": __vite_glob_0_5,"../../../locales/en/recipes/ham-and-cheese-cheese-with-chile-fusion-cheese-taqueritos.json": __vite_glob_0_6,"../../../locales/en/recipes/ice-cream-taqueritos-chile-toreado.json": __vite_glob_0_7,"../../../locales/en/recipes/jalapeno-poppers-with-taqueritos-chile-toreado.json": __vite_glob_0_8,"../../../locales/en/recipes/mango-prepared-with-taqueritos-fusion-cheese-and-chile-toreado.json": __vite_glob_0_9,"../../../locales/en/recipes/omelette-with-taqueritos-chile-toreado.json": __vite_glob_0_10,"../../../locales/en/recipes/roasted-meat-with-taqueritos.json": __vite_glob_0_11,"../../../locales/en/recipes/small-balls-covered-of-zibas-with-taqueritos.json": __vite_glob_0_12,"../../../locales/en/recipes/spicy-shrimp-with-taqueritos.json": __vite_glob_0_13,"../../../locales/en/recipes/taquedogs.json": __vite_glob_0_14,"../../../locales/en/recipes/towed-taled-chile-taqueritos-cheese-dice.json": __vite_glob_0_15,"../../../locales/en/recipes/veggie-sticks-with-taqueritos-chile-toreado.json": __vite_glob_0_16});
  const enFiles = Object.values(enModules);
  for (const mod of enFiles) {
    const recipe = mod.default;
    if (!recipe?.id) continue;
    paths.push({
      params: { lang: "en", recipeId: recipe.id },
      props: { recipe, currentLang: "en" }
    });
  }
  const esModules = /* #__PURE__ */ Object.assign({"../../../locales/es/recipes/alitas-de-pollo-empanizadas-taqueritostoreado-y-queso-fusion.json": __vite_glob_1_0,"../../../locales/es/recipes/camarones-picaros-con-taqueritos.json": __vite_glob_1_1,"../../../locales/es/recipes/carne-asada-con-taqueritos.json": __vite_glob_1_2,"../../../locales/es/recipes/dados-de-queso-toreados-con-taqueritos-chile-toreado.json": __vite_glob_1_3,"../../../locales/es/recipes/dobladas-crunchy-con-taqueritos-queso-fusion.json": __vite_glob_1_4,"../../../locales/es/recipes/elotes-locos-con-taqueritos-chile-toreado.json": __vite_glob_1_5,"../../../locales/es/recipes/ensalada-cesar-con-pollo-toreado-y-taqueritos-queso-fusion.json": __vite_glob_1_6,"../../../locales/es/recipes/ice-cream-taqueritos-chile-toreado.json": __vite_glob_1_7,"../../../locales/es/recipes/jalapeno-poppers-con-taqueritos-chile-toreado.json": __vite_glob_1_8,"../../../locales/es/recipes/mango-preparado-con-taqueritos-queso-fusion-y-chile-toreado.json": __vite_glob_1_9,"../../../locales/es/recipes/mini-bolitas-de-queso-cubierta-de-zibas-con-taqueritos.json": __vite_glob_1_10,"../../../locales/es/recipes/ommelette-con-taqueritos-chile-toreado.json": __vite_glob_1_11,"../../../locales/es/recipes/pasta-horneada-con-taqueritos-queso-fusion.json": __vite_glob_1_12,"../../../locales/es/recipes/quesadilla-de-jamon-y-queso-con-taqueritos-chile-queso-fusion.json": __vite_glob_1_13,"../../../locales/es/recipes/queso-frito-con-taqueritos.json": __vite_glob_1_14,"../../../locales/es/recipes/rajitas-con-taqueritos-chile-toreado.json": __vite_glob_1_15,"../../../locales/es/recipes/taquedogs.json": __vite_glob_1_16});
  const esFiles = Object.values(esModules);
  for (const mod of esFiles) {
    const recipe = mod.default;
    if (!recipe?.id) continue;
    paths.push({
      params: { lang: "es", recipeId: recipe.id },
      props: { recipe, currentLang: "es" }
    });
  }
  return paths;
}
const $$recipeId = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$recipeId;
  const { recipe, currentLang } = Astro2.props;
  const { lang, recipeId } = Astro2.params;
  setLocale(lang);
  const description = lang === "es" ? `Receta con Taqueritos: ${recipe.title}. Descubre ingredientes y paso a paso para prepararla.` : `Taqueritos recipe: ${recipe.title}. Discover ingredients and step-by-step instructions to prepare it.`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": recipe.title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "RecipeDetail", $$Index, { "currentLang": currentLang, "recipeId": recipeId })} ` })}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/recipes/[recipeId].astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/recipes/[recipeId].astro";
const $$url = "/[lang]/recipes/[recipeId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$recipeId,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
