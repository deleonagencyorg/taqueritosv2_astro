import { c as createComponent, g as createAstro, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, k as renderScript, h as renderTransition, i as fade, j as defineScriptVars } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { a as $$LazyImage, c as generalAssets } from './MainLayout_CEv0P3ec.mjs';
import { t, g as getLocale } from './i18n_BuYowHj0.mjs';
import 'clsx';
import { $ as $$Breadcrumb } from './Breadcrumb_Csd8I6Iz.mjs';
/* empty css                              */
/* empty css                            */

const $$Astro$2 = createAstro("https://taqueritos.com");
const $$SkeletonLoader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SkeletonLoader;
  const {
    width = "100%",
    height = "100%",
    className = "",
    rounded = false,
    circle = false
  } = Astro2.props;
  const baseClasses = "animate-pulse bg-gradient-to-r from-gray-200 to-gray-300";
  const roundedClasses = rounded ? "rounded-lg" : "";
  const circleClasses = circle ? "rounded-full" : "";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([baseClasses, roundedClasses, circleClasses, className], "class:list")}${addAttribute(`width: ${width}; height: ${height};`, "style")} aria-hidden="true"></div>`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/SkeletonLoader.astro", void 0);

const $$BrandCardSkeleton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="brand-card relative flex items-center mt-[-2rem]"> <div class="brand-card-bg bg-gray-100"></div> <div class="container mx-auto px-4 py-8 relative"> <div class="flex flex-col md:flex-row items-center justify-between"> <!-- Info Brand Skeleton --> <div class="md:w-1/2 order-2 md:order-1 flex items-center justify-center"> <div class="brand-logo-container relative"> <div class="flex flex-col items-center z-10 relative"> ${renderComponent($$result, "SkeletonLoader", $$SkeletonLoader, { "width": "180px", "height": "120px", "rounded": true })} ${renderComponent($$result, "SkeletonLoader", $$SkeletonLoader, { "width": "120px", "height": "40px", "className": "mt-6 rounded-full" })} </div> </div> </div> <!-- Product Image Skeleton --> <div class="md:w-1/2 order-1 md:order-2 mb-6 md:mb-0 flex items-center justify-center product-preview-container"> ${renderComponent($$result, "SkeletonLoader", $$SkeletonLoader, { "width": "280px", "height": "280px", "className": "product-preview-image" })} </div> </div> </div> </div>`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/brands/BrandCardSkeleton.astro", void 0);

const $$Astro$1 = createAstro("https://taqueritos.com");
const $$CrownTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CrownTitle;
  const { text, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="crown-title-container"> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": generalAssets.coronaIcon, "alt": "Crown decoration", "class": "crown-icon md:w-32 w-24", "width": "34", "height": "34" })} <h1${addAttribute(`text-6xl md:text-8xl font-bold mb-4 font-title text-primary ${className}`, "class")}> ${text} </h1> </div> ${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/CrownTitle/CrownTitle.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/CrownTitle/CrownTitle.astro", void 0);

const $$Astro = createAstro("https://taqueritos.com");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index$1;
  const {
    src,
    alt = "Chip decorativo",
    size = "md",
    position = "random",
    mobilePosition,
    animationDuration,
    class: className = ""
  } = Astro2.props;
  const uniqueId = `chip-${Math.random().toString(36).substring(2, 9)}`;
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16 md:w-20 md:h-20",
    lg: "w-20 h-20 md:w-24 md:h-24",
    xl: "w-24 h-24 md:w-28 md:h-28",
    "2xl": "w-28 h-28 md:w-32 md:h-32",
    "3xl": "w-32 h-32 md:w-36 md:h-36",
    "4xl": "w-36 h-36 md:w-40 md:h-40",
    "5xl": "w-40 h-40 md:w-44 md:h-44",
    "6xl": "w-44 h-44 md:w-48 md:h-48",
    "7xl": "w-48 h-48 md:w-52 md:h-52",
    "8xl": "w-52 h-52 md:w-56 md:h-56",
    "9xl": "w-56 h-56 md:w-60 md:h-60",
    "10xl": "w-60 h-60 md:w-64 md:h-64"
  };
  let positionStyle = "";
  if (position === "random") {
    const top = Math.floor(Math.random() * 80) + 10;
    const left = Math.floor(Math.random() * 80) + 10;
    positionStyle = `top: ${top}%; left: ${left}%;`;
  } else if (position) {
    positionStyle = position;
  }
  const duration = animationDuration || Math.floor(Math.random() * 10) + 8;
  const animationIndex = Math.floor(Math.random() * 5) + 1;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`floating-chip absolute ${sizeClasses[size]} ${className} ${uniqueId}`, "class")}${addAttribute(`${positionStyle} animation: float${animationIndex} ${duration}s infinite linear;`, "style")}> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": src, "alt": alt, "class": "w-full h-full object-contain", "decorative": alt === "Chip decorativo", "loading": "lazy" })} </div> ${mobilePosition && renderTemplate`<style is:global>
    @media (max-width: 768px) {
      .{\`\${uniqueId}\`} {
        {mobilePosition};
      }
    }
  </style>`}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/FloatingChip/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const currentLang = getLocale();
  let isLoading = true;
  let loadError = false;
  let brandsData = [];
  let pageTitle = "";
  let pageDescription = "";
  let homeAssets = [];
  try {
    brandsData = t("brands", { namespace: "brands", locale: currentLang }) || [];
    homeAssets = t("home", { namespace: "brands", locale: currentLang }) || [];
    pageTitle = t("home.title", { namespace: "brands" }) || "Marcas";
    pageDescription = t("home.description", { namespace: "brands" }) || "Nuestras marcas";
    isLoading = false;
  } catch (error) {
    console.error("Error al cargar datos de marcas:", error);
    brandsData = [];
    pageTitle = currentLang === "es" ? "Marcas" : "Brands";
    pageDescription = currentLang === "es" ? "Nuestras marcas" : "Our brands";
    loadError = true;
    isLoading = false;
  }
  const skeletonCount = 3;
  return renderTemplate`${maybeRenderHead()}<div class="brands-container bg-white"${addAttribute(renderTransition($$result, "mbbp6xhx", fade({ duration: "0.5s" }), "brands-container"), "data-astro-transition-scope")}> <div class="container mx-auto px-4 md:py-8 py-0"> ${renderComponent($$result, "Breadcrumb", $$Breadcrumb, { "bgColor": "bg-primary", "textColor": "text-gray-900", "hoverColor": "hover:text-gray-900" })} </div> <header class="brands-header text-center md:py-8 py-0"${addAttribute(renderTransition($$result, "vejxru5z", fade({ duration: "0.7s" }), "brands-header"), "data-astro-transition-scope")}> ${renderComponent($$result, "CrownTitle", $$CrownTitle, { "text": pageTitle, "data-astro-transition-scope": renderTransition($$result, "g4nlnjmg", fade({ duration: "0.8s" }), "brands-title") })} <div class="brands-carousel-container relative w-full my-8"${addAttribute(renderTransition($$result, "frvct6wi", fade({ duration: "0.8s" }), "brands-carousel"), "data-astro-transition-scope")}> <!-- Botones de navegación --> <button class="carousel-nav carousel-prev absolute left-0 top-[60%] transform -translate-y-[200px] z-10 bg-white/80 rounded-full shadow-md w-12 h-12 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="nav-arrow w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <div class="brands-icons-carousel overflow-x-auto hide-scrollbar bg-white"${addAttribute(renderTransition($$result, "uismh22z", fade({ duration: "0.6s" }), "brands-icons"), "data-astro-transition-scope")}> ${isLoading ? renderTemplate`<div class="brands-icons-row flex items-center gap-4 py-4"> ${Array(6).fill(0).map((_, i) => renderTemplate`<div class="brand-icon-circle flex-shrink-0 bg-gray-100"> ${renderComponent($$result, "SkeletonLoader", $$SkeletonLoader, { "width": "64px", "height": "64px", "circle": true })} </div>`)} </div>` : renderTemplate`<div class="brands-icons-row flex items-center gap-4 py-4"> ${brandsData.map((brand, index) => renderTemplate`<a${addAttribute(`#${brand.slug}`, "href")} class="brand-icon-circle flex-shrink-0"${addAttribute(`background-color: ${brand.bgColor || "#ffffff"}`, "style")}${addAttribute(`Ir a ${brand.title}`, "aria-label")}${addAttribute(renderTransition($$result, "n35xl7lp", fade({ duration: "0.5s" }), `brand-icon-${brand.id}`), "data-astro-transition-scope")}> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": brand.logo, "alt": brand.title, "class": "w-16 md:w-32 h-16 md:h-32 object-contain" })} </a>`)} </div>`} </div> <button class="carousel-nav carousel-next absolute right-0 top-[60%] transform -translate-y-1/2 z-10 bg-white/80 rounded-full shadow-md w-12 h-12 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" class="nav-arrow w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </header> </div> <div class="container mx-auto px-4 mt-[-2rem]"> <div class="brands-list"${addAttribute(renderTransition($$result, "o5dzgs2m", fade({ duration: "0.6s" }), "brands-list"), "data-astro-transition-scope")}> ${isLoading ? (
    // Mostrar skeletons durante la carga
    Array(skeletonCount).fill(0).map((_, i) => renderTemplate`<div${addAttribute(renderTransition($$result, "bqnfijz6", fade({ duration: "0.4s" }), `brand-skeleton-${i}`), "data-astro-transition-scope")}> ${renderComponent($$result, "BrandCardSkeleton", $$BrandCardSkeleton, {})} </div>`)
  ) : loadError ? (
    // Mostrar mensaje de error si falla la carga
    renderTemplate`<div class="error-message p-8 text-center bg-red-50 rounded-lg"${addAttribute(renderTransition($$result, "qtl3rlvz", fade({ duration: "0.5s" }), "brands-error"), "data-astro-transition-scope")}> <p class="text-red-600 text-xl">No se pudieron cargar las marcas. Por favor, intenta de nuevo más tarde.</p> </div>`
  ) : (
    // Mostrar datos reales cuando estén disponibles
    brandsData.map((brand, index) => renderTemplate`<div${addAttribute(brand.slug, "id")} class="brand-card relative flex items-center mt-[-2rem]"${addAttribute(renderTransition($$result, "7aqyfdga", fade({ duration: "0.6s" }), `brand-card-${brand.id}`), "data-astro-transition-scope")}> <div class="brand-card-bg"${addAttribute(`background-color: ${brand.bgColor || "#ffffff"}`, "style")}></div> <!-- Mobile chip images positioned at brand card corners --> ${brand.imageChip1 && renderTemplate`${renderComponent($$result, "FloatingChip", $$Index$1, { "src": brand.imageChip1, "alt": "Chip", "size": "lg", "position": "top: 10%; left: 10%;", "animationDuration": 10, "class": "chip-mobile chip-top-left" })}`} ${brand.imageChip2 && renderTemplate`${renderComponent($$result, "FloatingChip", $$Index$1, { "src": brand.imageChip2, "alt": "Chip", "size": "xl", "position": "top: 10%; right: 10%;", "animationDuration": 12, "class": "chip-mobile chip-top-right" })}`} ${brand.imageChip3 && renderTemplate`${renderComponent($$result, "FloatingChip", $$Index$1, { "src": brand.imageChip3, "alt": "Chip", "size": "lg", "position": "bottom: 10%; left: 10%;", "animationDuration": 9, "class": "chip-mobile chip-bottom-left" })}`} ${brand.imageChip4 && renderTemplate`${renderComponent($$result, "FloatingChip", $$Index$1, { "src": brand.imageChip4, "alt": "Chip", "size": "xl", "position": "bottom: 10%; right: 10%;", "animationDuration": 11, "class": "chip-mobile chip-bottom-right" })}`} <div class="container mx-auto px-4 py-8 relative"> <div class="flex flex-col md:flex-row items-center justify-between"> <div id="info-brand"${addAttribute(`md:w-1/2 order-2 md:order-${index % 2 === 0 ? "1" : "2"} flex items-center justify-center`, "class")}> <div class="brand-logo-container relative">  ${brand.imageChip1 && renderTemplate`${renderComponent($$result, "FloatingChip", $$Index$1, { "src": brand.imageChip1, "alt": "Chip", "size": "2xl", "position": "top: -5%; left: -5%;", "animationDuration": 15, "class": "chip-desktop chip-top-left" })}`} ${brand.imageChip2 && renderTemplate`${renderComponent($$result, "FloatingChip", $$Index$1, { "src": brand.imageChip2, "alt": "Chip", "size": "xl", "position": "top: -5%; right: -5%;", "animationDuration": 17, "class": "chip-desktop chip-top-right" })}`} ${brand.imageChip3 && renderTemplate`${renderComponent($$result, "FloatingChip", $$Index$1, { "src": brand.imageChip3, "alt": "Chip", "size": "xl", "position": "bottom: -5%; left: -5%;", "animationDuration": 16, "class": "chip-desktop chip-bottom-left" })}`} ${brand.imageChip4 && renderTemplate`${renderComponent($$result, "FloatingChip", $$Index$1, { "src": brand.imageChip4, "alt": "Chip", "size": "2xl", "position": "bottom: -5%; right: -5%;", "animationDuration": 18, "class": "chip-desktop chip-bottom-right" })}`} <div id="brand-logo" class="flex flex-col items-center z-10 relative "> ${renderComponent($$result, "LazyImage", $$LazyImage, { "class": "mt-[-6rem] md:mt-0", "src": brand.logo, "alt": brand.title, "data-astro-transition-scope": renderTransition($$result, "qzmu4gun", fade({ duration: "0.5s" }), `brand-image-${brand.id}`) })} ${!brand.url || brand.url === "#" ? null : renderTemplate`<a${addAttribute(brand.url, "href")} class="inline-block bg-white border border-primary text-primary hover:bg-primary hover:text-white py-2 px-6 rounded-full transition-colors duration-300 mt-6"> ${homeAssets.textButton} </a>`} </div> </div> </div> <div id="product-image-brand"${addAttribute(`md:w-1/2 order-1 md:order-${index % 2 === 0 ? "2" : "1"} mb-6 md:mb-0 flex items-center justify-center product-preview-container`, "class")}> <div class="products-carousel"${addAttribute(`products-carousel-${brand.id}`, "id")}> <div class="products-carousel-inner"> ${brand.products && brand.products.length > 0 ? brand.products.map((product, productIndex) => renderTemplate`<div class="product-slide"${addAttribute(`${brand.id}-product-${productIndex}`, "id")} data-valid="true"> ${renderComponent($$result, "LazyImage", $$LazyImage, { "id": `product-${brand.id}-${productIndex}`, "src": product.image, "alt": product.title, "class": "product-preview-image", "onload": "this.parentNode.dataset.loaded = 'true'", "onerror": "this.parentNode.dataset.valid = 'false'; this.parentNode.style.display = 'none';" })} </div>`) : renderTemplate`<div class="product-slide" data-valid="true"> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": brand.imageProductPreview || brand.image, "alt": brand.title, "class": "product-preview-image", "data-astro-transition-scope": renderTransition($$result, "qzvcse4q", fade({ duration: "0.5s" }), `brand-image-${brand.id}`) })} </div>`} </div> ${brand.products && brand.products.length > 1 && renderTemplate`<div class="products-carousel-nav"> <button class="prev-product" aria-label="Producto anterior"> <svg xmlns="http://www.w3.org/2000/svg" class="nav-arrow w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button class="next-product" aria-label="Siguiente producto"> <svg xmlns="http://www.w3.org/2000/svg" class="nav-arrow w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div>`}  ${brand.products && brand.products.length > 0 && renderTemplate(_a || (_a = __template(["<script>(function(){", "\n                      // Funci\xF3n para precargar im\xE1genes\n                      function preloadImages() {\n                        if (!products || products.length === 0) return;\n                        \n                        products.forEach((product, index) => {\n                          if (!product.image) return;\n                          \n                          // Crear un elemento Image para precargar\n                          const img = new Image();\n                          img.onload = function() {\n                            console.log(`Precargada imagen ${index} de ${brandId}`);\n                          };\n                          img.onerror = function() {\n                            console.error(`Error al precargar imagen ${index} de ${brandId}`);\n                          };\n                          img.src = product.image;\n                        });\n                      }\n                      \n                      // Ejecutar despu\xE9s de que la p\xE1gina est\xE9 cargada\n                      if (document.readyState === 'complete') {\n                        preloadImages();\n                      } else {\n                        window.addEventListener('load', preloadImages);\n                      }\n                    })();<\/script>"], ["<script>(function(){", "\n                      // Funci\xF3n para precargar im\xE1genes\n                      function preloadImages() {\n                        if (!products || products.length === 0) return;\n                        \n                        products.forEach((product, index) => {\n                          if (!product.image) return;\n                          \n                          // Crear un elemento Image para precargar\n                          const img = new Image();\n                          img.onload = function() {\n                            console.log(\\`Precargada imagen \\${index} de \\${brandId}\\`);\n                          };\n                          img.onerror = function() {\n                            console.error(\\`Error al precargar imagen \\${index} de \\${brandId}\\`);\n                          };\n                          img.src = product.image;\n                        });\n                      }\n                      \n                      // Ejecutar despu\xE9s de que la p\xE1gina est\xE9 cargada\n                      if (document.readyState === 'complete') {\n                        preloadImages();\n                      } else {\n                        window.addEventListener('load', preloadImages);\n                      }\n                    })();<\/script>"])), defineScriptVars({ products: brand.products, brandId: brand.id }))} </div> </div> </div> </div> <!-- Decorative elements like triangles and chips based on the reference image --> </div>`)
  )} </div> </div> <!-- Cargar scripts para la funcionalidad de la página --> ${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Brands/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Brands/index.astro", "self");

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Brands/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, $$url as url };
