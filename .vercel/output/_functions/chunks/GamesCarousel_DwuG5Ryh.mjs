import { _ as __variableDynamicImportRuntimeHelper } from './dynamic-import-helper_uMTE3ehW.mjs';
import { g as createAstro, c as createComponent, k as renderScript, m as maybeRenderHead, a as renderTemplate, n as renderSlot, b as addAttribute, r as renderComponent } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { a as $$LazyImage } from './MainLayout_CEv0P3ec.mjs';
import { g as getLocale } from './i18n_BuYowHj0.mjs';
/* empty css                                 */

const $$Astro = createAstro("https://taqueritos.com");
const $$GamesCarousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GamesCarousel;
  const currentLang = getLocale();
  const { title, items } = Astro2.props;
  let gameItems = Array.isArray(items) ? items : [];
  if (!gameItems.length) {
    try {
      const gamesModule = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../../locales/en/games.json": () => import('./games_Bx-xwGsF.mjs'),"../../locales/es/games.json": () => import('./games_CwmOTNGg.mjs')})), `../../locales/${currentLang}/games.json`, 5);
      gameItems = gamesModule.default.games || [];
    } catch (e) {
      gameItems = [];
    }
  }
  return renderTemplate`${gameItems.length === 0 ? renderTemplate`${maybeRenderHead()}<div class="w-full py-18 flex items-center justify-center" data-astro-cid-mz4gw7zg><p class="text-white text-center text-lg md:text-xl font-semibold" data-astro-cid-mz4gw7zg>${currentLang === "es" ? "No hay juegos disponibles" : "No games available"}</p></div>` : renderTemplate`<div class="games-carousel-container py-12" data-games-carousel data-astro-cid-mz4gw7zg><div class="flex items-center justify-between mb-6" data-astro-cid-mz4gw7zg>${renderSlot($$result, $$slots["title"])}${gameItems.length > 1 && renderTemplate`<div class="flex gap-3" data-astro-cid-mz4gw7zg><button type="button" class="games-carousel-btn-prev w-14 h-14 flex items-center justify-center bg-[rgba(255,45,48,0.16)] border-2 border-[#ff2c2f] backdrop-blur-sm hover:bg-[#150404] transition-all duration-300 rounded-[12px]" aria-label="Anterior" data-astro-cid-mz4gw7zg><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-mz4gw7zg><path d="M3.99976 11.9998H19.9997" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-mz4gw7zg></path><path d="M8.99973 17C8.99973 17 3.99978 13.3176 3.99976 12C3.99975 10.6824 8.99976 7 8.99976 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-mz4gw7zg></path></svg></button><button type="button" class="games-carousel-btn-next w-14 h-14 flex items-center justify-center bg-[rgba(255,45,48,0.16)] border-2 border-[#ff2c2f] backdrop-blur-sm hover:bg-[#150404] transition-all duration-300 rounded-[12px]" aria-label="Siguiente" data-astro-cid-mz4gw7zg><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-mz4gw7zg><path d="M20.0002 11.9998H4.00026" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-mz4gw7zg></path><path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0003 10.6824 15.2002 7 15.2002 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-mz4gw7zg></path></svg></button></div>`}</div><!-- Carousel con overflow hidden y translateX --><div class="games-carousel-viewport overflow-x-hidden overflow-y-visible py-2" data-astro-cid-mz4gw7zg><div class="games-carousel-track flex transition-transform duration-300 ease-out" data-games-track data-astro-cid-mz4gw7zg>${gameItems.map((game) => renderTemplate`<div class="game-slide flex-shrink-0 px-2" data-astro-cid-mz4gw7zg><a${addAttribute(game.enlace, "href")} target="_blank" rel="noopener noreferrer" class="game-card flex flex-col w-full h-full bg-[#1a0808] border-2 border-[#ff2d2d] transition-all duration-300 rounded-sm" data-astro-cid-mz4gw7zg><div class="game-card-image w-full flex-shrink-0 overflow-hidden bg-black/50" data-astro-cid-mz4gw7zg>${renderComponent($$result, "LazyImage", $$LazyImage, { "src": game.imagen, "alt": game.titulo, "class": "w-full h-full object-cover object-center", "loading": "lazy", "data-astro-cid-mz4gw7zg": true })}</div><div class="game-card-content flex flex-col flex-grow p-4 md:p-5" data-astro-cid-mz4gw7zg><h3 class="font-title text-sm md:text-base font-bold text-white uppercase mb-2 leading-tight line-clamp-2" data-astro-cid-mz4gw7zg>${game.titulo}</h3><p class="text-xs md:text-sm text-white/80 leading-relaxed line-clamp-3" data-astro-cid-mz4gw7zg>${game.descripcion}</p></div></a></div>`)}</div></div></div>`}${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/games/GamesCarousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/games/GamesCarousel.astro", void 0);

export { $$GamesCarousel as $ };
