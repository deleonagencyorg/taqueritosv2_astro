import { _ as __variableDynamicImportRuntimeHelper } from './dynamic-import-helper_uMTE3ehW.mjs';
import { c as createComponent, g as createAstro, m as maybeRenderHead, k as renderScript, r as renderComponent, a as renderTemplate, b as addAttribute } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { g as getLocale, t } from './i18n_BuYowHj0.mjs';
import { $ as $$ChallengesCarousel } from './ChallengesCarousel_Dt_MAur_.mjs';
import { $ as $$GamesCarousel } from './GamesCarousel_DwuG5Ryh.mjs';
import { a as $$LazyImage } from './MainLayout_CEv0P3ec.mjs';
import { $ as $$Index$1 } from './index_XvAtANUT.mjs';
/* empty css                              */

const $$Astro = createAstro("https://taqueritos.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentLang = getLocale();
  const challengeModules = /* #__PURE__ */ Object.assign({"../../locales/en/challenges/collector.json": () => import('./collector_CLhNdjvM.mjs'),"../../locales/en/challenges/creative.json": () => import('./creative_Bj5Jd5-U.mjs'),"../../locales/en/challenges/extreme-flavor.json": () => import('./extreme-flavor_DhsI2omJ.mjs')

});
  const summaryItems = [];
  for (const path in challengeModules) {
    const lang = path.split("/")[3];
    if (lang === currentLang) {
      const mod = await challengeModules[path]();
      summaryItems.push(mod.default);
    }
  }
  function parseDate(value) {
    if (!value) return 0;
    const s = String(value).trim();
    if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(s)) {
      const [d, m, y] = s.split("/").map(Number);
      return new Date(y, (m || 1) - 1, d || 1).getTime();
    }
    const t2 = Date.parse(s);
    return isNaN(t2) ? 0 : t2;
  }
  const todayISO = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const todayTs = Date.parse(todayISO);
  function getStart(item) {
    const startStr = item["start-date"] || item.fecha_inicio;
    return parseDate(startStr);
  }
  function getEnd(item) {
    const endStr = item["end-date"] || item.fecha_fin;
    return parseDate(endStr);
  }
  const orderedChallenges = summaryItems.map((it) => ({
    ...it,
    _start: getStart(it),
    _end: getEnd(it)
  })).sort((a, b) => (b._start || 0) - (a._start || 0));
  const activeChallenges = orderedChallenges.filter((it) => {
    const hasStart = Boolean(it._start);
    const hasEnd = Boolean(it._end);
    if (hasStart && hasEnd) return it._start <= todayTs && todayTs <= it._end;
    if (hasStart && !hasEnd) return it._start <= todayTs;
    if (!hasStart && hasEnd) return todayTs <= it._end;
    return true;
  });
  const featuredChallenge = (activeChallenges.length > 0 ? activeChallenges[0] : orderedChallenges[0]) || null;
  const sectionTitle = currentLang === "es" ? "Participa en nuestros retos" : "Join our challenges";
  const introTitle = currentLang === "es" ? "\xA1Descubre y disfruta nuestros retos y torneos!" : "Discover and enjoy our challenges and tournaments!";
  const introDescription = currentLang === "es" ? "Somos jugadores, so\xF1adores y apasionados que disfrutan competir y superar desaf\xEDos. Aqu\xED encontrar\xE1s un espacio donde la diversi\xF3n y la emoci\xF3n se viven al m\xE1ximo." : "We are players, dreamers and enthusiasts who love to compete and overcome challenges. Here you will find a space where fun and excitement are always at their peak.";
  const activityCards = currentLang === "es" ? [
    {
      id: "online",
      title: "Actividades online",
      description: "Compite y divi\xE9rtete desde cualquier lugar, conectado al instante con la comunidad Taqueritos."
    },
    {
      id: "offline",
      title: "Actividades offline",
      description: "Vive la experiencia en persona, con din\xE1micas que te pondr\xE1n a prueba cara a cara."
    },
    {
      id: "games",
      title: "Nuestros juegos",
      description: "Explora lo mejor de ambos mundos con din\xE1micas \xFAnicas, creativas y llenas de sabor Taqueritos."
    }
  ] : [
    {
      id: "online",
      title: "Online activities",
      description: "Compete and have fun from anywhere, instantly connected with the Taqueritos community."
    },
    {
      id: "offline",
      title: "Offline activities",
      description: "Live the experience in person with dynamics that will challenge you face to face."
    },
    {
      id: "games",
      title: "Our games",
      description: "Explore the best of both worlds with unique, creative and crunchy Taqueritos experiences."
    }
  ];
  const featuredChallengeLink = featuredChallenge ? featuredChallenge.url || `/${currentLang}/${currentLang === "es" ? "retos-torneos" : "challenges-tournaments"}/${featuredChallenge.id}` : "#";
  let games = [];
  try {
    const gamesModule = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../../locales/en/games.json": () => import('./games_Bx-xwGsF.mjs'),"../../locales/es/games.json": () => import('./games_CwmOTNGg.mjs')})), `../../locales/${currentLang}/games.json`, 5);
    games = gamesModule.default.games || [];
  } catch (e) {
    games = [];
  }
  const gamesTitle = currentLang === "es" ? "Descubre la lista de juegos" : "Discover the games list";
  const commonAssets = currentLang === "es" ? t("assets.slider", { namespace: "common", locale: currentLang }) || [] : [];
  const promosSlides = Array.isArray(commonAssets) ? commonAssets.filter((asset) => asset && typeof asset === "object" && asset.desktop && asset.mobile && asset.type === "image").map((asset) => ({
    desktop: asset.desktop,
    mobile: asset.mobile,
    alt: asset.alt || "Promo Taqueritos",
    title: asset.title || "",
    subtitle: asset.description || "",
    link: asset.url || asset.link || "",
    type: "image"
  })) : [];
  return renderTemplate`${maybeRenderHead()}<div class="-mt-px -mb-px bg-dark-spotlight" data-astro-cid-rj6cv3pl> <!-- Carrusel de promos activas (solo español) - Full width --> ${currentLang === "es" && promosSlides.length > 0 && renderTemplate`<section class="w-full" data-astro-cid-rj6cv3pl> ${renderComponent($$result, "VideoCarousel", $$Index$1, { "slides": promosSlides, "height": "70vh", "mobileHeight": "50vh", "showOverlay": false, "data-astro-cid-rj6cv3pl": true })} </section>`} <div class="container mx-auto px-4 pt-24 pb-24 mt-0" data-astro-cid-rj6cv3pl> <!-- Banner introductorio --> <section class="mb-14 pt-24" data-astro-cid-rj6cv3pl> <div class="mx-auto max-w-5xl  border border-white/20 bg-cover bg-center bg-no-repeat px-6 md:px-12 py-10 md:py-14 text-center text-white relative overflow-hidden" style="background-image: url('https://snack.yummiespromociones.com/taqueritos/bggames.png'); background-color: rgba(0,0,0,0.75);" data-astro-cid-rj6cv3pl> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" data-astro-cid-rj6cv3pl></div> <div class="relative z-10 max-w-3xl mx-auto" data-astro-cid-rj6cv3pl> <h2 class="font-title text-2xl md:text-4xl font-bold uppercase mb-4" data-astro-cid-rj6cv3pl> ${introTitle} </h2> <p class="text-sm md:text-base text-white/85 mb-8" data-astro-cid-rj6cv3pl> ${introDescription} </p> <a href="https://www.snacksyummies.com/es/yummiesone" class="inline-flex items-center justify-center px-8 py-3 rounded-md bg-red text-white font-semibold uppercase tracking-wide text-sm shadow-[0_10px_25px_rgba(0,0,0,0.7)] hover:bg-[#ff4b4e] transition-colors duration-200" data-astro-cid-rj6cv3pl> ${currentLang === "es" ? "Reg\xEDstrate ahora" : "Register now"} </a> </div> </div> </section> <!-- Cards de tipo de actividades (3 columnas / 1 columna en mobile) --> <section class="mb-12 px-4 py-10 md:p-24" data-astro-cid-rj6cv3pl> <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-astro-cid-rj6cv3pl> ${activityCards.map((card) => renderTemplate`<div class="relative group border border-red rounded-none bg-black/20 px-6 py-6 md:py-8 text-white transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] flex flex-row md:flex-col items-center md:items-stretch gap-4 w-[95%] md:w-full mx-auto" data-astro-cid-rj6cv3pl> <!-- Icono simple por tipo --> <div class="flex justify-center text-white mb-0 md:mb-5 flex-shrink-0 w-1/3 md:w-full" data-astro-cid-rj6cv3pl> ${card.id === "online" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" data-astro-cid-rj6cv3pl> <path d="M30 46.25H30.0295" stroke="white" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rj6cv3pl></path> <path d="M20.625 38.75C25.625 33.75 34.375 33.75 39.375 38.75" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rj6cv3pl></path> <path d="M46.25 31.25C36.831 22.9167 23.75 22.9167 13.75 31.25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rj6cv3pl></path> <path d="M5 23.75C20.7895 10.4167 39.2105 10.4167 55 23.7497" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rj6cv3pl></path> </svg>`} ${card.id === "offline" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" data-astro-cid-rj6cv3pl> <path d="M30 30V50" stroke="white" stroke-width="4" stroke-linecap="round" data-astro-cid-rj6cv3pl></path> <path d="M28.75 17.6575C29.1495 17.5547 29.5685 17.5 30 17.5C32.7615 17.5 35 19.7386 35 22.5C35 22.9316 34.9453 23.3505 34.8425 23.75" stroke="white" stroke-width="4" stroke-linecap="round" data-astro-cid-rj6cv3pl></path> <path d="M5 5L55 55" stroke="white" stroke-width="4" stroke-linecap="round" data-astro-cid-rj6cv3pl></path> <path d="M42.397 15C44.0465 17.174 45 19.745 45 22.5C45 25.255 44.0465 27.826 42.397 30M17.6029 30C15.9536 27.826 15 25.255 15 22.5C15 20.7397 15.3893 19.0545 16.1007 17.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rj6cv3pl></path> <path d="M50.7898 10C53.449 13.5752 55 17.8746 55 22.5C55 27.1255 53.449 31.4248 50.7898 35M9.21022 10C6.5509 13.5752 5 17.8746 5 22.5C5 27.1255 6.5509 31.4248 9.21022 35" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rj6cv3pl></path> </svg>`} ${card.id === "games" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" data-astro-cid-rj6cv3pl> <path d="M23.3121 30C22.8945 30.2022 22.4519 30.4188 21.9799 30.6498L18.1711 32.5132C14.3904 34.363 12.5 35.288 12.5 36.4375C12.5 37.5867 14.3904 38.5117 18.1711 40.3615L21.9799 42.2253C25.7605 44.075 27.651 45 30 45C32.349 45 34.2395 44.075 38.0203 42.2253L41.829 40.3615C45.6097 38.5117 47.5 37.5867 47.5 36.4375C47.5 35.288 45.6097 34.363 41.829 32.5132L38.0203 30.6498C37.548 30.4188 37.1055 30.2022 36.6878 30" stroke="white" stroke-width="4" stroke-linecap="round" data-astro-cid-rj6cv3pl></path> <path d="M47.5 36.25V45.6668C47.5 46.9195 45.6097 47.9278 41.829 49.944L38.0203 51.9755C34.2395 53.9917 32.349 55 30 55C27.651 55 25.7605 53.9917 21.9799 51.9755L18.1711 49.944C14.3904 47.9278 12.5 46.9195 12.5 45.6668V36.25" stroke="white" stroke-width="4" stroke-linecap="round" data-astro-cid-rj6cv3pl></path> <path d="M38.75 13.75C38.75 18.5825 34.8325 22.5 30 22.5C25.1675 22.5 21.25 18.5825 21.25 13.75C21.25 8.9175 25.1675 5 30 5C34.8325 5 38.75 8.9175 38.75 13.75Z" stroke="white" stroke-width="4" data-astro-cid-rj6cv3pl></path> <path d="M30 22.5V36.25" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-rj6cv3pl></path> </svg>`} </div> <div class="flex-1 w-2/3 md:w-full" data-astro-cid-rj6cv3pl> <h3 class="font-title text-base md:text-xl font-bold uppercase mb-1 md:mb-2 text-left md:text-center" data-astro-cid-rj6cv3pl> ${card.title} </h3> <p class="text-xs md:text-sm text-white/80 text-left md:text-center leading-relaxed" data-astro-cid-rj6cv3pl> ${card.description} </p> </div> </div>`)} </div> </section> ${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Challenges/index.astro?astro&type=script&index=0&lang.ts")}   ${featuredChallenge && renderTemplate`<section class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16" data-astro-cid-rj6cv3pl> <!-- Texto del evento --> <div class="space-y-4 text-white" data-astro-cid-rj6cv3pl> <h2 class="font-title text-3xl md:text-4xl font-bold uppercase" data-astro-cid-rj6cv3pl> ${featuredChallenge.title} </h2> ${featuredChallenge.description && renderTemplate`<p class="text-base md:text-lg leading-relaxed text-white/90" data-astro-cid-rj6cv3pl> ${featuredChallenge.description} </p>`} ${featuredChallengeLink && featuredChallengeLink !== "#" && renderTemplate`<a${addAttribute(featuredChallengeLink, "href")} class="inline-flex items-center mt-4 px-6 py-3 rounded-md bg-red text-white font-semibold uppercase tracking-wide text-sm shadow-[0_8px_20px_rgba(0,0,0,0.6)] hover:bg-[#ff4b4e] transition-colors duration-200" data-astro-cid-rj6cv3pl> ${currentLang === "es" ? "Ver detalles del reto" : "View challenge details"} </a>`} </div> <!-- Imagen del evento (CTA clickable en todos los dispositivos) --> <div class="w-full flex justify-center md:justify-end" data-astro-cid-rj6cv3pl> <a${addAttribute(featuredChallengeLink, "href")} class="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.7)] block cursor-pointer" data-astro-cid-rj6cv3pl> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": featuredChallenge.image, "alt": featuredChallenge.title, "class": "w-full h-full object-cover", "loading": "lazy", "data-astro-cid-rj6cv3pl": true })} </a> </div> </section>`} <section class="mt-10 pt-6 pb-4 " data-astro-cid-rj6cv3pl> <h2 class="font-title text-2xl md:text-3xl font-bold text-white uppercase mb-6" data-astro-cid-rj6cv3pl> ${sectionTitle} </h2> ${renderComponent($$result, "ChallengesCarousel", $$ChallengesCarousel, { "items": orderedChallenges, "data-astro-cid-rj6cv3pl": true })} </section> ${games.length > 0 && renderTemplate`<section class="w-full py-8 bg-brown" id="games" data-astro-cid-rj6cv3pl> <div class="container mx-auto px-4" data-astro-cid-rj6cv3pl> ${renderComponent($$result, "GamesCarousel", $$GamesCarousel, { "items": games, "data-astro-cid-rj6cv3pl": true }, { "title": async ($$result2) => renderTemplate`<div class="title" data-astro-cid-rj6cv3pl> <p data-astro-cid-rj6cv3pl>${gamesTitle}</p> </div>` })} </div> </section>`} </div> </div>`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Challenges/index.astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Challenges/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, $$url as url };
