/* empty css                                      */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_CEv0P3ec.mjs';
import { s as setLocale, g as getLocale } from '../chunks/i18n_BuYowHj0.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const currentLang = getLocale?.() || "es";
  setLocale(currentLang);
  const title = currentLang === "es" ? "P\xE1gina no encontrada" : "Page not found";
  const subtitle = currentLang === "es" ? "Ups... parece que este nivel no existe o fue removido del juego." : "Oops... looks like this level does not exist or was removed from the game.";
  const ctaText = currentLang === "es" ? "Regresar al inicio" : "Back to home";
  const codeLabel = currentLang === "es" ? "Error" : "Error";
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": subtitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex items-center justify-center bg-[#0d0404] text-white"> <div class="max-w-3xl w-full px-6 py-16 text-center"> <div class="inline-flex items-center justify-center mb-6 px-4 py-1 rounded-full border border-red/60 bg-red/10 text-xs uppercase tracking-[0.25em] text-red-300"> ${codeLabel} 404
</div> <h1 class="font-title text-6xl md:text-7xl font-black uppercase tracking-[0.35em] text-white mb-4">
404
</h1> <p class="text-base md:text-lg text-white/80 max-w-xl mx-auto mb-10"> ${subtitle} </p> <a${addAttribute(`/${currentLang}/`, "href")} class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#ff2d2d] to-[#ff6b6b] text-white font-bold uppercase tracking-wide text-sm hover:from-[#ff4b4e] hover:to-[#ff8080] transition-all duration-200 shadow-[0_12px_32px_rgba(0,0,0,0.8)]"> ${ctaText} </a> <div class="mt-12 flex justify-center opacity-60"> <div class="relative w-40 h-40 md:w-56 md:h-56 border-2 border-red/40 bg-black/40 flex items-center justify-center overflow-hidden"> <span class="font-title text-xs md:text-sm uppercase tracking-[0.25em] text-white/60"> ${currentLang === "es" ? "Nivel no disponible" : "Level not available"} </span> <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent blur-md"></div> </div> </div> </div> </main> ` })}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/404.astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
