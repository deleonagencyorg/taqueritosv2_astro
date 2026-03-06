import { c as createComponent, g as createAstro, m as maybeRenderHead, b as addAttribute, k as renderScript, a as renderTemplate, r as renderComponent } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { a as $$LazyImage } from './MainLayout_CEv0P3ec.mjs';
/* empty css                         */

const $$Astro = createAstro("https://taqueritos.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    products = [],
    className = "",
    autoplay = true,
    speed = 5e3,
    slidesPerView = 3,
    spaceBetween = 0,
    loop = true,
    color = "#F08C00"
  } = Astro2.props;
  const currentLang = Astro2.url.pathname.split("/")[1] === "es" ? "es" : "en";
  const texts = {
    es: { viewMore: "Ver producto" },
    en: { viewMore: "View product" }
  };
  const currentTexts = texts[currentLang];
  const productsItems = Array.isArray(products) ? products : [];
  const itemsToRender = productsItems.length <= 3 && productsItems.length > 1 ? [...productsItems, ...productsItems, ...productsItems] : productsItems;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`products-carousel ${className}`, "class")}${addAttribute(autoplay, "data-autoplay")}${addAttribute(speed, "data-speed")}${addAttribute(productsItems.length, "data-count")} data-astro-cid-lulxuszt> ${productsItems.length === 0 ? renderTemplate`<div class="w-full py-10 flex items-center justify-center" data-astro-cid-lulxuszt> <p class="text-white text-center text-lg md:text-xl font-semibold" data-astro-cid-lulxuszt>No hay contenido disponible</p> </div>` : renderTemplate`<div class="swiper-container" data-astro-cid-lulxuszt> <div class="swiper-wrapper" data-astro-cid-lulxuszt> ${itemsToRender.map((product) => renderTemplate`<div class="swiper-slide" data-astro-cid-lulxuszt> <div class="product-card rounded-[22.02px] border"${addAttribute(`background-color: ${product.background_color || "#F08C00"}; border-color: ${product.boder_color || "#F08C00"}`, "style")} data-astro-cid-lulxuszt> ${product.isnew === true && renderTemplate`<div class="new-tag" data-astro-cid-lulxuszt> <img${addAttribute(
    currentLang === "es" ? "https://snack.yummiespromociones.com/SnacksyummiesAssets/NUEVO.webp" : "https://snack.yummiespromociones.com/SnacksyummiesAssets/NEW.webp",
    "src"
  )}${addAttribute(currentLang === "es" ? "Nuevo" : "New", "alt")} class="new-tag-image" data-astro-cid-lulxuszt> </div>`} <div class="product-image-container" data-astro-cid-lulxuszt> ${renderComponent($$result, "LazyImage", $$LazyImage, { "src": product.imageMobile || product.image, "alt": product.name, "class": "product-image  md:mt-[0px] -mt-[35px]", "width": 300, "height": 400, "data-astro-cid-lulxuszt": true })} </div> <div class="absolute bottom-0 left-0" data-astro-cid-lulxuszt> <p class="product-name whitespace-nowrap pb-[12px]"${addAttribute(`color: ${product.text_color || "#10b981"}`, "style")} data-astro-cid-lulxuszt> ${product.name} </p> <a${addAttribute(`/${currentLang}/${currentLang === "es" ? "productos" : "products"}/${product.id}`, "href")}${addAttribute(`background: radial-gradient(${product.color_button || "#FF8E52"}, ${product.second_color_button || "#FF4400"} 0%, ${product.color_button || "#FF8E52"} 100%);`, "style")} class="btn-view flex w-full h-[54px] text-[22.02px]  justify-center items-center shrink-0 rounded border-[0.1px] text-white font-title hover:shadow-lg" data-no-swipe="true" data-no-animation="true" data-astro-reload="false" data-astro-cid-lulxuszt> ${currentTexts.viewMore} </a> </div> </div> </div>`)} </div> <!-- Navegación --> ${productsItems.length > 1 && renderTemplate`<div class="carousel-navigation" data-astro-cid-lulxuszt> <button class="swiper-button-prev" data-astro-cid-lulxuszt> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-lulxuszt> <path d="M3.99976 11.9998H19.9997" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-lulxuszt></path> <path d="M8.99973 17C8.99973 17 3.99978 13.3176 3.99976 12C3.99975 10.6824 8.99976 7 8.99976 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-lulxuszt></path> </svg> </button> <button class="swiper-button-next" data-astro-cid-lulxuszt> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-lulxuszt> <path d="M20.0002 11.9998H4.00026" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-lulxuszt></path> <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0003 10.6824 15.0002 7 15.0002 7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-lulxuszt></path> </svg> </button> </div>`} </div>`} </div>  ${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/ProductsCarousel/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/ProductsCarousel/index.astro", void 0);

export { $$Index as $ };
