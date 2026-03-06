import { g as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, k as renderScript, a as renderTemplate, r as renderComponent } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { t } from './i18n_BuYowHj0.mjs';
import { $ as $$MainLayout, a as $$LazyImage } from './MainLayout_CEv0P3ec.mjs';
import 'clsx';
/* empty css                         */

const title = "Jurados";
const description = "Conoce a nuestros jurados internacionales";
const meta = {"title":"Jurados | Ziba's","description":"Conoce a los jurados internacionales de Ziba's"};
const countries = [{"id":"guatemala","name":"Guatemala","active":true},{"id":"honduras","name":"Honduras","active":true},{"id":"el_salvador","name":"El Salvador","active":true},{"id":"republica_dominicana","name":"República Dominicana","active":true},{"id":"costa_rica","name":"Costa Rica","active":true}];
const jurors = {"guatemala":[{"name":"Kike del Cid","title":"Cantante y Creador de Contenido","bio":"Cantante, creador de contenido, presentador y modelo guatemalteco. Destaca por su estilo auténtico y versátil.","image":"https://snack.yummiespromociones.com/zibas/Kike_del_Cid.webp","instagram":"kike.delcid","instagramLink":"https://instagram.com/kike.delcid","followers":"201,422"}],"honduras":[{"name":"Jennifer Girón","title":"Comunicadora y Creadora de Contenido","bio":"Comunicadora, creadora de contenido y especialista en producción audiovisual hondureña. Destaca por su enfoque estético en la creación de videos.","image":"https://snack.yummiespromociones.com/zibas/Jennifer_Giron.webp","instagram":"jennifergiron_","instagramLink":"https://instagram.com/jennifergiron_","followers":"423,000"}],"el_salvador":[{"name":"Ana Ludada","title":"Cantante y Creadora de Contenido","bio":"Cantante, compositora, creadora de contenido y modelo salvadoreña. Su propuesta combina pop urbano con autenticidad visual.","image":"https://snack.yummiespromociones.com/zibas/Analu_Dada.webp","instagram":"analudada","instagramLink":"https://instagram.com/analudada","followers":"338,000"}],"republica_dominicana":[{"name":"Paloma de la Cruz","title":"Artista Visual y Creadora de Contenido","bio":"Artista visual, escritora, creadora de contenido y diseñadora dominicana. Su trabajo mezcla arte, estilo y crecimiento personal.","image":"https://snack.yummiespromociones.com/zibas/Paloma_de_la_Cruz.webp","instagram":"palomadelacruz","instagramLink":"https://instagram.com/palomadelacruz","followers":"218,000"}],"costa_rica":[{"name":"Emily Salas","title":"Creadora de Contenido de Moda","bio":"Creadora de contenido costarricense especializada en moda, que combina su pasión por la publicidad con un enfoque creativo para producir contenido visualmente atractivo.","image":"https://snack.yummiespromociones.com/zibas/Emily_Salas.webp","instagram":"emii_salas30","instagramLink":"https://instagram.com/emii_salas30","followers":"233,000"}]};
const juradosData = {
  title,
  description,
  meta,
  countries,
  jurors,
};

const $$Astro$1 = createAstro("https://taqueritos.com");
const $$PixelGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PixelGrid;
  const {
    width = void 0,
    height = void 0,
    pixelSize = 14,
    density = 0.3,
    // aún más espacios transparentes por defecto
    introDuration = 400,
    // intro rápida
    loopInterval = 300,
    // cambios más constantes
    mutateAmount = 30,
    // muy pocos cuadros visibles a la vez
    background = "#FDE820",
    palette = [
      "#FC4238",
      // red
      "#FFFFFF",
      // white
      "#5B3F2E",
      // brown
      "#0167F7",
      // blue
      "#10b981",
      // green
      "#FD6600",
      // orange
      "#FDE820",
      // yellow
      "#FF4DFF"
      // pink
    ],
    class: className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative inline-block ${className}`, "class")} data-pixel-grid${addAttribute(`background:${background};`, "style")}${addAttribute(JSON.stringify({ pixelSize, density, introDuration, loopInterval, mutateAmount, palette, width, height }), "data-config")} data-astro-cid-zuivjo5q> <canvas class="block"${addAttribute(width, "width")}${addAttribute(height, "height")} data-astro-cid-zuivjo5q></canvas> </div>  ${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/atoms/PixelGrid.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/atoms/PixelGrid.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://taqueritos.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang = "es", headerColor } = Astro2.props;
  const { countries, jurors } = juradosData;
  const allJurors = countries.flatMap(
    (country) => jurors[country.id]?.map((juror) => ({
      ...juror,
      countryId: country.id,
      countryName: country.name
    })) || []
  );
  const socialMedia = t("social_media", { namespace: "common", locale: lang });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": juradosData.meta.title, "description": juradosData.meta.description, "headerColors": headerColor }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="py-16 bg-blue h-full w-full"> <div class="container mx-auto px-4"> ', ' <!-- Swiper styles and script (CDN) --> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"> <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"><\/script> <!-- Jurors Carousel --> <div class="relative"> <div class="swiper-container jurors-carousel"> <div class="swiper-wrapper"> ', ` </div> <!-- Controls --> <div class="swiper-button-next"></div> <div class="swiper-button-prev"></div> <div class="swiper-pagination"></div> </div> </div> <script>
      function initJurorsCarousel() {
        const el = document.querySelector('.swiper-container.jurors-carousel');
        if (!el) {
          return;
        }
        
        // Check if Swiper is available
        if (typeof Swiper === 'undefined') {
          setTimeout(initJurorsCarousel, 100);
          return;
        }

        try {
          const swiper = new Swiper('.swiper-container.jurors-carousel', {
            loop: true, // Enable loop for continuous navigation
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: { 
              delay: 5000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            },
            pagination: { 
              el: '.jurors-carousel .swiper-pagination', 
              clickable: true,
              dynamicBullets: true
            },
            navigation: { 
              nextEl: '.jurors-carousel .swiper-button-next', 
              prevEl: '.jurors-carousel .swiper-button-prev' 
            },
            breakpoints: {
              768: { 
                slidesPerView: 1,
                spaceBetween: 30
              },
            },
            on: {
              init: function () {
                // Force show navigation buttons
                const nextBtn = document.querySelector('.jurors-carousel .swiper-button-next');
                const prevBtn = document.querySelector('.jurors-carousel .swiper-button-prev');
                if (nextBtn) nextBtn.style.display = 'flex';
                if (prevBtn) prevBtn.style.display = 'flex';
              }
            }
          });
          
          // Force update after initialization
          setTimeout(() => {
            swiper.update();
          }, 100);
          
        } catch (error) {}
      }

      // Try multiple initialization methods
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initJurorsCarousel);
      } else {
        initJurorsCarousel();
      }
      
      // Also try on window load
      window.addEventListener('load', initJurorsCarousel);
      
      // For Astro page transitions
      document.addEventListener('astro:page-load', initJurorsCarousel);
    <\/script>  </div> </section> `])), maybeRenderHead(), renderTemplate`<div class="text-center mb-16 relative z-20 overflow-hidden"> <div class="absolute left-0 top-0 w-[100%] h-[100%] -z-10 pointer-events-none -ml-[250px]"> ${renderComponent($$result2, "PixelGrid", $$PixelGrid, { "pixelSize": 20, "density": 0.7, "background": "none", "introDuration": 800, "loopInterval": 1100, "mutateAmount": 50 })} </div> <h2 class="text-3xl md:text-4xl italic font-bold mb-4 text-white relative z-10"> ${juradosData.description} </h2> ${renderTemplate`<h1 class="text-6xl md:text-9xl italic font-bold mb-4 text-white relative z-10 flex items-center justify-center"> <span class="font-title pl-2 relative z-10">${juradosData.title}</span> </h1>`} </div>`, allJurors.map((person) => renderTemplate`<div class="swiper-slide px-2 md:px-4 py-4"> <div class="bg-[#005ada] rounded-[30px] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 md:px-12 py-8 text-white relative"> <!-- Country Flag Emoji --> <div class="absolute bottom-4 right-4 text-4xl md:text-5xl"> ${person.countryId === "guatemala" && "\u{1F1EC}\u{1F1F9}"} ${person.countryId === "honduras" && "\u{1F1ED}\u{1F1F3}"} ${person.countryId === "el_salvador" && "\u{1F1F8}\u{1F1FB}"} ${person.countryId === "republica_dominicana" && "\u{1F1E9}\u{1F1F4}"} ${person.countryId === "costa_rica" && "\u{1F1E8}\u{1F1F7}"} </div> <div class="shrink-0 size-[220px] md:size-[300px] rounded-full bg-cover bg-center"${addAttribute(`background-image: url('${person.image}')`, "style")}></div> <div class="flex-1 w-full text-center md:text-left"> <div class="uppercase"> <h3 class="font-title font-black text-3xl md:text-[38px] leading-tight">${person.name}</h3> <p class="font-title font-bold text-lg md:text-xl mt-3 max-w-[44ch]">${person.title}</p> </div> <p class="mt-4 text-base md:text-lg max-w-[60ch] opacity-95">${person.bio}</p>  <div class="mt-4"> <div class="flex items-center justify-center md:justify-start gap-2"> <span class="font-title font-black text-lg md:text-xl text-white">Seguidores:</span> <span class="font-title font-bold text-lg md:text-xl text-yellow-300">${person.followers}</span> </div> </div> <div class="mt-6"> <div class="uppercase font-title font-black text-lg md:text-xl mb-4">Redes sociales:</div> <div class="flex flex-col gap-4 items-center md:items-start"> <a${addAttribute(person.instagramLink, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 group"> ${renderComponent($$result2, "LazyImage", $$LazyImage, { "src": socialMedia?.instagram?.iconUrl, "alt": socialMedia?.instagram?.alt || "Instagram", "class": "w-5 h-5 md:w-6 md:h-6", "color": "white", "loading": "lazy" })} <span class="font-title italic font-bold text-xl group-hover:underline">@${person.instagram}</span> </a> </div> </div> </div> </div> </div>`)) })}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Jurados/index.astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Jurados/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, $$url as url };
