import { g as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate, k as renderScript } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { a as $$LazyImage } from './MainLayout_CEv0P3ec.mjs';
import { g as getLocale } from './i18n_BuYowHj0.mjs';
/* empty css                              */

const $$Astro$1 = createAstro("https://taqueritos.com");
const $$ChallengeCardCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ChallengeCardCarousel;
  const {
    image,
    title,
    subtitle,
    subtitle_down,
    time = "---",
    id,
    fecha_inicio = "",
    fecha_fin = "",
    textColor = "text-blue-900",
    iconColor = "text-blue-900",
    hoverImage = image,
    difficulty = "---",
    servings = 0,
    rating = 0,
    isMainCard = false,
    url,
    openInNewTab = false
  } = Astro2.props;
  const currentLocale = getLocale();
  const challengeLink = url || `/${currentLocale}/${currentLocale === "es" ? "retos-torneos" : "challenges-tournaments"}/${id}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(challengeLink, "href")} class="recipe-card block group relative transition-all duration-500 ease-in-out"${addAttribute(openInNewTab ? "_blank" : void 0, "target")}${addAttribute(openInNewTab ? "noopener noreferrer" : void 0, "rel")} data-astro-cid-lw6zc5e2> <!-- Container principal --> <div class="card-container relative overflow-hidden rounded-[2px] shadow-[0_0_30px_rgba(239,68,68,0.5)]" style="border: 2px solid; border-image-source: linear-gradient(237.56deg, #FF2D2D 1.39%, #FF9E9B 47.74%, #FF2D2D 100%); border-image-slice: 1;" data-astro-cid-lw6zc5e2> <!-- Imagen de fondo --> <div class="absolute inset-0" data-astro-cid-lw6zc5e2> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": image, "alt": title, "class": "w-full h-full object-cover", "data-astro-cid-lw6zc5e2": true })} <!-- Overlay oscuro con gradiente --> <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" data-astro-cid-lw6zc5e2></div> </div> <!-- Contenido de texto --> <div class="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8" data-astro-cid-lw6zc5e2> <!-- Título principal --> <h3 class="font-title font-black text-white uppercase text-xl sm:text-2xl md:text-[28px] lg:text-[30px] leading-tight tracking-wider" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.8);" data-astro-cid-lw6zc5e2> ${title} </h3> <!-- Fechas: inicio / fin --> <div class="text-white text-sm sm:text-base md:text-[18px] font-medium mt-2" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.8);" data-astro-cid-lw6zc5e2> <span data-astro-cid-lw6zc5e2>Inicio: ${fecha_inicio || time}</span> <br data-astro-cid-lw6zc5e2> <span data-astro-cid-lw6zc5e2>Fin: ${fecha_fin || "---"}</span> </div> </div> <!-- Efecto de brillo rojo en hover --> <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style="box-shadow: inset 0 0 50px rgba(239, 68, 68, 0.3);" data-astro-cid-lw6zc5e2></div> </div> </a> `;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/challenges/ChallengeCardCarousel.astro", void 0);

const $$Astro = createAstro("https://taqueritos.com");
const $$ChallengesCarousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ChallengesCarousel;
  const currentLang = getLocale();
  const {
    textButton = currentLang === "es" ? "Ver Todas" : "View All",
    items
  } = Astro2.props;
  let challengeItems = Array.isArray(items) ? items : [];
  if (!challengeItems.length) {
    const challengeModules = /* #__PURE__ */ Object.assign({"../../locales/en/challenges/collector.json": () => import('./collector_CLhNdjvM.mjs'),"../../locales/en/challenges/creative.json": () => import('./creative_Bj5Jd5-U.mjs'),"../../locales/en/challenges/extreme-flavor.json": () => import('./extreme-flavor_DhsI2omJ.mjs')});
    for (const path in challengeModules) {
      const lang = path.split("/")[3];
      if (lang === currentLang) {
        const mod = await challengeModules[path]();
        challengeItems.push(mod.default);
      }
    }
  }
  function parseDateSafe(s) {
    if (!s) return NaN;
    const t = Date.parse(s);
    return isNaN(t) ? NaN : t;
  }
  const now = Date.now();
  challengeItems = challengeItems.filter((c) => {
    const start = parseDateSafe(c["start-date"]);
    const end = parseDateSafe(c["end-date"]);
    const afterStart = isNaN(start) ? true : now >= start;
    const beforeEnd = isNaN(end) ? true : now <= end;
    return afterStart && beforeEnd;
  });
  challengeItems.sort((a, b) => {
    const aStart = parseDateSafe(a["start-date"]);
    const bStart = parseDateSafe(b["start-date"]);
    const aVal = isNaN(aStart) ? 0 : aStart;
    const bVal = isNaN(bStart) ? 0 : bStart;
    return bVal - aVal;
  });
  const rutaTruckCard = {
    id: "ruta-truck",
    title: currentLang === "es" ? "La Ruta" : "The Route",
    image: "https://snack.yummiespromociones.com/SnacksyummiesAssets/Bannergaming.webp?w=1024&q=80",
    hover_image: "https://snack.yummiespromociones.com/SnacksyummiesAssets/Bannergaming.webp?w=1024&q=80",
    preparation_time: 0,
    "start-date": "2026-01-01",
    "end-date": "2026-12-31",
    url: "https://www.challengermode.com/s/taqueritos/pages/laruta",
    category: "other",
    category_en: "other",
    openInNewTab: true
  };
  challengeItems.unshift(rutaTruckCard);
  function getCategoryKey(challenge) {
    const raw = challenge?.category_en || challenge?.category || challenge?.category?.name || (Array.isArray(challenge?.categories_en) ? challenge.categories_en[0] : void 0) || (Array.isArray(challenge?.categories) ? challenge.categories[0] : void 0) || "";
    const key = String(raw || "").trim().toLowerCase();
    if (["breakfast", "desayuno"].includes(key)) return "breakfast";
    if (["brunch"].includes(key)) return "brunch";
    if (["lunch", "almuerzo"].includes(key)) return "lunch";
    return key || "other";
  }
  return renderTemplate`${challengeItems.length === 0 ? renderTemplate`${maybeRenderHead()}<div class="w-full py-10 flex items-center justify-center" data-astro-cid-g4kqlh43><p class="text-white text-center text-lg md:text-xl font-semibold" data-astro-cid-g4kqlh43>${currentLang === "es" ? "No hay retos disponibles" : "No challenges available"}</p></div>` : renderTemplate`<div class="w-full challenges-carousel-wrapper" data-challenges-carousel data-astro-cid-g4kqlh43><div class="w-full px-4" data-astro-cid-g4kqlh43><!-- Carousel MOBILE --><div class="challenges-carousel-mobile relative md:hidden" data-astro-cid-g4kqlh43>${challengeItems.length > 1 && renderTemplate`<div class="carousel-navigation" data-astro-cid-g4kqlh43><button class="carousel-btn-prev" type="button" aria-label="Anterior" id="prevBtnMobile" data-astro-cid-g4kqlh43><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-g4kqlh43><path d="M3.99976 11.9998H19.9997" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-g4kqlh43></path><path d="M8.99973 17C8.99973 17 3.99978 13.3176 3.99976 12C3.99975 10.6824 8.99976 7 8.99976 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-g4kqlh43></path></svg></button><button class="carousel-btn-next" type="button" aria-label="Siguiente" id="nextBtnMobile" data-astro-cid-g4kqlh43><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-g4kqlh43><path d="M20.0002 11.9998H4.00026" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-g4kqlh43></path><path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0003 10.6824 15.0002 7 15.0002 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-g4kqlh43></path></svg></button></div>`}<div class="challenges-carousel-container overflow-hidden w-full" data-astro-cid-g4kqlh43><div class="challenges-carousel-track flex items-start w-full gap-4 transition-transform duration-300" id="challengesTrackMobile" data-astro-cid-g4kqlh43>${challengeItems.map((challenge, index) => renderTemplate`<div class="challenge-slide-mobile flex-shrink-0 w-full mt-[48px]"${addAttribute(getCategoryKey(challenge), "data-category")} data-astro-cid-g4kqlh43>${renderComponent($$result, "ChallengeCardCarousel", $$ChallengeCardCarousel, { "image": challenge.image, "hoverImage": challenge.hover_image || challenge.image, "title": challenge.title, "fecha_inicio": challenge["start-date"], "fecha_fin": challenge["end-date"], "time": `${challenge.preparation_time}MIN`, "id": challenge.id, "difficulty": challenge.difficulty || "---", "servings": challenge.servings || 0, "rating": challenge.rating || 0, "isMainCard": false, "url": challenge.url, "openInNewTab": challenge.openInNewTab, "data-astro-cid-g4kqlh43": true })}</div>`)}</div></div></div><!-- Carousel DESKTOP --><div class="challenges-carousel-desktop relative hidden md:block" data-astro-cid-g4kqlh43><div class="carousel-container-desktop overflow-hidden" data-astro-cid-g4kqlh43><div class="carousel-track-desktop flex gap-6" id="challengesTrackDesktop" data-astro-cid-g4kqlh43>${challengeItems.map((challenge, index) => renderTemplate`<div class="carousel-slide-desktop flex-shrink-0"${addAttribute(index, "data-index")}${addAttribute(getCategoryKey(challenge), "data-category")} data-astro-cid-g4kqlh43>${renderComponent($$result, "ChallengeCardCarousel", $$ChallengeCardCarousel, { "image": challenge.image, "hoverImage": challenge.hover_image || challenge.image, "title": challenge.title, "fecha_inicio": challenge["start-date"], "fecha_fin": challenge["end-date"], "time": `${challenge.preparation_time}MIN`, "id": challenge.id, "difficulty": challenge.difficulty || "---", "servings": challenge.servings || 0, "rating": challenge.rating || 0, "isMainCard": false, "url": challenge.url, "openInNewTab": challenge.openInNewTab, "data-astro-cid-g4kqlh43": true })}</div>`)}</div></div>${challengeItems.length > 1 && renderTemplate`<div class="carousel-navigation" data-astro-cid-g4kqlh43><button class="carousel-btn-prev" type="button" aria-label="Anterior" data-astro-cid-g4kqlh43><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-g4kqlh43><path d="M3.99976 11.9998H19.9997" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-g4kqlh43></path><path d="M8.99973 17C8.99973 17 3.99978 13.3176 3.99976 12C3.99975 10.6824 8.99976 7 8.99976 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-g4kqlh43></path></svg></button><button class="carousel-btn-next" type="button" aria-label="Siguiente" data-astro-cid-g4kqlh43><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-g4kqlh43><path d="M20.0002 11.9998H4.00026" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-g4kqlh43></path><path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0003 10.6824 15.0002 7 15.0002 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-g4kqlh43></path></svg></button></div>`}</div></div></div>`}${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/challenges/ChallengesCarousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/challenges/ChallengesCarousel.astro", void 0);

export { $$ChallengesCarousel as $ };
