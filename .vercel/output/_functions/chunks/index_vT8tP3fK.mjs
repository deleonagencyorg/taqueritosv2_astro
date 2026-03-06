import { c as createComponent, g as createAstro, m as maybeRenderHead, b as addAttribute, k as renderScript, n as renderSlot, a as renderTemplate, r as renderComponent } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { g as getLocale } from './i18n_BuYowHj0.mjs';
/* empty css                              */
import { $ as $$RecipeCard } from './RecipeCard_Bldjwger.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://taqueritos.com");
const $$VideoHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$VideoHero;
  const {
    videoUrl,
    fallbackImageUrl,
    height = "400px",
    width = "100%",
    title,
    subtitle,
    overlayOpacity = "50",
    textColor = "text-white",
    showOverlay = true
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="video-hero-container"${addAttribute(`height: ${height}; width: ${width};`, "style")} data-astro-cid-2xbugcja> <!-- Fallback image that shows while video loads or if video fails --> <div class="fallback-image" data-astro-cid-2xbugcja> <img${addAttribute(fallbackImageUrl, "src")}${addAttribute(title || "Hero background", "alt")} width="1920" height="1080" loading="eager" data-astro-cid-2xbugcja> </div> <!-- Video background --> <div class="video-container" data-astro-cid-2xbugcja> <video autoplay muted loop playsinline class="hero-video" id="heroVideo" data-astro-cid-2xbugcja> <source${addAttribute(videoUrl, "src")} type="video/mp4" data-astro-cid-2xbugcja> <!-- If the browser doesn't support video, the fallback image will remain visible -->
Your browser does not support the video tag.
</video> </div> <!-- Mobile overlay with bg-primary (always visible on mobile) --> <div class="mobile-overlay" data-astro-cid-2xbugcja></div> <!-- Overlay with text (conditional) --> ${showOverlay && renderTemplate`<div${addAttribute(`overlay bg-black bg-opacity-${overlayOpacity}`, "class")} data-astro-cid-2xbugcja> ${title && renderTemplate`<div class="text-content" data-astro-cid-2xbugcja> <h1${addAttribute(`hero-title ${textColor}`, "class")} data-astro-cid-2xbugcja>${title}</h1> ${subtitle && renderTemplate`<p${addAttribute(`hero-subtitle ${textColor}`, "class")} data-astro-cid-2xbugcja>${subtitle}</p>`} </div>`} ${renderSlot($$result, $$slots["default"])} </div>`} <!-- If no overlay, still show content with transparent background --> ${!showOverlay && title && renderTemplate`<div class="overlay" style="background-color: transparent;" data-astro-cid-2xbugcja> <div class="text-content" data-astro-cid-2xbugcja> <h1${addAttribute(`hero-title ${textColor}`, "class")} data-astro-cid-2xbugcja>${title}</h1> ${subtitle && renderTemplate`<p${addAttribute(`hero-subtitle ${textColor}`, "class")} data-astro-cid-2xbugcja>${subtitle}</p>`} </div> ${renderSlot($$result, $$slots["default"])} </div>`} </div>  ${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/VideoHero/VideoHero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/VideoHero/VideoHero.astro", void 0);

const $$Astro = createAstro("https://taqueritos.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentLang = getLocale();
  const recipeModules = /* #__PURE__ */ Object.assign({"../../locales/en/recipes/baked-pasta-with-taqueritos-cheese-fusion.json": () => import('./baked-pasta-with-taqueritos-cheese-fusion_BVTdNRg9.mjs').then(n => n._),"../../locales/en/recipes/cesar-salad-with-bullfighting-chicken-and-taqueritos-fusion-cheese.json": () => import('./cesar-salad-with-bullfighting-chicken-and-taqueritos-fusion-cheese_vsq5q62_.mjs').then(n => n._),"../../locales/en/recipes/crazy-corn-toreados.json": () => import('./crazy-corn-toreados_CD6BSHyn.mjs').then(n => n._),"../../locales/en/recipes/crunchy-folded-tortillas-with-taqueritos-cheese-fusion.json": () => import('./crunchy-folded-tortillas-with-taqueritos-cheese-fusion_B1bBzJhL.mjs').then(n => n._),"../../locales/en/recipes/empanized-chicken-wings-torado-taqueritos-and-fusion-cheese.json": () => import('./empanized-chicken-wings-torado-taqueritos-and-fusion-cheese_CbE5IVoo.mjs').then(n => n._),"../../locales/en/recipes/fired-cheese-with-taqueritos.json": () => import('./fired-cheese-with-taqueritos_BZTolZXA.mjs').then(n => n._),"../../locales/en/recipes/ham-and-cheese-cheese-with-chile-fusion-cheese-taqueritos.json": () => import('./ham-and-cheese-cheese-with-chile-fusion-cheese-taqueritos_DE5fx7o5.mjs').then(n => n._),"../../locales/en/recipes/ice-cream-taqueritos-chile-toreado.json": () => import('./ice-cream-taqueritos-chile-toreado_Ca41Rit5.mjs').then(n => n._),"../../locales/en/recipes/jalapeno-poppers-with-taqueritos-chile-toreado.json": () => import('./jalapeno-poppers-with-taqueritos-chile-toreado_DIdIgznO.mjs').then(n => n._),"../../locales/en/recipes/mango-prepared-with-taqueritos-fusion-cheese-and-chile-toreado.json": () => import('./mango-prepared-with-taqueritos-fusion-cheese-and-chile-toreado_DZpltVVV.mjs').then(n => n._),"../../locales/en/recipes/omelette-with-taqueritos-chile-toreado.json": () => import('./omelette-with-taqueritos-chile-toreado_BpemzOyg.mjs').then(n => n._),"../../locales/en/recipes/roasted-meat-with-taqueritos.json": () => import('./roasted-meat-with-taqueritos_Bngsyd_1.mjs').then(n => n._),"../../locales/en/recipes/small-balls-covered-of-zibas-with-taqueritos.json": () => import('./small-balls-covered-of-zibas-with-taqueritos_piBpm4aB.mjs').then(n => n._),"../../locales/en/recipes/spicy-shrimp-with-taqueritos.json": () => import('./spicy-shrimp-with-taqueritos_CumBt8Me.mjs').then(n => n._),"../../locales/en/recipes/taquedogs.json": () => import('./taquedogs_JNk01OyN.mjs').then(n => n._),"../../locales/en/recipes/towed-taled-chile-taqueritos-cheese-dice.json": () => import('./towed-taled-chile-taqueritos-cheese-dice_Be_oHT78.mjs').then(n => n._),"../../locales/en/recipes/veggie-sticks-with-taqueritos-chile-toreado.json": () => import('./veggie-sticks-with-taqueritos-chile-toreado_DRUDeh_M.mjs').then(n => n._),"../../locales/es/recipes/alitas-de-pollo-empanizadas-taqueritostoreado-y-queso-fusion.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n.p),"../../locales/es/recipes/camarones-picaros-con-taqueritos.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n.o),"../../locales/es/recipes/carne-asada-con-taqueritos.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n.n),"../../locales/es/recipes/dados-de-queso-toreados-con-taqueritos-chile-toreado.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n.m),"../../locales/es/recipes/dobladas-crunchy-con-taqueritos-queso-fusion.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n.l),"../../locales/es/recipes/elotes-locos-con-taqueritos-chile-toreado.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n.k),"../../locales/es/recipes/ensalada-cesar-con-pollo-toreado-y-taqueritos-queso-fusion.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n.j),"../../locales/es/recipes/ice-cream-taqueritos-chile-toreado.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n.i),"../../locales/es/recipes/jalapeno-poppers-con-taqueritos-chile-toreado.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n.h),"../../locales/es/recipes/mango-preparado-con-taqueritos-queso-fusion-y-chile-toreado.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n.g),"../../locales/es/recipes/mini-bolitas-de-queso-cubierta-de-zibas-con-taqueritos.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n.f),"../../locales/es/recipes/ommelette-con-taqueritos-chile-toreado.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n.e),"../../locales/es/recipes/pasta-horneada-con-taqueritos-queso-fusion.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n.d),"../../locales/es/recipes/quesadilla-de-jamon-y-queso-con-taqueritos-chile-queso-fusion.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n.c),"../../locales/es/recipes/queso-frito-con-taqueritos.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n.b),"../../locales/es/recipes/rajitas-con-taqueritos-chile-toreado.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n.a),"../../locales/es/recipes/taquedogs.json": () => import('./taquedogs_rwPL-3nY.mjs').then(n => n._)});
  const allRecipes = [];
  for (const path in recipeModules) {
    const lang = path.split("/")[3];
    if (lang === currentLang) {
      const module = await recipeModules[path]();
      allRecipes.push(module.default);
    }
  }
  const noRecipesText = currentLang === "es" ? "No hay recetas disponibles en este momento." : "No recipes available at this time.";
  const noFilterResultsText = currentLang === "es" ? "No se encontraron resultados para la selecci\xF3n" : "No results found for the selection";
  const categoryFilterLabels = currentLang === "es" ? {
    label: "Momento del dia",
    all: "Todas las recetas",
    breakfast: "Desayuno",
    brunch: "Brunch",
    lunch: "Almuerzo",
    snack: "Snack"
  } : {
    label: "Meal",
    all: "All recipes",
    breakfast: "Breakfast",
    brunch: "Brunch",
    lunch: "Lunch",
    snack: "Snack"
  };
  const productFilterLabels = currentLang === "es" ? {
    label: "Producto",
    all: "Todos los productos"
  } : {
    label: "Product",
    all: "All products"
  };
  function normalizeType(r) {
    const rawCategory = String(r.category || "").toLowerCase().trim();
    const rawType = String(r.type || "").toLowerCase().trim();
    const raw = rawCategory || rawType;
    if (["breakfast", "desayuno"].includes(raw)) return "breakfast";
    if (["brunch"].includes(raw)) return "brunch";
    if (["lunch", "almuerzo"].includes(raw)) return "lunch";
    if (["snack"].includes(raw)) return "snack";
    return "other";
  }
  const productOptions = Array.from(
    new Set(
      allRecipes.flatMap((r) => {
        const p = r.product;
        if (Array.isArray(p)) return p;
        return p ? [p] : [];
      }).map((p) => String(p).trim()).filter((p) => p.length > 0)
    )
  );
  const videoUrl = "https://snack.yummiespromociones.com/taqueritos/videotaqueritos.mp4";
  const fallbackImageUrl = "https://snack.yummiespromociones.com/taqueritos/videorecetas.png";
  return renderTemplate`${maybeRenderHead()}<div class="-mt-px -mb-px overflow-hidden" style="background: radial-gradient(circle at 50% 50%, #2c0b0b 0%, #150404 80%);" data-astro-cid-co5agl6a> <div id="herovideo" class="pt-0" data-astro-cid-co5agl6a> ${renderComponent($$result, "VideoHero", $$VideoHero, { "videoUrl": videoUrl, "fallbackImageUrl": fallbackImageUrl, "height": "520px", "width": "100%", "showOverlay": false, "data-astro-cid-co5agl6a": true })} </div> <div class="container mx-auto px-4 py-18 mt-0" data-astro-cid-co5agl6a> <div class="h-8 md:h-12" data-astro-cid-co5agl6a></div> <!-- Filter Dropdowns --> <div class="w-full flex flex-col md:flex-row gap-4 mb-10 max-w-5xl mx-auto md:items-end" data-astro-cid-co5agl6a> <!-- Category filter --> <div class="flex-1 text-left" data-astro-cid-co5agl6a> <label for="categoryFilter" class="block text-sm font-semibold text-white mb-2" data-astro-cid-co5agl6a> ${categoryFilterLabels.label} </label> <select id="categoryFilter" class="w-full bg-transparent border border-white rounded-md px-4 py-2 text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-400 [&>option]:text-gray-900 [&>option]:bg-white" data-astro-cid-co5agl6a> <option value="all" data-astro-cid-co5agl6a>${categoryFilterLabels.all}</option> <option value="breakfast" data-astro-cid-co5agl6a>${categoryFilterLabels.breakfast}</option> <option value="brunch" data-astro-cid-co5agl6a>${categoryFilterLabels.brunch}</option> <option value="lunch" data-astro-cid-co5agl6a>${categoryFilterLabels.lunch}</option> <option value="snack" data-astro-cid-co5agl6a>${categoryFilterLabels.snack}</option> </select> </div>  ${productOptions.length > 0 && renderTemplate`<div class="flex-1 text-left" data-astro-cid-co5agl6a> <label for="productFilter" class="block text-sm font-semibold text-white mb-2" data-astro-cid-co5agl6a> ${productFilterLabels.label} </label> <select id="productFilter" class="w-full bg-transparent border border-white rounded-md px-4 py-2 text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-400 [&>option]:text-gray-900 [&>option]:bg-white" data-astro-cid-co5agl6a> <option value="all" data-astro-cid-co5agl6a>${productFilterLabels.all}</option> ${productOptions.map((product) => renderTemplate`<option${addAttribute(product.toLowerCase(), "value")} data-astro-cid-co5agl6a>${product}</option>`)} </select> </div>`} </div> <!-- Section title above recipes --> <div class="max-w-5xl mx-auto mb-6 px-1" data-astro-cid-co5agl6a> <div class="title" data-astro-cid-co5agl6a> <p data-astro-cid-co5agl6a> ${currentLang === "es" ? "Craftea tu siguiente buff:" : "Craft your next buff:"} </p> <p data-astro-cid-co5agl6a> ${currentLang === "es" ? "Recetas para subir de nivel" : "Recipes to level up"} </p> </div> </div> ${allRecipes.length === 0 ? renderTemplate`<p class="text-center text-gray-500" data-astro-cid-co5agl6a>${noRecipesText}</p>` : renderTemplate`<div id="recipesGrid" class="w-full mx-auto grid items-stretch grid-cols-2 xxs-only:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mt-12" data-astro-cid-co5agl6a> ${allRecipes.map((recipe) => renderTemplate`<div class="recipe-card h-full"${addAttribute(normalizeType(recipe), "data-type")}${addAttribute(Array.isArray(recipe.product) ? recipe.product.map((p) => String(p).toLowerCase()).join("|") : recipe.product ? String(recipe.product).toLowerCase() : "", "data-product")} data-astro-cid-co5agl6a> ${renderComponent($$result, "RecipeCard", $$RecipeCard, { "image": recipe.image || "/images/recipes/placeholder.jpg", "title": recipe.title, "time": `${recipe.preparation_time} MIN`, "id": recipe.id, "textColor": "text-white", "iconColor": "text-white", "data-astro-cid-co5agl6a": true })} </div>`)} </div>

      <div class="w-full flex justify-center mt-10" data-astro-cid-co5agl6a> <button id="recipesLoadMore" type="button" class="w-full max-w-xs border border-[#FF0048] rounded-[16px] bg-gradient-to-b from-[#FF0048] to-[#FF5255] shadow-[0_3px_0_0_rgba(88,0,29,0.9)] hover:shadow-[0_1px_0_0_rgba(88,0,29,0.9)] hover:translate-y-[2px] transition-all duration-150 text-white py-3 px-6 font-semibold" data-astro-cid-co5agl6a> ${currentLang === "es" ? "Cargar m\xE1s" : "Load more"} </button> </div>
      <!-- No results message for filters -->
      <div id="noResults" class="hidden mt-6 items-center justify-center h-48 md:h-64" data-astro-cid-co5agl6a> <span class="text-white text-lg md:text-xl font-semibold" data-astro-cid-co5agl6a>${noFilterResultsText}</span> </div>`} </div> </div> ${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Recipes/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Recipes/index.astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Recipes/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, $$url as url };
