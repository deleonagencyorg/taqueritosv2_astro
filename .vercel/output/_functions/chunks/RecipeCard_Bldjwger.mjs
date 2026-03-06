import { g as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, h as renderTransition, a as renderTemplate } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { a as $$LazyImage } from './MainLayout_CEv0P3ec.mjs';
import { g as getLocale } from './i18n_BuYowHj0.mjs';
/* empty css                              */
/* empty css                            */

const $$Astro = createAstro("https://taqueritos.com");
const $$RecipeCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RecipeCard;
  const {
    image,
    title,
    time = "---",
    id,
    textColor = "text-blue-900",
    iconColor = "text-blue-900",
    hoverImage = image,
    difficulty = "---",
    servings = 0,
    rating = 0
  } = Astro2.props;
  const currentLocale = getLocale();
  const recipeLink = `/${currentLocale}/${currentLocale === "es" ? "recetas" : "recipes"}/${id}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(recipeLink, "href")} class="recipe-card-link block h-full group overflow-hidden rounded-2xl border border-[#FF6A2A] bg-[#1A0505] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,106,42,0.9)] hover:border-[#FF2C2F]" data-astro-cid-2oyfosj6${addAttribute(renderTransition($$result, "auiw5euj", "fade", ""), "data-astro-transition-scope")}> <!-- Imagen superior --> <div class="recipe-card-image relative w-full overflow-hidden" data-astro-cid-2oyfosj6> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": image, "alt": title, "class": "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300", "data-astro-cid-2oyfosj6": true, "data-astro-transition-scope": renderTransition($$result, "efgygxyl", "", `recipe-image-${id}`) })} <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" data-astro-cid-2oyfosj6></div> </div> <!-- Contenido inferior --> <div class="recipe-card-content p-4 md:p-5 flex flex-col" data-astro-cid-2oyfosj6> <h3 class="font-title text-base md:text-lg font-bold text-white leading-snug line-clamp-2" data-astro-cid-2oyfosj6> ${title} </h3> <div class="flex items-center justify-between text-sm text-white/80 mt-auto pt-3" data-astro-cid-2oyfosj6> <div class="flex items-center gap-2" data-astro-cid-2oyfosj6> <svg class="h-4 w-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-2oyfosj6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-2oyfosj6></path> </svg> <span data-astro-cid-2oyfosj6>${time}</span> </div> ${difficulty !== "---" && renderTemplate`<span class="px-2 py-0.5 rounded-full border border-white/20 text-[11px] uppercase tracking-wide text-white/70" data-astro-cid-2oyfosj6> ${difficulty} </span>`} </div> </div> </a> `;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/recipes/RecipeCard.astro", "self");

export { $$RecipeCard as $ };
