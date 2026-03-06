import { g as createAstro, c as createComponent, a as renderTemplate, j as defineScriptVars, m as maybeRenderHead, r as renderComponent, b as addAttribute } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, a as $$LazyImage } from './MainLayout_CEv0P3ec.mjs';
import { t } from './i18n_BuYowHj0.mjs';
import { $ as $$Index$1 } from './index_XvAtANUT.mjs';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://taqueritos.com");
const $$InteractiveMap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InteractiveMap;
  const { title } = Astro2.props;
  const paises = [
    { nombre: "Guatemala", coords: [14.6349, -90.5069] },
    { nombre: "Honduras", coords: [15.2, -86.2419] },
    { nombre: "El Salvador", coords: [13.7942, -88.8965] },
    { nombre: "Nicaragua", coords: [12.8654, -85.2072] },
    { nombre: "Costa Rica", coords: [9.7489, -83.7534] },
    { nombre: "Rep\xFAblica Dominicana", coords: [18.7357, -70.1627] }
  ];
  return renderTemplate(_a || (_a = __template(["", '<div class="map-wrapper" data-astro-cid-va5bw2v3> <div id="interactive-map" class="w-full h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)]" data-astro-cid-va5bw2v3></div> </div> <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script> <script>(function(){', `
  function initMap() {
    const mapElement = document.getElementById('interactive-map');
    if (!mapElement || typeof L === 'undefined') return;

    const map = L.map('interactive-map', {
      center: [14, -84],
      zoom: 5,
      zoomControl: true,
      scrollWheelZoom: true,
      dragging: true,
      minZoom: 4,
      maxZoom: 8
    });

    // Mapa oscuro con estilo personalizado
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    // Agregar marcadores para cada pa\xEDs
    paises.forEach(pais => {
      const marker = L.circleMarker(pais.coords, {
        color: '#ff0000',
        fillColor: '#ff0000',
        fillOpacity: 0.9,
        radius: 10,
        weight: 3
      }).addTo(map);

      // Label permanente
      marker.bindTooltip(pais.nombre, {
        permanent: true,
        direction: 'bottom',
        className: 'country-label',
        offset: [0, 12]
      });

      // Popup con logo al hacer hover
      const popupContent = \`
        <div>
          <img 
            src="https://snack.yummiespromociones.com/SnacksyummiesAssets/taqueritosfavicon.png" 
            alt="Taqueritos Logo" 
            class="logo-popup"
          />
          <div class="country-name-popup">\${pais.nombre}</div>
        </div>
      \`;

      marker.bindPopup(popupContent, {
        closeButton: false,
        offset: [0, -10]
      });

      // Efectos hover
      marker.on('mouseover', function(e) {
        this.setStyle({ 
          radius: 14, 
          fillOpacity: 1,
          weight: 4
        });
        this.openPopup();
      });

      marker.on('mouseout', function(e) {
        this.setStyle({ 
          radius: 10, 
          fillOpacity: 0.9,
          weight: 3
        });
        setTimeout(() => {
          this.closePopup();
        }, 200);
      });
    });
  }

  // Inicializar cuando el DOM est\xE9 listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
  } else {
    initMap();
  }

  // Reinicializar en transiciones de Astro
  document.addEventListener('astro:page-load', initMap);
  document.addEventListener('astro:after-swap', initMap);
})();<\/script>`], ["", '<div class="map-wrapper" data-astro-cid-va5bw2v3> <div id="interactive-map" class="w-full h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)]" data-astro-cid-va5bw2v3></div> </div> <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script> <script>(function(){', `
  function initMap() {
    const mapElement = document.getElementById('interactive-map');
    if (!mapElement || typeof L === 'undefined') return;

    const map = L.map('interactive-map', {
      center: [14, -84],
      zoom: 5,
      zoomControl: true,
      scrollWheelZoom: true,
      dragging: true,
      minZoom: 4,
      maxZoom: 8
    });

    // Mapa oscuro con estilo personalizado
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    // Agregar marcadores para cada pa\xEDs
    paises.forEach(pais => {
      const marker = L.circleMarker(pais.coords, {
        color: '#ff0000',
        fillColor: '#ff0000',
        fillOpacity: 0.9,
        radius: 10,
        weight: 3
      }).addTo(map);

      // Label permanente
      marker.bindTooltip(pais.nombre, {
        permanent: true,
        direction: 'bottom',
        className: 'country-label',
        offset: [0, 12]
      });

      // Popup con logo al hacer hover
      const popupContent = \\\`
        <div>
          <img 
            src="https://snack.yummiespromociones.com/SnacksyummiesAssets/taqueritosfavicon.png" 
            alt="Taqueritos Logo" 
            class="logo-popup"
          />
          <div class="country-name-popup">\\\${pais.nombre}</div>
        </div>
      \\\`;

      marker.bindPopup(popupContent, {
        closeButton: false,
        offset: [0, -10]
      });

      // Efectos hover
      marker.on('mouseover', function(e) {
        this.setStyle({ 
          radius: 14, 
          fillOpacity: 1,
          weight: 4
        });
        this.openPopup();
      });

      marker.on('mouseout', function(e) {
        this.setStyle({ 
          radius: 10, 
          fillOpacity: 0.9,
          weight: 3
        });
        setTimeout(() => {
          this.closePopup();
        }, 200);
      });
    });
  }

  // Inicializar cuando el DOM est\xE9 listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
  } else {
    initMap();
  }

  // Reinicializar en transiciones de Astro
  document.addEventListener('astro:page-load', initMap);
  document.addEventListener('astro:after-swap', initMap);
})();<\/script>`])), maybeRenderHead(), defineScriptVars({ paises }));
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/map/InteractiveMap.astro", void 0);

const $$Astro = createAstro("https://taqueritos.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { currentLang, headerColorConfig } = Astro2.props;
  const title = t("meta.about_us.title", { namespace: "common", locale: currentLang });
  const metaDescription = t("meta.about_us.description", { namespace: "common", locale: currentLang });
  t("title", { namespace: "aboutus", locale: currentLang });
  t("subtitle", { namespace: "aboutus", locale: currentLang });
  t("intro", { namespace: "aboutus", locale: currentLang });
  t("items", { namespace: "aboutus", locale: currentLang }) || [];
  t("conclusion", { namespace: "aboutus", locale: currentLang });
  const aboutSectionTitle = t("about_section_title", { namespace: "aboutus", locale: currentLang });
  const aboutSectionParagraphs = t("about_section_paragraphs", { namespace: "aboutus", locale: currentLang }) || [];
  const presenceSectionTitle = t("presence_section_title", { namespace: "aboutus", locale: currentLang });
  const presenceSectionDescription = t("presence_section_description", { namespace: "aboutus", locale: currentLang });
  const experiencesSectionTitle = t("experiences_section_title", { namespace: "aboutus", locale: currentLang });
  const experiencesSectionDescription = t("experiences_section_description", { namespace: "aboutus", locale: currentLang });
  const experiencesCards = t("experiences_cards", { namespace: "aboutus", locale: currentLang }) || [];
  const commonAssets = t("assets.slider", { namespace: "common", locale: currentLang }) || [];
  const promosSlides = Array.isArray(commonAssets) ? commonAssets.filter((asset) => asset && typeof asset === "object" && asset.desktop && asset.mobile && asset.type === "image").map((asset) => ({
    desktop: asset.desktop,
    mobile: asset.mobile,
    alt: asset.alt || "Promo Taqueritos",
    title: asset.title || "",
    subtitle: asset.description || "",
    link: asset.url || asset.link || "",
    type: "image"
  })) : [];
  const videoSlide = [{
    desktop: "https://snack.yummiespromociones.com/taqueritos/Looptaqueritos.mp4",
    mobile: "https://snack.yummiespromociones.com/taqueritos/Looptaqueritos.mp4",
    alt: "Taqueritos",
    title: "",
    subtitle: "",
    link: "",
    type: "video"
  }];
  const heroSlides = promosSlides.length > 0 ? promosSlides : videoSlide;
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": title, "class": "bg-brown", "description": metaDescription, "data-astro-cid-imm7tbir": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero-section" data-astro-cid-imm7tbir> ${renderComponent($$result2, "VideoCarousel", $$Index$1, { "slides": heroSlides, "height": "100%", "mobileHeight": "100%", "showOverlay": false, "data-astro-cid-imm7tbir": true })} </section> <section class="bg-[#150404] py-16 md:py-20" data-astro-cid-imm7tbir> <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-14 items-center" data-astro-cid-imm7tbir> <!-- Columna texto --> <div class="w-full md:w-1/2 text-white" data-astro-cid-imm7tbir> ${aboutSectionTitle && renderTemplate`<h2 class="font-title text-3xl md:text-4xl font-extrabold uppercase mb-6" data-astro-cid-imm7tbir> ${aboutSectionTitle} </h2>`} <div class="space-y-4 text-sm md:text-base leading-relaxed text-white/90" data-astro-cid-imm7tbir> ${aboutSectionParagraphs.map((paragraph) => renderTemplate`<p data-astro-cid-imm7tbir>${paragraph}</p>`)} </div> </div> <!-- Columna imágenes --> <div class="w-full md:w-1/2 flex justify-center" data-astro-cid-imm7tbir> <div class="about-cards relative w-full max-w-sm h-[260px] md:h-[320px]" data-astro-cid-imm7tbir> <div class="about-card about-card-3" data-astro-cid-imm7tbir> <img src="https://snack.yummiespromociones.com/taqueritos/taqueritos1.jpg" alt="Taqueritos comunidad 3" class="w-full h-full object-cover rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.7)]" data-astro-cid-imm7tbir> </div> <div class="about-card about-card-2" data-astro-cid-imm7tbir> <img src="https://snack.yummiespromociones.com/taqueritos/taqueritos2.jpg" alt="Taqueritos comunidad 2" class="w-full h-full object-cover rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.7)]" data-astro-cid-imm7tbir> </div> <div class="about-card about-card-1" data-astro-cid-imm7tbir> <img src="https://snack.yummiespromociones.com/taqueritos/taqueritos3.jpg" alt="Taqueritos comunidad 1" class="w-full h-full object-cover rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8)]" data-astro-cid-imm7tbir> </div> </div> </div> </div> </section> ${presenceSectionTitle && renderTemplate`<section class="bg-[#150404] pb-20 pt-4 md:pt-8" data-astro-cid-imm7tbir> <div class="max-w-6xl mx-auto px-4 text-center text-white" data-astro-cid-imm7tbir> <h2 class="font-title text-3xl md:text-4xl font-extrabold uppercase mb-3" data-astro-cid-imm7tbir> ${presenceSectionTitle} </h2> ${presenceSectionDescription && renderTemplate`<p class="text-sm md:text-base text-white/80 max-w-3xl mx-auto mb-8" data-astro-cid-imm7tbir> ${presenceSectionDescription} </p>`} <div class="mt-4" data-astro-cid-imm7tbir> ${renderComponent($$result2, "InteractiveMap", $$InteractiveMap, { "title": presenceSectionTitle, "data-astro-cid-imm7tbir": true })} </div> </div> </section>`}${experiencesSectionTitle && renderTemplate`<section class="bg-[#150404] pb-24 pt-10" data-astro-cid-imm7tbir> <div class="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch" data-astro-cid-imm7tbir> <!-- Cards --> <div class="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6" data-astro-cid-imm7tbir> ${experiencesCards.map((card) => {
    let href = "#";
    if (card.id === "products") {
      href = `/${currentLang}/#products`;
    } else if (card.id === "challenges") {
      href = "/es/retos-torneos";
    } else if (card.id === "community") {
      href = `/${currentLang}/${currentLang === "es" ? "recetas" : "recipes"}`;
    }
    const isRecipesCard = card.id === "community";
    const recipesTitle = currentLang === "es" ? "Recetas gamer" : "Gamer recipes";
    const recipesDescription = currentLang === "es" ? "Combina tus Taqueritos como un pro: recetas r\xE1pidas para subir de nivel cada snack y romper la rutina." : "Mix your Taqueritos like a pro: quick recipes to level up every snack and break the routine.";
    const recipesCta = currentLang === "es" ? "Ver recetas" : "See recipes";
    return renderTemplate`<article class="experience-card flex flex-col bg-[#1c0505] border border-white/10 rounded-md overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.7)] group" data-astro-cid-imm7tbir> <div class="relative h-52 md:h-56 overflow-hidden" data-astro-cid-imm7tbir> <div class="experience-card-badge" data-astro-cid-imm7tbir> ${card.id === "products" && renderTemplate`<svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-imm7tbir> <path d="M4 9H20L18.5 19H5.5L4 9Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" data-astro-cid-imm7tbir></path> <path d="M9 5L8 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" data-astro-cid-imm7tbir></path> <path d="M15 5L16 9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" data-astro-cid-imm7tbir></path> </svg>`} ${card.id === "challenges" && renderTemplate`<svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-imm7tbir> <path d="M8 4H16L15 11L12 13L9 11L8 4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" data-astro-cid-imm7tbir></path> <path d="M9 16H15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" data-astro-cid-imm7tbir></path> </svg>`} ${card.id === "community" && renderTemplate`<svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-imm7tbir> <circle cx="9" cy="9" r="2.5" stroke="currentColor" stroke-width="1.6" data-astro-cid-imm7tbir></circle> <circle cx="15" cy="9" r="2.5" stroke="currentColor" stroke-width="1.6" data-astro-cid-imm7tbir></circle> <path d="M5.5 18C6.2 15.8 7.9 14.5 9.9 14.5H14.1C16.1 14.5 17.8 15.8 18.5 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" data-astro-cid-imm7tbir></path> </svg>`} </div> ${renderComponent($$result2, "LazyImage", $$LazyImage, { "src": card.id === "products" ? "https://snack.yummiespromociones.com/taqueritos/nuestracomunidad.png" : card.id === "challenges" ? "https://snack.yummiespromociones.com/taqueritos/retosytorneos.jpg" : "https://snack.yummiespromociones.com/taqueritos/recetataqueritos.png", "alt": card.title, "class": "w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-300", "data-astro-cid-imm7tbir": true })} </div> <div class="flex flex-col flex-1 px-5 py-6 text-white" data-astro-cid-imm7tbir> <h3 class="font-title text-lg md:text-xl font-extrabold uppercase mb-3 tracking-wide" data-astro-cid-imm7tbir> ${isRecipesCard ? recipesTitle : card.title} </h3> <p class="text-sm md:text-[15px] text-white/85 leading-relaxed flex-1 mb-4" data-astro-cid-imm7tbir> ${isRecipesCard ? recipesDescription : card.description} </p> <a${addAttribute(href, "href")} class="inline-flex items-center text-xs md:text-sm font-semibold tracking-[0.15em] uppercase text-red group-hover:text-red transition-colors" data-astro-cid-imm7tbir> ${isRecipesCard ? recipesCta : card.cta} <span class="ml-2 inline-block transform group-hover:translate-x-1 transition-transform" data-astro-cid-imm7tbir>
→
</span> </a> </div> </article>`;
  })} </div> <!-- Columna de texto lateral --> <aside class="w-full lg:w-1/4 text-white flex items-center" data-astro-cid-imm7tbir> <div class="text-left lg:text-right w-full" data-astro-cid-imm7tbir> <h2 class="font-title text-3xl md:text-4xl font-extrabold uppercase mb-4" data-astro-cid-imm7tbir> ${experiencesSectionTitle} </h2> ${experiencesSectionDescription && renderTemplate`<p class="text-sm md:text-[15px] text-white/80 leading-relaxed" data-astro-cid-imm7tbir> ${experiencesSectionDescription} </p>`} </div> </aside> </div> </section>`}` })} `;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/AboutUs/index.astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/AboutUs/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, $$url as url };
