import { _ as __variableDynamicImportRuntimeHelper } from './dynamic-import-helper_uMTE3ehW.mjs';
import { c as createComponent, g as createAstro, m as maybeRenderHead, b as addAttribute, k as renderScript, r as renderComponent, a as renderTemplate } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { $ as $$Index$2 } from './index_XvAtANUT.mjs';
import { $ as $$ChallengesCarousel } from './ChallengesCarousel_Dt_MAur_.mjs';
import { $ as $$Index$3 } from './index_Dk6j8Cdq.mjs';
import { a as $$LazyImage } from './MainLayout_CEv0P3ec.mjs';
/* empty css                         */
import { $ as $$GamesCarousel } from './GamesCarousel_DwuG5Ryh.mjs';
import { g as getLocale, t } from './i18n_BuYowHj0.mjs';

const $$Astro$2 = createAstro("https://taqueritos.com");
const $$MasonryGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MasonryGallery;
  const { items = [], columns = 3, title = "", subtitle = "", className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(className, "class")} data-astro-cid-fttefbun> <div class="gallery-viewport relative" data-astro-cid-fttefbun> <!-- Botones de Navegación (título se renderiza en Home) --> <div class="container mx-auto px-4 flex justify-end mb-4" data-astro-cid-fttefbun> <div class="carousel-navigation-masonry" data-astro-cid-fttefbun> <button class="swiper-button-prev" aria-label="Anterior" data-astro-cid-fttefbun> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-fttefbun> <path d="M3.99976 11.9998H19.9997" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-fttefbun></path> <path d="M8.99973 17C8.99973 17 3.99978 13.3176 3.99976 12C3.99975 10.6824 8.99976 7 8.99976 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-fttefbun></path> </svg> </button> <button class="swiper-button-next" aria-label="Siguiente" data-astro-cid-fttefbun> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-fttefbun> <path d="M20.0002 11.9998H4.00026" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-fttefbun></path> <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0003 10.6824 15.0002 7 15.0002 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-fttefbun></path> </svg> </button> </div> </div> <!-- Swiper --> <div class="swiper-container"${addAttribute(items.length, "data-count")} data-gallery-swiper data-astro-cid-fttefbun> <div class="swiper-wrapper" data-astro-cid-fttefbun> ${items.map((item, idx) => renderTemplate`<div class="swiper-slide"${addAttribute(idx, "data-slide-index")} data-astro-cid-fttefbun> <div class="taqueritos-card" data-astro-cid-fttefbun> <!-- Imagen --> <div class="image-container" data-astro-cid-fttefbun> <button class="image-button"${addAttribute(idx, "data-index")}${addAttribute(item.alt || "Abrir imagen", "aria-label")} data-astro-cid-fttefbun> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": item.url, "alt": item.alt || "", "class": "card-image", "data-astro-cid-fttefbun": true })} </button> </div> <!-- Barra de Acciones --> <div class="actions-bar" data-astro-cid-fttefbun> <div class="flex items-center gap-4" data-astro-cid-fttefbun> <button class="action-btn" aria-label="Me gusta" data-action="like" data-astro-cid-fttefbun> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fttefbun> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-astro-cid-fttefbun></path> </svg> </button> <button class="action-btn" aria-label="Comentar" data-action="comment" data-astro-cid-fttefbun> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fttefbun> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" data-astro-cid-fttefbun></path> </svg> </button> <button class="action-btn" aria-label="Compartir" data-action="share" data-astro-cid-fttefbun> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fttefbun> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" data-astro-cid-fttefbun></path> </svg> </button> </div> <button class="action-btn" aria-label="Guardar" data-action="bookmark" data-astro-cid-fttefbun> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fttefbun> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" data-astro-cid-fttefbun></path> </svg> </button> </div> </div> </div>`)} </div> </div> </div> </section>  ${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/gallery/MasonryGallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/gallery/MasonryGallery.astro", void 0);

const $$Astro$1 = createAstro("https://taqueritos.com");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const {
    brands = [],
    className = "",
    autoplay = true,
    speed = 3e3,
    backgroundColor = "#1a0a0b",
    duplicate = true,
    centered = false
  } = Astro2.props;
  const brandsItems = Array.isArray(brands) ? brands : [];
  const itemsToRender = duplicate ? [
    ...brandsItems,
    ...brandsItems,
    ...brandsItems,
    ...brandsItems
  ] : brandsItems;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`brands-carousel ${className}`, "class")}${addAttribute(autoplay, "data-autoplay")}${addAttribute(speed, "data-speed")}${addAttribute(centered, "data-centered")}${addAttribute(brandsItems.length, "data-count")}${addAttribute(`background-color: ${backgroundColor}`, "style")} data-astro-cid-xc2jbg7p> <div class="brands-shell" data-astro-cid-xc2jbg7p> <svg class="brands-svg" width="1200" height="100" viewBox="0 0 1200 100" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-xc2jbg7p> <path d="M0 0H1200H0ZM1200 100H0H1200ZM20 100C8.40202 100 -1 90.598 -1 79V21C-1 9.40202 8.40202 0 20 0C9.50659 0 1 8.9543 1 20V80C1 91.0457 9.50659 100 20 100ZM1180 0C1191.6 0 1201 9.40202 1201 21V79C1201 90.598 1191.6 100 1180 100C1190.49 100 1199 91.0457 1199 80V20C1199 8.9543 1190.49 0 1180 0Z" fill="url(#paint0_linear_2132_1846)" data-astro-cid-xc2jbg7p></path> <defs data-astro-cid-xc2jbg7p> <linearGradient id="paint0_linear_2132_1846" x1="600" y1="100" x2="600" y2="0" gradientUnits="userSpaceOnUse" data-astro-cid-xc2jbg7p> <stop offset="0.195653" stop-color="#FF2D30" data-astro-cid-xc2jbg7p></stop> <stop offset="0.525" stop-color="#FF9BB1" data-astro-cid-xc2jbg7p></stop> <stop offset="0.810531" stop-color="#FF2D6F" data-astro-cid-xc2jbg7p></stop> </linearGradient> </defs> </svg> <div class="brands-track" data-astro-cid-xc2jbg7p> ${centered && itemsToRender.length <= 4 ? renderTemplate`<div class="static-brands-container" data-astro-cid-xc2jbg7p> ${itemsToRender.map((brand) => renderTemplate`<div class="static-brand-item" data-astro-cid-xc2jbg7p> ${brand.url ? renderTemplate`<a${addAttribute(brand.url, "href")} target="_blank" rel="noopener noreferrer" class="brand-link" data-astro-cid-xc2jbg7p> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": brand.logo, "alt": brand.name, "class": "brand-logo", "width": 160, "height": 60, "data-astro-cid-xc2jbg7p": true })} </a>` : renderTemplate`<div class="brand-link" data-astro-cid-xc2jbg7p> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": brand.logo, "alt": brand.name, "class": "brand-logo", "width": 160, "height": 60, "data-astro-cid-xc2jbg7p": true })} </div>`} </div>`)} </div>` : renderTemplate`<div class="swiper-container-brands" data-astro-cid-xc2jbg7p> <div class="swiper-wrapper" data-astro-cid-xc2jbg7p> ${itemsToRender.map((brand) => renderTemplate`<div class="swiper-slide" data-astro-cid-xc2jbg7p> ${brand.url ? renderTemplate`<a${addAttribute(brand.url, "href")} target="_blank" rel="noopener noreferrer" class="brand-link" data-astro-cid-xc2jbg7p> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": brand.logo, "alt": brand.name, "class": "brand-logo", "width": 160, "height": 60, "data-astro-cid-xc2jbg7p": true })} </a>` : renderTemplate`<div class="brand-link" data-astro-cid-xc2jbg7p> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": brand.logo, "alt": brand.name, "class": "brand-logo", "width": 160, "height": 60, "data-astro-cid-xc2jbg7p": true })} </div>`} </div>`)} </div> </div>`} </div> </div> </div>  ${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/BrandsCarousel/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/BrandsCarousel/index.astro", void 0);

const $$Astro = createAstro("https://taqueritos.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { loading = false } = Astro2.props;
  const currentLang = getLocale();
  let games = [];
  try {
    const gamesModule = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../../locales/en/games.json": () => import('./games_Bx-xwGsF.mjs'),"../../locales/es/games.json": () => import('./games_CwmOTNGg.mjs')})), `../../locales/${currentLang}/games.json`, 5);
    games = gamesModule.default.games || [];
  } catch (e) {
    games = [];
  }
  const gamesTitle = currentLang === "es" ? "Descubre la lista de juegos" : "Discover the games list";
  t("home", { namespace: "common", locale: currentLang }) || {};
  const challengesAssets = t("", { namespace: "challenges", locale: currentLang }) || {};
  const galleryAssets = t("", { namespace: "gallery", locale: currentLang }) || {};
  t("", { namespace: "aboutus", locale: currentLang }) || {};
  const brandsAssets = t("", { namespace: "brands", locale: currentLang }) || {};
  t("", { namespace: "news", locale: currentLang }) || {};
  const products = t("items", { namespace: "products", locale: currentLang }) || [];
  t("players", { namespace: "players", locale: currentLang }) || [];
  t("home", { namespace: "players", locale: currentLang }) || {};
  const brandsList = brandsAssets.brands || [];
  const stockistItems = t("stockist", { namespace: "products", locale: currentLang }) || [];
  const whereToBuyBrands = Array.isArray(stockistItems) ? stockistItems.map((s) => ({ id: String(s.id || ""), name: String(s.name || ""), logo: String(s.icon || ""), url: String(s.link || "") })) : [];
  const taqueritosBrand = brandsList.find((brand) => brand.id === "hugo");
  const taqueritosProducts = taqueritosBrand?.products || [];
  const commonAssets = t("assets.slider", { namespace: "common", locale: currentLang }) || [];
  const slides = Array.isArray(commonAssets) ? commonAssets.filter((asset) => asset && typeof asset === "object" && asset.desktop && asset.mobile).map((asset) => ({
    desktop: asset.desktop,
    mobile: asset.mobile,
    alt: asset.alt || "Taqueritos",
    title: asset.title || "",
    subtitle: asset.description || "",
    link: asset.url || asset.link || "",
    type: asset.type || void 0,
    product_hero: asset.product_hero || void 0,
    product_left: asset.product_left || void 0,
    product_top: asset.product_top || void 0,
    product_right: asset.product_right || void 0,
    product_cta_label: asset.product_cta_label || void 0,
    product_cta_link: asset.product_cta_link || asset.link || asset.url || ""
  })) : [];
  const blogModules = /* #__PURE__ */ Object.assign({});
  let latestBlogPosts = [];
  for (const path in blogModules) {
    const lang = path.split("/")[3];
    if (lang === currentLang) {
      const mod = await blogModules[path]();
      const fm = mod.frontmatter || {};
      if (fm && fm.id && fm.slug && fm.title) {
        latestBlogPosts.push({
          id: String(fm.id),
          slug: String(fm.slug),
          title: String(fm.title),
          image: fm.image ? String(fm.image) : "/images/blog/placeholder.jpg",
          published_date: fm.published_date ? String(fm.published_date) : ""
        });
      }
    }
  }
  function toDate(s) {
    if (!s) return 0;
    if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(s)) {
      const [d, m, y] = s.split("/").map(Number);
      return new Date(y, (m || 1) - 1, d || 1).getTime();
    }
    const t2 = Date.parse(s);
    return isNaN(t2) ? 0 : t2;
  }
  latestBlogPosts = latestBlogPosts.sort((a, b) => toDate(b.published_date) - toDate(a.published_date)).slice(0, 5);
  return renderTemplate`<!-- src/views/Home/index.astro -->${maybeRenderHead()}<main class="w-full flex flex-col items-center justify-center mt-0"> <!-- Slider Section con VideoCarousel --> <div class="relative w-full overflow-hidden"> ${renderComponent($$result, "VideoCarousel", $$Index$2, { "slides": slides, "height": "100vh", "mobileHeight": "300px", "showOverlay": true })} </div> ${currentLang === "es" && renderTemplate`<section id="challenges" class="w-full py-16 md:py-20 !bg-brown relative"> <div class="container mx-auto px-4 relative"> ${challengesAssets.title && renderTemplate`<div class="title mb-12"> <p>${challengesAssets.title}</p> ${challengesAssets.subtitle && renderTemplate`<p>${challengesAssets.subtitle}</p>`} </div>`}  <div class="title mb-4"> <p>PARTICIPA EN NUESTROS RETOS</p> </div> ${renderComponent($$result, "ChallengesCarousel", $$ChallengesCarousel, { "title": challengesAssets.title || "PARTICIPA EN NUESTROS", "subtitle": challengesAssets.subtitle || "RETOS Y GANA PREMIOS", "textButton": challengesAssets.view_more || "Ver Todos" })} </div> </section>`} <!-- Sección de Productos taqueritos --> ${taqueritosProducts.length > 0 && renderTemplate`<section id="products" class="w-full py-4 pt-16 bg-brown"> <div class="container mx-auto px-4 title"> ${brandsAssets.home?.title && renderTemplate`<div> <p> ${brandsAssets.home?.title} </p> ${brandsAssets.home?.subtitle && renderTemplate`<p> ${brandsAssets.home?.subtitle} </p>`} </div>`} ${renderComponent($$result, "ProductsCarousel", $$Index$3, { "products": products, "color": "white", "autoplay": true, "speed": 4e3, "slidesPerView": 3, "spaceBetween": 30, "loop": true, "className": "max-w-7xl mx-auto mb-8" })} </div> </section>`} <section id="wherebuy" class="w-full"> ${renderComponent($$result, "BrandsCarousel", $$Index$1, { "brands": whereToBuyBrands, "autoplay": true, "speed": 1e3, "backgroundColor": "#0a0405", "duplicate": false, "centered": true })} </section> <!-- {players.length > 0 && (
      <section id="players" class="w-full !bg-[#081806]">
        <PlayersCarousel 
          players={players} 
          playersHome={playersHome}
        />
      </section>
    )} --> <!-- Sección Gallery --> <section id="gallery" class="relative w-full overflow-hidden bg-dark-spotlight-blue py-8"> <div class="container mx-auto px-4 flex items-start justify-between mb-6"> <div class="title"> ${galleryAssets.title && renderTemplate`<p>${galleryAssets.title}</p>`} ${galleryAssets.subtitle && renderTemplate`<p>${galleryAssets.subtitle}</p>`} </div> </div> ${Array.isArray(galleryAssets.images) && galleryAssets.images.length > 0 && renderTemplate`${renderComponent($$result, "MasonryGallery", $$MasonryGallery, { "items": galleryAssets.images })}`} </section> <!-- Carrusel de juegos --> ${games.length > 0 && renderTemplate`<section class="w-full py-8 bg-brown" id="games"> <div class="container mx-auto px-4"> ${renderComponent($$result, "GamesCarousel", $$GamesCarousel, { "items": games }, { "title": async ($$result2) => renderTemplate`<div class="title"> <p>${gamesTitle}</p> </div>` })} </div> </section>`} </main>`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Home/index.astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Home/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, $$url as url };
