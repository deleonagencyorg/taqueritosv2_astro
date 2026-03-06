import { _ as __variableDynamicImportRuntimeHelper } from './dynamic-import-helper_uMTE3ehW.mjs';
import { g as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, b as addAttribute, a as renderTemplate } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { a as $$LazyImage } from './MainLayout_CEv0P3ec.mjs';
import { $ as $$GamesCarousel } from './GamesCarousel_DwuG5Ryh.mjs';
/* empty css                                 */

const $$Astro = createAstro("https://taqueritos.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { currentLang, challengeId } = Astro2.props;
  const challengeModules = /* #__PURE__ */ Object.assign({"../../../locales/en/challenges/collector.json": () => import('./collector_CLhNdjvM.mjs'),"../../../locales/en/challenges/creative.json": () => import('./creative_Bj5Jd5-U.mjs'),"../../../locales/en/challenges/extreme-flavor.json": () => import('./extreme-flavor_DhsI2omJ.mjs')});
  const allChallenges = [];
  for (const path in challengeModules) {
    const lang = path.split("/")[4];
    if (lang === currentLang) {
      const mod = await challengeModules[path]();
      allChallenges.push(mod.default);
    }
  }
  const challenge = allChallenges.find((item) => item.id === challengeId || item.slug === challengeId);
  if (!challenge) {
    throw new Error(`Challenge with id or slug '${challengeId}' not found for lang ${currentLang}`);
  }
  const title = challenge.title;
  const subtitle = challenge.subtitle_down || challenge.subtitle || "";
  const addressLabel = currentLang === "es" ? "Direcci\xF3n" : "Address";
  const dateLabel = currentLang === "es" ? "Fecha" : "Date";
  const discoverTitle = currentLang === "es" ? "\xA1Descubre y disfruta nuestros retos y torneos!" : "Discover and enjoy our challenges and tournaments!";
  const discoverText = currentLang === "es" ? "Somos jugadores, so\xF1adores y apasionados que disfrutan competir y superar desaf\xEDos. Aqu\xED encontrar\xE1s un espacio donde la diversi\xF3n y la emoci\xF3n se viven al m\xE1ximo." : "We are players, dreamers and enthusiasts who love to compete and overcome challenges. Here you will find a space where fun and excitement are always at their peak.";
  const discoverButton = currentLang === "es" ? "Descubre m\xE1s retos" : "Discover more challenges";
  const gamesTitle = currentLang === "es" ? "Descubre la lista de juegos" : "Discover the games list";
  typeof challenge.preparation_time === "number" ? challenge.preparation_time : 0;
  challenge.difficulty || "---";
  const startDate = challenge["start-date"];
  const endDate = challenge["end-date"];
  const hasAddress = Boolean(challenge.address);
  const hasDates = Boolean(startDate || endDate);
  function formatDateES(dateStr) {
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre"
    ];
    const date = /* @__PURE__ */ new Date(dateStr + "T00:00:00");
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} de ${month} de ${year}`;
  }
  function formatDateEN(dateStr) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const date = /* @__PURE__ */ new Date(dateStr + "T00:00:00");
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }
  const formattedStartDate = startDate ? currentLang === "es" ? formatDateES(startDate) : formatDateEN(startDate) : "";
  const formattedEndDate = endDate ? currentLang === "es" ? formatDateES(endDate) : formatDateEN(endDate) : "";
  let games = [];
  try {
    const gamesModule = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../../../locales/en/games.json": () => import('./games_Bx-xwGsF.mjs'),"../../../locales/es/games.json": () => import('./games_CwmOTNGg.mjs')})), `../../../locales/${currentLang}/games.json`, 6);
    games = gamesModule.default.games || [];
  } catch (e) {
    games = [];
  }
  return renderTemplate`${maybeRenderHead()}<div style="background: linear-gradient(180deg, #1a0a0a 0%, #0d0404 100%);" class="pb-0 overflow-hidden min-h-screen" data-astro-cid-xj2eagcb> <div class="w-full max-w-6xl mx-auto px-4 pt-12 pb-16" data-astro-cid-xj2eagcb> <!-- Hero: imagen grande --> <section class="pt-8 md:pt-12 pb-6 mt-4" data-astro-cid-xj2eagcb> <div class="w-full overflow-hidden max-h-[480px]" data-astro-cid-xj2eagcb> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": challenge.image, "alt": challenge.title, "class": "w-full h-full max-h-[480px] object-cover", "onerror": "this.onerror=null;this.src='/images/recipes/placeholder.jpg';", "data-astro-cid-xj2eagcb": true })} </div> </section> <!-- Título + descripción + datos --> <section class="pb-10" data-astro-cid-xj2eagcb> <h1 class="font-title md:text-5xl text-4xl font-bold text-white uppercase italic leading-tight mb-6" data-astro-cid-xj2eagcb> ${title} </h1> <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-start" data-astro-cid-xj2eagcb> <!-- Columna izquierda: descripción --> <div class="text-white space-y-4" data-astro-cid-xj2eagcb> ${subtitle && renderTemplate`<p class="text-lg text-white/80" data-astro-cid-xj2eagcb> ${subtitle} </p>`} ${challenge.description && renderTemplate`<p class="text-base md:text-lg text-white/80 leading-relaxed" data-astro-cid-xj2eagcb> ${challenge.description} </p>`} <div class="pt-4 space-y-4" data-astro-cid-xj2eagcb> ${challenge.urls && challenge.urls.length > 0 ? renderTemplate`<div class="flex flex-wrap gap-3" data-astro-cid-xj2eagcb> ${challenge.urls.map((urlItem) => urlItem.url && urlItem.url !== "#" && urlItem.url.trim() !== "" ? renderTemplate`<a${addAttribute(urlItem.url, "href")} class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#ff2d2d] to-[#ff6b6b] text-white font-bold uppercase tracking-wide text-sm hover:from-[#ff4b4e] hover:to-[#ff8080] transition-all duration-200 shadow-[0_8px_20px_rgba(0,0,0,0.6)]" data-astro-cid-xj2eagcb> ${urlItem.title} </a>` : renderTemplate`<span class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#ff2d2d]/50 to-[#ff6b6b]/50 text-white/60 font-bold uppercase tracking-wide text-sm cursor-not-allowed shadow-[0_8px_20px_rgba(0,0,0,0.6)]" data-astro-cid-xj2eagcb> ${urlItem.title} </span>`)} </div>` : challenge.url ? renderTemplate`<a${addAttribute(challenge.url, "href")} class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#ff2d2d] to-[#ff6b6b] text-white font-bold uppercase tracking-wide text-sm hover:from-[#ff4b4e] hover:to-[#ff8080] transition-all duration-200 shadow-[0_8px_20px_rgba(0,0,0,0.6)]" data-astro-cid-xj2eagcb> ${currentLang === "es" ? "Ir al reto" : "Go to challenge"} </a>` : null} ${challenge.terminosycondiciones && renderTemplate`<div data-astro-cid-xj2eagcb> <a${addAttribute(challenge.terminosycondiciones, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm underline underline-offset-4 transition-colors" data-astro-cid-xj2eagcb> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-xj2eagcb> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-xj2eagcb></path> </svg> ${currentLang === "es" ? "T\xE9rminos y condiciones" : "Terms and conditions"} </a> </div>`} </div> </div> <!-- Columna derecha: dirección, fechas, duración y dificultad --> ${(hasAddress || hasDates) && renderTemplate`<div class="space-y-4 w-full max-w-xs mx-auto md:mx-0" data-astro-cid-xj2eagcb> ${hasAddress && renderTemplate`<div class="w-full flex flex-col items-center gap-3 border-2 border-[#ff2d2d] bg-[#1a0808] px-4 py-5 text-center" data-astro-cid-xj2eagcb> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#ff2d2d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-xj2eagcb> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" data-astro-cid-xj2eagcb></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s7-4.735 7-11a7 7 0 10-14 0c0 6.265 7 11 7 11z" data-astro-cid-xj2eagcb></path> </svg> <span class="text-xs uppercase tracking-wider text-white font-bold" data-astro-cid-xj2eagcb>${addressLabel}</span> <p class="text-sm text-white/90" data-astro-cid-xj2eagcb> ${challenge.address} </p> </div>`} ${hasDates && renderTemplate`<div class="w-full flex flex-col items-center gap-3 border-2 border-[#ff2d2d] bg-[#1a0808] px-4 py-5 text-center" data-astro-cid-xj2eagcb> <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[#ff2d2d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-xj2eagcb> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-xj2eagcb></path> </svg> <span class="text-xs uppercase tracking-wider text-white font-bold" data-astro-cid-xj2eagcb>${dateLabel}</span> <div class="text-sm text-white/90" data-astro-cid-xj2eagcb> ${formattedStartDate && formattedEndDate ? renderTemplate`<div class="space-y-1" data-astro-cid-xj2eagcb> <p data-astro-cid-xj2eagcb>${formattedStartDate}</p> <p class="text-white/60 text-xs" data-astro-cid-xj2eagcb>${currentLang === "es" ? "al" : "to"}</p> <p data-astro-cid-xj2eagcb>${formattedEndDate}</p> </div>` : formattedStartDate || formattedEndDate} </div> </div>`} </div>`} </div> </section> <!-- CTA de retos --> <section class="mb-10" data-astro-cid-xj2eagcb> <div class="w-full border-2 border-[#ff2d2d] bg-[#1a0808] px-6 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center gap-6 text-white" data-astro-cid-xj2eagcb> <div class="flex-1" data-astro-cid-xj2eagcb> <h2 class="font-title text-2xl md:text-3xl font-bold uppercase mb-2" data-astro-cid-xj2eagcb> ${discoverTitle} </h2> <p class="text-sm md:text-base text-white/90" data-astro-cid-xj2eagcb> ${discoverText} </p> </div> <a${addAttribute(currentLang === "es" ? "/es/retos-torneos" : "/en/challenges-tournaments", "href")} class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#ff2d2d] to-[#ff6b6b] text-white font-bold uppercase tracking-wide text-sm hover:from-[#ff4b4e] hover:to-[#ff8080] transition-all duration-200" data-astro-cid-xj2eagcb> ${discoverButton} </a> </div> </section> <!-- Carrusel de juegos --> ${games.length > 0 && renderTemplate`<section class="w-full py-8" data-astro-cid-xj2eagcb> <div class="container mx-auto px-4" id="games" data-astro-cid-xj2eagcb> ${renderComponent($$result, "GamesCarousel", $$GamesCarousel, { "items": games, "data-astro-cid-xj2eagcb": true }, { "title": async ($$result2) => renderTemplate`<div class="title" data-astro-cid-xj2eagcb> <p data-astro-cid-xj2eagcb>${gamesTitle}</p> </div>` })} </div> </section>`} </div> </div> `;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Challenges/Detail/index.astro", void 0);

export { $$Index as $ };
