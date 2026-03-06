import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { t, g as getLocale } from './i18n_BuYowHj0.mjs';
import { $ as $$Index$1 } from './index_Dk6j8Cdq.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const currentLang = getLocale();
  const products = t("items", { namespace: "products", locale: currentLang }) || [];
  const homeAssets = t("home", { namespace: "products", locale: currentLang }) || {};
  return renderTemplate`${maybeRenderHead()}<section class="w-full min-h-screen bg-brown py-16"> <div class="container mx-auto px-4"> <div class="title mb-4 text-center mt-16"> ${homeAssets.title && renderTemplate`<p>${homeAssets.title}</p>`} ${homeAssets.subtitle && renderTemplate`<p>${homeAssets.subtitle}</p>`} </div> ${renderComponent($$result, "ProductsCarousel", $$Index$1, { "products": products, "color": "white", "autoplay": true, "speed": 4e3, "slidesPerView": 3, "spaceBetween": 30, "loop": true, "className": "max-w-7xl mx-auto mb-8" })} </div> </section>`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Products/index.astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Products/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, $$url as url };
