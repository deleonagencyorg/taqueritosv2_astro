/* empty css                                            */
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
  const locale = "es";
  const modules = /* #__PURE__ */ Object.assign({"../../../locales/es/recipes/alitas-de-pollo-empanizadas-taqueritostoreado-y-queso-fusion.json": __vite_glob_1_0,"../../../locales/es/recipes/camarones-picaros-con-taqueritos.json": __vite_glob_1_1,"../../../locales/es/recipes/carne-asada-con-taqueritos.json": __vite_glob_1_2,"../../../locales/es/recipes/dados-de-queso-toreados-con-taqueritos-chile-toreado.json": __vite_glob_1_3,"../../../locales/es/recipes/dobladas-crunchy-con-taqueritos-queso-fusion.json": __vite_glob_1_4,"../../../locales/es/recipes/elotes-locos-con-taqueritos-chile-toreado.json": __vite_glob_1_5,"../../../locales/es/recipes/ensalada-cesar-con-pollo-toreado-y-taqueritos-queso-fusion.json": __vite_glob_1_6,"../../../locales/es/recipes/ice-cream-taqueritos-chile-toreado.json": __vite_glob_1_7,"../../../locales/es/recipes/jalapeno-poppers-con-taqueritos-chile-toreado.json": __vite_glob_1_8,"../../../locales/es/recipes/mango-preparado-con-taqueritos-queso-fusion-y-chile-toreado.json": __vite_glob_1_9,"../../../locales/es/recipes/mini-bolitas-de-queso-cubierta-de-zibas-con-taqueritos.json": __vite_glob_1_10,"../../../locales/es/recipes/ommelette-con-taqueritos-chile-toreado.json": __vite_glob_1_11,"../../../locales/es/recipes/pasta-horneada-con-taqueritos-queso-fusion.json": __vite_glob_1_12,"../../../locales/es/recipes/quesadilla-de-jamon-y-queso-con-taqueritos-chile-queso-fusion.json": __vite_glob_1_13,"../../../locales/es/recipes/queso-frito-con-taqueritos.json": __vite_glob_1_14,"../../../locales/es/recipes/rajitas-con-taqueritos-chile-toreado.json": __vite_glob_1_15,"../../../locales/es/recipes/taquedogs.json": __vite_glob_1_16});
  const files = Object.values(modules);
  console.log(`Encontradas ${files.length} recetas para idioma ${locale}`);
  for (const mod of files) {
    const recipe = mod.default;
    if (!recipe?.id) continue;
    paths.push({
      params: { lang: locale, recipeId: recipe.id },
      props: { recipe, currentLang: locale }
    });
  }
  console.log(`Generadas ${paths.length} rutas de recetas en espa\xF1ol`);
  return paths;
}
const $$recipeId = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$recipeId;
  const { recipe, currentLang } = Astro2.props;
  const { lang, recipeId } = Astro2.params;
  setLocale(lang);
  console.log(`Renderizando receta: ${recipeId} en idioma: ${lang}`);
  const description = `Receta con Taqueritos: ${recipe.title}. Descubre ingredientes y paso a paso para prepararla.`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": recipe.title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "RecipeDetail", $$Index, { "currentLang": currentLang, "recipeId": recipeId })} ` })}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/recetas/[recipeId].astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/recetas/[recipeId].astro";
const $$url = "/[lang]/recetas/[recipeId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$recipeId,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
