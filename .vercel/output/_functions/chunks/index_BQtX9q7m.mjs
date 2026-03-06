import { g as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, h as renderTransition, a as renderTemplate, i as fade, r as renderComponent, j as defineScriptVars, F as Fragment, s as slide, u as unescapeHTML } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { $ as $$Breadcrumb } from './Breadcrumb_Csd8I6Iz.mjs';
import 'clsx';
import { g as getLocale } from './i18n_BuYowHj0.mjs';
/* empty css                            */
import { a as $$LazyImage } from './MainLayout_CEv0P3ec.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, TelegramShareButton, TelegramIcon } from 'react-share';
import { $ as $$ShareButton } from './ShareButton_CXWVos99.mjs';
/* empty css                            */

const $$Astro$4 = createAstro("https://taqueritos.com");
const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const {
    image,
    title,
    id,
    slug,
    textColor = "text-blue-900",
    iconColor = "text-blue-900",
    hoverImage = image,
    currentLang = getLocale()
  } = Astro2.props;
  const blogLink = `/${currentLang}/blog/${slug || id}`;
  const viewBlogText = currentLang === "es" ? "Leer m\xE1s" : "Read more";
  return renderTemplate`${maybeRenderHead()}<div class="news-card" data-astro-cid-fkyubztb> <a${addAttribute(blogLink, "href")} class="block group relative overflow-hidden rounded-[1rem]" style="aspect-ratio: 9/16;" data-astro-cid-fkyubztb> <img${addAttribute(image || "/images/blog/placeholder.jpg", "src")}${addAttribute(title, "alt")} class="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105" loading="lazy" data-astro-cid-fkyubztb${addAttribute(renderTransition($$result, "4nsgkaya", "", `blog-image-${id}`), "data-astro-transition-scope")}> <!-- Overlay oscuro base que aumenta en hover --> <div class="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" data-astro-cid-fkyubztb></div> <!-- Contenido inferior --> <div class="absolute inset-x-0 bottom-0 p-3 z-10 flex flex-col gap-2" data-astro-cid-fkyubztb> <h3 class="text-white font-bold text-sm md:text-base leading-tight" data-astro-cid-fkyubztb>${title}</h3> <div data-astro-cid-fkyubztb> <span class="inline-block border-2 border-white bg-transparent text-white py-1.5 px-4 rounded-md text-center text-xs md:text-sm font-medium" data-astro-cid-fkyubztb> ${viewBlogText} </span> </div> </div> </a> </div> `;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/blog/BlogCard.astro", "self");

const $$Astro$3 = createAstro("https://taqueritos.com");
const $$BlogDetailSkeleton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BlogDetailSkeleton;
  const { key } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="animate-pulse"${addAttribute(key, "key")}${addAttribute(renderTransition($$result, "mw4mewqc", fade({ duration: "0.5s" }), ""), "data-astro-transition-scope")}> <div class="h-8 w-1/2 bg-gray-200 rounded mb-6"></div> <div class="h-4 w-full bg-gray-200 rounded mb-2"></div> <div class="h-4 w-5/6 bg-gray-200 rounded mb-2"></div> <div class="h-4 w-2/3 bg-gray-200 rounded mb-6"></div> <div class="h-4 w-full bg-gray-200 rounded mb-2"></div> <div class="h-4 w-full bg-gray-200 rounded mb-2"></div> <div class="h-4 w-5/6 bg-gray-200 rounded mb-2"></div> <div class="h-4 w-2/3 bg-gray-200 rounded mb-6"></div> <div class="h-8 w-1/3 bg-gray-200 rounded mb-4"></div> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"> ${[...Array(4)].map((_, i) => renderTemplate`<div${addAttribute(i.toString(), "key")} class="aspect-square bg-gray-200 rounded"></div>`)} </div> </div>`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/blog/BlogDetailSkeleton.astro", "self");

const SocialShare = ({
  url,
  title,
  description = "",
  hashtags = [],
  iconSize = 32,
  round = true,
  className = "",
  buttonClassName = "",
  platforms = ["facebook", "twitter", "whatsapp", "telegram"],
  labels = {
    facebook: "Facebook",
    twitter: "Twitter",
    whatsapp: "WhatsApp",
    telegram: "Telegram"
  },
  showLabels = false
}) => {
  const renderButtons = () => {
    const buttons = [];
    if (platforms.includes("facebook")) {
      buttons.push(
        /* @__PURE__ */ jsx("div", { className: `inline-block ${buttonClassName}`, children: /* @__PURE__ */ jsxs(
          FacebookShareButton,
          {
            url,
            quote: `${title}
${description}`,
            hashtag: hashtags.length > 0 ? `#${hashtags[0]}` : void 0,
            children: [
              /* @__PURE__ */ jsx(FacebookIcon, { size: iconSize, round }),
              showLabels && /* @__PURE__ */ jsx("span", { className: "block text-xs mt-1", children: labels.facebook })
            ]
          }
        ) }, "facebook")
      );
    }
    if (platforms.includes("twitter")) {
      buttons.push(
        /* @__PURE__ */ jsx("div", { className: `inline-block ${buttonClassName}`, children: /* @__PURE__ */ jsxs(TwitterShareButton, { url, title, hashtags, children: [
          /* @__PURE__ */ jsx(TwitterIcon, { size: iconSize, round }),
          showLabels && /* @__PURE__ */ jsx("span", { className: "block text-xs mt-1", children: labels.twitter })
        ] }) }, "twitter")
      );
    }
    if (platforms.includes("whatsapp")) {
      buttons.push(
        /* @__PURE__ */ jsx("div", { className: `inline-block ${buttonClassName}`, children: /* @__PURE__ */ jsxs(WhatsappShareButton, { url, title: `${title}
${description}`, children: [
          /* @__PURE__ */ jsx(WhatsappIcon, { size: iconSize, round }),
          showLabels && /* @__PURE__ */ jsx("span", { className: "block text-xs mt-1", children: labels.whatsapp })
        ] }) }, "whatsapp")
      );
    }
    if (platforms.includes("telegram")) {
      buttons.push(
        /* @__PURE__ */ jsx("div", { className: `inline-block ${buttonClassName}`, children: /* @__PURE__ */ jsxs(TelegramShareButton, { url, title: `${title}
${description}`, children: [
          /* @__PURE__ */ jsx(TelegramIcon, { size: iconSize, round }),
          showLabels && /* @__PURE__ */ jsx("span", { className: "block text-xs mt-1", children: labels.telegram })
        ] }) }, "telegram")
      );
    }
    return buttons;
  };
  return /* @__PURE__ */ jsx("div", { className: `social-share flex gap-2 items-center ${className}`, children: renderButtons() });
};

const $$Astro$2 = createAstro("https://taqueritos.com");
const $$SocialShare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialShare;
  const {
    url,
    title,
    description = "",
    hashtags = [],
    iconSize = 32,
    round = true,
    className = "",
    buttonClassName = "",
    platforms = ["facebook", "twitter", "whatsapp", "telegram"],
    labels,
    showLabels = false
  } = Astro2.props;
  const shareUrl = url || Astro2.url.href;
  const currentLang = Astro2.url.pathname.split("/")[1] || "es";
  const defaultLabels = {
    es: {
      facebook: "Facebook",
      twitter: "Twitter",
      whatsapp: "WhatsApp",
      telegram: "Telegram"
    },
    en: {
      facebook: "Facebook",
      twitter: "Twitter",
      whatsapp: "WhatsApp",
      telegram: "Telegram"
    }
  };
  const finalLabels = labels || defaultLabels[currentLang];
  return renderTemplate`${renderComponent($$result, "SocialShareReact", SocialShare, { "client:load": true, "url": shareUrl, "title": title, "description": description, "hashtags": hashtags, "iconSize": iconSize, "round": round, "className": className, "buttonClassName": buttonClassName, "platforms": platforms, "labels": finalLabels, "showLabels": showLabels, "client:component-hydration": "load", "client:component-path": "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/SocialShare.jsx", "client:component-export": "default" })}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/SocialShare.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://taqueritos.com");
const $$ShareModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ShareModal;
  const locale = getLocale(Astro2.url);
  const {
    id = "shareModal",
    url,
    title = "Taqueritos",
    description = "",
    hashtags = [],
    platforms = ["facebook", "twitter", "whatsapp", "telegram"],
    showLabels = false,
    iconSize = 40,
    round = true,
    openTextEs = "Compartir en redes sociales",
    openTextEn = "Share on social media",
    acceptTextEs = "Aceptar",
    acceptTextEn = "Accept"
  } = Astro2.props;
  const texts = {
    es: {
      header: "Comparte esta receta",
      helper: openTextEs,
      accept: acceptTextEs
    },
    en: {
      header: "Share this recipe",
      helper: openTextEn,
      accept: acceptTextEn
    }
  };
  const t = texts[locale] || texts.es;
  return renderTemplate(_a || (_a = __template(["", "<div", ' class="fixed inset-0 flex items-center justify-center z-50 hidden"> <div class="modal-backdrop fixed inset-0 bg-black/60"></div> <div class="bg-orange text-white rounded-lg p-6 md:p-8 max-w-lg mx-4 relative z-10 transform transition-all shadow-xl"> <!-- Close X --> <button type="button" class="modal-close absolute top-3 right-3 text-white hover:opacity-80" aria-label="Close"> <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Title --> <div class="flex justify-center items-center mb-3"> <h3 class="md:text-3xl text-2xl font-bold font-title text-white"', ">", '</h3> </div> <!-- Helper text --> <p class="text-white/90 text-center mb-6"', ">", '</p> <!-- Social share buttons --> <div class="flex justify-center"> ', ' </div> <!-- Accept button --> <div class="flex justify-center mt-6"> <button type="button" class="modal-close px-6 py-2 bg-white text-orange rounded-full font-bold hover:opacity-90 transition-all"> ', " </button> </div> </div> </div> <script>(function(){", "\n  function initShareModal(modalId){\n    const modal = document.getElementById(modalId);\n    if(!modal) return;\n    const closes = modal.querySelectorAll('.modal-close');\n    const backdrop = modal.querySelector('.modal-backdrop');\n\n    function closeModal(){\n      modal.classList.add('hidden');\n      document.body.classList.remove('overflow-hidden');\n    }\n    closes.forEach(btn=>btn.addEventListener('click', closeModal));\n    if(backdrop) backdrop.addEventListener('click', closeModal);\n    document.addEventListener('keydown', (e)=>{\n      if(e.key==='Escape' && !modal.classList.contains('hidden')) closeModal();\n    });\n  }\n\n  // Public API: window.showShareModal(id)\n  if(typeof window!=='undefined'){\n    window.showShareModal = function(modalId){\n      const id = modalId || 'shareModal';\n      const el = document.getElementById(id);\n      if(!el) return;\n      el.classList.remove('hidden');\n      document.body.classList.add('overflow-hidden');\n    }\n  }\n\n  document.addEventListener('DOMContentLoaded', ()=>{\n    initShareModal(modalId);\n  });\n  document.addEventListener('astro:page-load', ()=>{\n    initShareModal(modalId);\n  });\n})();<\/script>"])), maybeRenderHead(), addAttribute(id, "id"), addAttribute(`${id}-title`, "id"), t.header, addAttribute(`${id}-helper`, "id"), t.helper, renderComponent($$result, "SocialShare", $$SocialShare, { "url": url, "title": title, "description": description, "hashtags": hashtags, "platforms": platforms, "showLabels": showLabels, "iconSize": iconSize, "round": round, "className": "flex flex-wrap gap-4 justify-center", "buttonClassName": "bg-white text-orange font-bold px-3 py-2 rounded-full hover:opacity-90 transition" }), t.accept, defineScriptVars({ modalId: id }));
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/ShareModal.astro", void 0);

const $$Astro = createAstro("https://taqueritos.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { blogPost, currentLang, allBlogPosts = [], isLoading = false } = Astro2.props;
  const suggestedPosts = allBlogPosts.filter((post) => post.id !== blogPost.id).slice(0, 4);
  const readMoreTitle = currentLang === "es" ? "Otras Noticias" : "Other News";
  return renderTemplate`${maybeRenderHead()}<div style="background: radial-gradient(circle at 50% 50%, #2c0b0b 0%, #150404 80%);" class="pb-0 overflow-hidden" data-astro-cid-i7y6zw4e> <div class="w-full max-w-6xl mx-auto px-4 py-16" data-astro-cid-i7y6zw4e> ${isLoading ? renderTemplate`${renderComponent($$result, "BlogDetailSkeleton", $$BlogDetailSkeleton, { "data-astro-cid-i7y6zw4e": true })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-i7y6zw4e": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "bgColor": "bg-transparent", "textColor": "text-white", "hoverColor": "hover:text-white", "data-astro-cid-i7y6zw4e": true })} <div class="w-full mx-auto my-6" data-astro-cid-i7y6zw4e> <div class="mb-8" data-astro-cid-i7y6zw4e> <h1 class="font-title text-9xl md:text-5xl font-bold text-white mb-4 italic text-center" data-astro-cid-i7y6zw4e${addAttribute(renderTransition($$result2, "yxnekybv", "", `blog-title-${blogPost.id}`), "data-astro-transition-scope")}>${blogPost.title}</h1> </div> <div class="blog-image-container w-full mb-4 rounded-lg overflow-hidden text-center flex justify-center" data-astro-cid-i7y6zw4e${addAttribute(renderTransition($$result2, "afqh5xtb", slide({ duration: "0.3s" }), ""), "data-astro-transition-scope")}> ${renderComponent($$result2, "LazyImage", $$LazyImage, { "src": blogPost.image, "alt": blogPost.title, "class": "w-full h-auto rounded-lg max-w-3xl", "loading": "lazy", "data-astro-cid-i7y6zw4e": true })} </div> <!-- Share button under main image --> <div class="w-full mb-8 flex justify-center" data-astro-cid-i7y6zw4e> ${renderComponent($$result2, "ShareButton", $$ShareButton, { "modalId": "shareModal-blog", "data-astro-cid-i7y6zw4e": true })} </div> <div class="blog-content prose prose-lg max-w-none my-8 text-md md:text-lg text-white" data-astro-cid-i7y6zw4e${addAttribute(renderTransition($$result2, "y53xpnne", fade({ duration: "0.5s" }), ""), "data-astro-transition-scope")}> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(blogPost.content)}` })} </div> </div> ${suggestedPosts.length > 0 && renderTemplate`<section class="mt-16 mb-0 pb-8" data-astro-cid-i7y6zw4e${addAttribute(renderTransition($$result2, "yfpkqyse", fade({ duration: "0.7s" }), ""), "data-astro-transition-scope")}> <h2 class="text-white font-title text-4xl md:text-6xl font-bold text-left mb-8" data-astro-cid-i7y6zw4e>${readMoreTitle}</h2> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto max-w-7xl" data-astro-cid-i7y6zw4e> ${suggestedPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "image": post.image, "title": post.title, "id": post.id, "slug": post.slug || post.id, "data-astro-cid-i7y6zw4e": true })}`)} </div> </section>`}` })}`} </div> </div> <!-- Share Modal instance for blog --> ${renderComponent($$result, "ShareModal", $$ShareModal, { "id": "shareModal-blog", "url": Astro2.url.href, "title": blogPost.title, "description": "", "hashtags": [], "showLabels": false, "iconSize": 40, "round": true, "openTextEs": "Comparte esta noticia en tus redes sociales", "openTextEn": "Share this news on your social networks", "acceptTextEs": "Aceptar", "acceptTextEn": "Accept", "data-astro-cid-i7y6zw4e": true })} `;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Blog/Detail/index.astro", "self");

export { $$Index as $ };
