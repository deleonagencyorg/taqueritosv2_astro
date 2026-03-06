import { c as createComponent, a as renderTemplate, j as defineScriptVars, b as addAttribute, m as maybeRenderHead, g as createAstro, r as renderComponent, k as renderScript, l as spreadAttributes, F as Fragment, n as renderSlot, u as unescapeHTML, o as renderHead } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import 'clsx';
import { t } from './i18n_BuYowHj0.mjs';
/* empty css                              */
/* empty css                            */

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$GoogleTagManager = createComponent(($$result, $$props, $$slots) => {
  const gtmId = "GTM-XXXXXX";
  {
    console.warn("GTM ID no está configurado correctamente. Verifica tu archivo .env");
  }
  return renderTemplate(_a$3 || (_a$3 = __template$3(["<!-- Google Tag Manager (noscript) -->", "<noscript><iframe", ' height="0" width="0" style="display:none;visibility:hidden">\n  </iframe></noscript><!-- Google Tag Manager --><script>(function(){', "\n  if (gtmId && gtmId !== 'GTM-XXXXXX') {\n    (function(w,d,s,l,i){\n      w[l]=w[l]||[];\n      w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n      var f=d.getElementsByTagName(s)[0],\n      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n      j.async=true;\n      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;\n      f.parentNode.insertBefore(j,f);\n    })(window,document,'script','dataLayer',gtmId);\n  } else {\n    console.warn('GTM no inicializado: ID no válido');\n  }\n})();</script>"])), maybeRenderHead(), addAttribute(`https://www.googletagmanager.com/ns.html?id=${gtmId}`, "src"), defineScriptVars({ gtmId }));
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/GoogleTagManager.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$MetaPixel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<script>\n  !function(f,b,e,v,n,t,s)\n  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n  n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n  n.queue=[];t=b.createElement(e);t.async=!0;\n  t.src=v;s=b.getElementsByTagName(e)[0];\n  s.parentNode.insertBefore(t,s)}(window, document,'script',\n  'https://connect.facebook.net/en_US/fbevents.js');\n  fbq('init', '659088449824719');\n  fbq('track', 'PageView');\n<\/script> ", '<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=659088449824719&ev=PageView&noscript=1"></noscript>'])), maybeRenderHead());
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/MetaPixel.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$TikTokPixel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1([`<script>
  !function (w, d, t) {
    w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
    var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
    ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
    ttq.load('D6G5I5BC77UAI8907R2G');
    ttq.page();
  }(window, document, 'ttq');
<\/script>`])));
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/TikTokPixel.astro", void 0);

const $$Favicon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Favicon --><link rel="icon" type="image/png" href="https://snack.yummiespromociones.com/SnacksyummiesAssets/taqueritosfavicon.png"><!-- Apple Touch Icon --><link rel="apple-touch-icon" href="https://snack.yummiespromociones.com/SnacksyummiesAssets/taqueritosfavicon.png"><!-- Android Chrome Icons --><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#230405"><!-- Progressive Web App / Mobile meta --><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><!-- Microsoft Tiles --><meta name="msapplication-TileColor" content="#230405"><meta name="msapplication-config" content="/browserconfig.xml"><!-- Safari Pinned Tab --><link rel="mask-icon" href="/safari-pinned-tab.svg" color="#230405"><!-- Optional: theme-color per color scheme --><meta name="theme-color" media="(prefers-color-scheme: light)" content="#230405"><meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0a0a0a">`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/Favicon.astro", void 0);

const $$Astro$b = createAstro("https://taqueritos.com");
const $$LanguageSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$LanguageSwitcher;
  const { pathname } = Astro2.url;
  const currentPath = pathname;
  const { activeLocale, headerColorConfig } = Astro2.props;
  const routeTranslations = {
    "recetas": "recipes",
    "productos": "products",
    "noticias": "news",
    "contacto": "contact",
    "marcas": "brands",
    "nosotros": "about-us",
    "blog": "blog",
    // Retos / Challenges (lista)
    "retos-torneos": "challenges-tournaments",
    "retos": "challenges"
  };
  const detailSections = {
    "productos": "products",
    "recetas": "recipes",
    "blog": "blog",
    "noticias": "news"
  };
  const pathParts = currentPath.split("/").filter(Boolean);
  const currentLocale = pathParts[0] || "es";
  pathParts.slice(1).join("/");
  const getTranslatedPath = (targetLocale) => {
    const pathParts2 = currentPath.split("/").filter(Boolean);
    const currentRoute2 = pathParts2.slice(1).join("/");
    if (pathParts2.length <= 1) return `/${targetLocale}`;
    if (currentRoute2.startsWith("retos-torneos") && targetLocale === "en") {
      return `/${targetLocale}`;
    }
    if (currentRoute2.startsWith("challenges-tournaments") && targetLocale === "es") {
      return `/${targetLocale}`;
    }
    if (pathParts2.length >= 3) {
      const section = pathParts2[1];
      const reverseDetail = {};
      for (const [esSlug, enSlug] of Object.entries(detailSections)) {
        reverseDetail[enSlug] = esSlug;
      }
      const esSection = currentLocale === "es" ? section : reverseDetail[section] ?? section;
      const enSection = detailSections[esSection] ?? esSection;
      if (esSection in detailSections) {
        const targetSection = targetLocale === "es" ? esSection : enSection;
        return `/${targetLocale}/${targetSection}`;
      }
    }
    const sortedTranslations = Object.entries(routeTranslations).sort(
      ([a], [b]) => b.length - a.length
    );
    let translatedRoute = currentRoute2;
    for (const [esRoute, enRoute] of sortedTranslations) {
      if (currentLocale === "es" && currentRoute2.startsWith(esRoute)) {
        translatedRoute = currentRoute2.replace(esRoute, enRoute);
        break;
      }
      if (currentLocale === "en" && currentRoute2.startsWith(enRoute)) {
        translatedRoute = currentRoute2.replace(enRoute, esRoute);
        break;
      }
    }
    console.log("[LanguageSwitcher] change lang", {
      currentPath,
      currentLocale,
      targetLocale,
      currentRoute: currentRoute2,
      translatedRoute
    });
    return `/${targetLocale}/${translatedRoute}`;
  };
  const esUrl = activeLocale === "es" ? currentPath : getTranslatedPath("es");
  const enUrl = activeLocale === "en" ? currentPath : getTranslatedPath("en");
  headerColorConfig?.textColor || "text-white";
  headerColorConfig?.hoverTextColor || "hover:text-yellow-300";
  const textColorValue = headerColorConfig?.isSpecialBackground ? "black" : headerColorConfig?.textColor?.replace("text-", "") || "white";
  return renderTemplate`${maybeRenderHead()}<div class="font-title language-switcher flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2" data-astro-cid-6ggxaj6s> <div class="flex items-center space-x-2" data-astro-cid-6ggxaj6s> ${activeLocale === "es" && renderTemplate`<a${addAttribute(enUrl, "href")}${addAttribute(`font-title language-link flex items-center ${activeLocale === "es" ? "font-bold" : ""}`, "class")}${addAttribute(`color: ${textColorValue};`, "style")} title="English" data-lang="en" data-astro-cid-6ggxaj6s> <span data-astro-cid-6ggxaj6s>EN</span> </a>`} ${activeLocale === "en" && renderTemplate`<a${addAttribute(esUrl, "href")}${addAttribute(`language-link flex items-center ${activeLocale === "en" ? "font-bold" : ""}`, "class")}${addAttribute(`color: ${textColorValue};`, "style")} title="Español" data-lang="es" data-astro-cid-6ggxaj6s> <span data-astro-cid-6ggxaj6s>ES</span> </a>`} </div> </div> `;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/i18n/LanguageSwitcher.astro", void 0);

const S3_BASE_URL = "https://snack.yummiespromociones.com/snacksyummies";
const generalAssets = {
  coronaIcon: `${S3_BASE_URL}/corona.webp`
};
const logos = {
  principal: {
    // url: `${S3_BASE_ASSETS_URL}/zibas-logo-3.webp`,
    url: "/images/es/logoT.png",
    alt: "Snacks Yummies"
  }
};

const $$Astro$a = createAstro("https://taqueritos.com");
const $$Index$6 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index$6;
  const { currentLang, headerColorConfig } = Astro2.props;
  const { pathname } = Astro2.url;
  const currentPath = pathname;
  t("social_media", { namespace: "common", locale: currentLang });
  const rawMenuItems = t("menu_items", { namespace: "common", locale: currentLang });
  const menuItems = rawMenuItems.filter((item) => item.id !== "community" && item.id !== "taqueritos-gaming");
  const menuItemsFiltered = menuItems.filter((item) => item.id !== "games" || currentLang === "es");
  const contactHref = `/${currentLang}/${currentLang === "es" ? "contacto" : "contact"}`;
  const contactMenuItem = {
    id: "contact",
    text: t("contact_us", { namespace: "common", locale: currentLang }),
    href: contactHref
  };
  const menuItemsWithContact = [...menuItemsFiltered, contactMenuItem];
  const products = t("items", { namespace: "products", locale: currentLang });
  const games = t("games", { namespace: "common", locale: currentLang });
  return renderTemplate`<!-- Desktop Navigation -->${maybeRenderHead()}<nav class="fixed top-6 left-1/2 -translate-x-1/2 z-50 
         bg-[rgba(11,2,2,0.2)] backdrop-blur-sm 
         border border-white/20 rounded-[200px] 
         w-[95%] max-w-[1400px] shadow-lg transition-all duration-300"${addAttribute(currentLang, "data-current-lang")} data-astro-cid-ozism6nr> <div class="hidden md:flex items-center justify-center w-full py-2 md:py-2.5 lg:py-3 px-3 lg:px-6" data-astro-cid-ozism6nr> <!-- Logo --> <div class="flex-shrink-0 pr-2 lg:pr-12 xl:pr-20 flex items-center" data-astro-cid-ozism6nr> <a${addAttribute(`/${currentLang}/`, "href")} class="flex items-center" data-astro-cid-ozism6nr> <img${addAttribute(logos.principal.url, "src")}${addAttribute(logos.principal.alt, "alt")} class="h-8 lg:h-12 xl:h-14 w-auto" data-astro-cid-ozism6nr> </a> </div> <!-- Navigation Items - Center --> <!-- <div class="flex items-center justify-center flex-1 px-4 mx-auto">
    
    </div> --> <!-- Right Side - Language Switcher and Yummies One --> <div class="flex items-center space-x-0.5 md:space-x-1 lg:space-x-3 xl:space-x-5" data-astro-cid-ozism6nr> <div class="flex items-center space-x-0 md:space-x-0.5 lg:space-x-2 xl:space-x-4" id="desktop-menu-items" data-astro-cid-ozism6nr> ${menuItemsWithContact && menuItemsWithContact.map((item) => renderTemplate`<div class="relative group flex items-center" data-astro-cid-ozism6nr> <a${addAttribute(item.href, "href")}${addAttribute(item.id === "where-buy" ? "true" : void 0, "data-open-stockist")}${addAttribute(`${headerColorConfig.textColor} font-title text-[10px] lg:text-[14px] xl:text-[16px] uppercase font-medium transition-colors py-1.5 md:py-2 px-1 md:px-1.5 lg:px-2.5 xl:px-3 rounded-md flex items-center justify-center whitespace-nowrap ${!item.href.startsWith("#") && currentPath === item.href ? "bg-primary text-white" : ""}`, "class")}${addAttribute(`color: ${!item.href.startsWith("#") && currentPath === item.href ? "#FFFFFF" : headerColorConfig.textColor};`, "style")}${addAttribute(item.submenu || item.id === "games" ? "toggleSubmenu(this)" : void 0, "onclick")} data-astro-cid-ozism6nr> <span class="flex items-center justify-center text-center leading-tight" data-astro-cid-ozism6nr>${item.text}</span> ${(item.submenu || item.id === "games") && renderTemplate`<svg class="w-2.5 h-2.5 lg:w-4 lg:h-4 ml-0.5 lg:ml-1 fill-current" viewBox="0 0 20 20" data-astro-cid-ozism6nr><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" data-astro-cid-ozism6nr></path></svg>`} </a>  ${item.id === "products" ? renderTemplate`<div class="submenu absolute left-0 top-full mt-0 w-64 
                          bg-[rgba(11,2,2,0.85)] backdrop-blur-md 
                          border border-red-500/80 rounded-xl shadow-lg 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-all duration-300 pointer-events-none group-hover:pointer-events-auto open:opacity-100 open:visible open:pointer-events-auto z-[100]" data-astro-cid-ozism6nr> <div class="py-2" data-astro-cid-ozism6nr> ${products && products.map((product) => renderTemplate`<a${addAttribute(`/${currentLang}/${currentLang === "es" ? "productos" : "products"}/${product.id}`, "href")} class="block px-4 py-2 text-white hover:bg-white/10 transition-colors text-sm" data-no-swipe="true" data-no-animation="true" data-astro-cid-ozism6nr> ${product.name} </a>`)} </div> </div>` : null}  ${item.id === "games" ? renderTemplate`<div class="submenu absolute left-0 top-full mt-0 w-64 
                          bg-[rgba(11,2,2,0.85)] backdrop-blur-md 
                          border border-red-500/80 rounded-xl shadow-lg 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-all duration-300 pointer-events-none group-hover:pointer-events-auto open:opacity-100 open:visible open:pointer-events-auto z-[100]" data-astro-cid-ozism6nr> <div class="py-2" data-astro-cid-ozism6nr> ${games && games.map((game) => renderTemplate`<a${addAttribute(game.href, "href")} target="_blank" rel="noopener noreferrer" class="block px-4 py-2 text-white hover:bg-white/10 transition-colors text-sm" data-astro-cid-ozism6nr> ${game.name} </a>`)} </div> </div>` : null} </div>`)} </div> <!-- Language Switcher --> ${renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, { "activeLocale": currentLang, "headerColorConfig": headerColorConfig, "data-astro-cid-ozism6nr": true })} <!-- <div class="hidden md:flex">
        <SocialMediaIcons 
          currentLang={currentLang} 
          iconColor={headerColorConfig.isSpecialBackground ? 'black' : headerColorConfig.textColor.replace('text-', '')}
          centered={false} 
        />
      </div> --> <!-- Yummies One --> <!-- <a href="/yummies-one" class="flex items-center text-white hover:text-gray-300 uppercase text-sm font-medium">
        <span>Yummies One</span>
      </a> --> </div> <div class="pl-2 lg:pl-12 xl:pl-20 flex items-center gap-3" data-astro-cid-ozism6nr> ${currentLang === "es" && renderTemplate`<a href="https://www.challengermode.com/s/taqueritos/pages/laruta" target="_blank" rel="noopener noreferrer" class="px-[5px] bg-primary text-white rounded-[5px] h-[32px] md:h-[36px] lg:h-[42px] xl:h-[47px] flex items-center justify-center text-[9px] md:text-[10px] lg:text-[11px] xl:text-sm uppercase font-title leading-none" data-astro-cid-ozism6nr> <span class="flex items-center justify-center text-center whitespace-nowrap" data-astro-cid-ozism6nr>Taqueritos Gaming</span> </a>`} </div> </div> </nav> ${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/DesktopNavbar/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/DesktopNavbar/index.astro", void 0);

const $$Astro$9 = createAstro("https://taqueritos.com");
const $$Index$5 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$5;
  const { currentLang, headerColorConfig } = Astro2.props;
  const openMenuLabel = t("menu_labels.open_main_menu", { namespace: "common", locale: currentLang }) || "Open main menu";
  const textColor = headerColorConfig?.textColor || "text-white";
  const hoverTextColor = headerColorConfig?.hoverTextColor || "hover:text-gray-300";
  const hoverBackgroundColor = headerColorConfig?.hoverBackgroundColor || "hover:bg-blue-800";
  return renderTemplate`<!-- Mobile Menu Button (visible up to md, hidden on lg and up) -->${maybeRenderHead()}<div class="lg:hidden"> <button id="mobile-menu-button" type="button"${addAttribute(`inline-flex items-center justify-center p-2 rounded-md ${textColor} ${hoverTextColor} ${hoverBackgroundColor} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`, "class")} aria-expanded="false"${addAttribute(openMenuLabel, "aria-label")}> <span class="sr-only">${openMenuLabel}</span> <div id="menu-icon-container" class="w-8 h-8 flex items-center justify-center"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </div> </button> </div> ${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/MobileMenuButton/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/MobileMenuButton/index.astro", void 0);

function getOptimalSizes(context = "default") {
  switch (context) {
    case "hero":
      return "(max-width: 768px) 100vw, 100vw";
    case "banner":
      return "(max-width: 768px) 100vw, 100vw";
    case "thumbnail":
      return "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw";
    case "gallery":
      return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
    case "logo":
      return "(max-width: 640px) 50vw, 150px";
    case "icon":
      return "(max-width: 640px) 24px, 32px";
    default:
      return "(max-width: 768px) 100vw, 50vw";
  }
}
function shouldPrioritize(src, context = "default") {
  if (!src) return false;
  if (context === "hero" || context === "banner") {
    return true;
  }
  const criticalImages = [
    "mobilebanner.webp",
    "imagen-magiamicrobioma.webp",
    "imagen-postbioticos.webp"
  ];
  return criticalImages.some((img) => src.includes(img));
}

const $$Astro$8 = createAstro("https://taqueritos.com");
const $$LazyImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$LazyImage;
  function isSvgUrl(url) {
    if (!url) return false;
    return url.toLowerCase().endsWith(".svg");
  }
  const {
    src,
    alt,
    width,
    height,
    class: className,
    color,
    context = "default",
    priority: explicitPriority,
    sizes: explicitSizes,
    decorative = false,
    ...rest
  } = Astro2.props;
  if (!src) return null;
  let optimizedAlt = alt;
  if (decorative) {
    optimizedAlt = "";
  } else if (alt) {
    optimizedAlt = alt.replace(/^imagen de\s+/i, "").replace(/^foto de\s+/i, "").replace(/^icono de\s+/i, "").replace(/^imagen\s+/i, "").replace(/^foto\s+/i, "").replace(/^icono\s+/i, "");
  }
  const priority = explicitPriority !== void 0 ? explicitPriority : shouldPrioritize(src, context);
  const sizes = explicitSizes || getOptimalSizes(context);
  const isWebP = src.toLowerCase().endsWith(".webp");
  function getHueRotate(color2) {
    if (!color2) return "0deg";
    const hueValues = {
      "red": "0deg",
      "orange": "35deg",
      "yellow": "60deg",
      "green": "120deg",
      "blue": "240deg",
      "purple": "270deg",
      "pink": "330deg",
      "white": "0deg",
      "black": "0deg",
      "primary": "0deg",
      "secondary": "0deg",
      "tertiary": "0deg",
      "quaternary": "0deg",
      "quinary": "0deg",
      "senary": "0deg",
      "septenary": "0deg",
      "octonary": "0deg",
      "nonary": "0deg",
      "decenary": "0deg"
    };
    const namedColor = color2.toLowerCase();
    if (hueValues[namedColor]) {
      return hueValues[namedColor];
    }
    if (color2.startsWith("#")) {
      let hex = color2.substring(1);
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
        return "0deg";
      }
      const r = parseInt(hex.substring(0, 2), 16) / 255;
      const g = parseInt(hex.substring(2, 4), 16) / 255;
      const b = parseInt(hex.substring(4, 6), 16) / 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h = 0;
      if (max === min) {
        h = 0;
      } else {
        const d = max - min;
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h = h * 60;
      }
      return `${h}deg`;
    }
    return "0deg";
  }
  const isExternal = src.startsWith("http");
  let srcset = "";
  if (isExternal && src.includes("assets.doguiygatibienestar.com")) {
    srcset = [
      `${src}?w=640 640w`,
      `${src}?w=768 768w`,
      `${src}?w=1024 1024w`,
      `${src}?w=1280 1280w`
    ].join(", ");
  } else if (isWebP && !isExternal) {
    const baseUrl = src.substring(0, src.lastIndexOf(".webp"));
    srcset = [
      `${baseUrl}-640w.webp 640w`,
      `${baseUrl}-768w.webp 768w`,
      `${baseUrl}-1024w.webp 1024w`,
      `${baseUrl}-1280w.webp 1280w`
    ].join(", ");
  } else if (isExternal) {
    srcset = [
      `${src}?w=640&q=80 640w`,
      `${src}?w=768&q=80 768w`,
      `${src}?w=1024&q=80 1024w`,
      `${src}?w=1280&q=80 1280w`
    ].join(", ");
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")}${addAttribute(optimizedAlt, "alt")}${addAttribute(className, "class")}${addAttribute({
    ...color === "white" ? { filter: "brightness(0) invert(1)" } : color === "black" ? { filter: "brightness(0) invert(0)" } : color && color.startsWith("#") && isSvgUrl(src) ? {
      filter: `
            brightness(0) 
            drop-shadow(0 0 0 ${color}) 
            drop-shadow(0 0 0 ${color}) 
            drop-shadow(0 0 0 ${color})
          `
    } : color ? { filter: `brightness(0) saturate(100%) invert(0.5) sepia(1) saturate(3000%) hue-rotate(${getHueRotate(color)})` } : {}
  }, "style")}${addAttribute(decorative ? "true" : void 0, "aria-hidden")}${addAttribute(decorative ? "presentation" : void 0, "role")}${addAttribute(priority ? void 0 : "lazy", "loading")} decoding="async"${addAttribute(priority ? "high" : "auto", "fetchpriority")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(srcset || void 0, "srcset")}${addAttribute(sizes || void 0, "sizes")}${spreadAttributes(rest)}>`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/LazyImage.astro", void 0);

const $$Astro$7 = createAstro("https://taqueritos.com");
const $$Index$4 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$4;
  const { currentLang } = Astro2.props;
  t("messagetop", { namespace: "common", locale: currentLang }) || [];
  return renderTemplate`<!-- <div id="message-carousel" class="w-full bg-[#ca0203]  text-white py-8 md:py-4  relative overflow-hidden z-10">
  <div class="container mx-auto px-4">
    <div class="message-slider flex items-center justify-center min-h-[1.5rem] md:min-h-[2rem] relative">
      {messages.map((message: Message, index: number) => (
        <div class="message-slide absolute w-full text-center transition-all duration-700 transform" 
             data-index={index} 
             style={index === 0 ? "opacity: 1; transform: translateY(0)" : "opacity: 0; transform: translateY(20px)"}>
          {message.link ? (
            <a href={message.link} class="text-white hover:underline text-md md:text-lg font-medium">
              {message.title}
            </a>
          ) : (
            <span class="text-md md:text-lg font-medium">{message.title}</span>
          )}
        </div>
      ))}
    </div>
  </div>
  <div class="absolute top-0 bottom-0 left-4 flex items-center">
    <button id="prev-message" class="text-white p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300" aria-label="Mensaje anterior">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  </div>
  <div class="absolute top-0 bottom-0 right-4 flex items-center">
    <button id="next-message" class="text-white p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300" aria-label="Siguiente mensaje">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</div> -->${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/MessageCarousel/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/MessageCarousel/index.astro", void 0);

const headerColors = {
  // Configuración por defecto (se aplica a todas las páginas)
  default: {
    textColor: "text-white",
    backgroundColor: "bg-primary",
    hoverTextColor: "hover:text-gray-300",
    hoverBackgroundColor: "hover:bg-blue-800",
    showMessageCarousel: true
  },
  yummiesone: {
    textColor: "text-primary",
    backgroundColor: "bg-brown",
    hoverTextColor: "hover:text-secondary",
    hoverBackgroundColor: "hover:bg-primary",
    showMessageCarousel: false
  },
  // Configuración para la página de brands
  brands: {
    textColor: "text-primary",
    backgroundColor: "bg-transparent",
    hoverTextColor: "hover:text-primary",
    hoverBackgroundColor: "hover:bg-blue-800",
    showMessageCarousel: false
  },
  // Configuración para la página de blog
  blog: {
    textColor: "text-white",
    backgroundColor: "bg-orange",
    hoverTextColor: "hover:text-white",
    hoverBackgroundColor: "hover:bg-orange",
    showMessageCarousel: false
  },
  // Configuración para la página de productos
  products: {
    textColor: "text-white",
    backgroundColor: "bg-orange",
    hoverTextColor: "hover:text-white",
    hoverBackgroundColor: "hover:bg-blue",
    showMessageCarousel: false
  },
  // Configuración para la página de recetas
  recipes: {
    textColor: "text-white",
    backgroundColor: "bg-orange",
    hoverTextColor: "hover:text-white",
    hoverBackgroundColor: "hover:bg-blue",
    showMessageCarousel: false
  },
  // Configuración para la página de contacto
  contact: {
    textColor: "text-white",
    backgroundColor: "bg-primary",
    hoverTextColor: "hover:text-gray-300",
    hoverBackgroundColor: "hover:bg-blue-800",
    showMessageCarousel: false
  },
  // Configuración para la página de jurados
  jurados: {
    textColor: "text-white",
    backgroundColor: "bg-primary",
    hoverTextColor: "hover:text-gray-300",
    hoverBackgroundColor: "hover:bg-blue-800",
    showMessageCarousel: true
  },
  // Configuración para la página de noticias
  news: {
    textColor: "text-white",
    backgroundColor: "bg-orange",
    hoverTextColor: "hover:text-white",
    hoverBackgroundColor: "hover:bg-blue",
    showMessageCarousel: false
  },
  // Configuración para la página de inicio
  home: {
    textColor: "text-white",
    backgroundColor: "bg-primary",
    hoverTextColor: "hover:text-gray-300",
    hoverBackgroundColor: "hover:bg-blue-800",
    showMessageCarousel: true
  },
  // Configuración para la página de nosotros
  about: {
    textColor: "text-white",
    backgroundColor: "bg-brown",
    hoverTextColor: "hover:text-white",
    hoverBackgroundColor: "hover:bg-secondary",
    showMessageCarousel: false
  }
};
function getHeaderColors(pathname) {
  const path = pathname.toLowerCase();
  if (path.includes("/brands") || path.includes("/marcas")) {
    return headerColors.brands;
  }
  if (path.includes("/blog") || path.includes("/noticias")) {
    return headerColors.blog;
  }
  if (path.includes("/products") || path.includes("/productos")) {
    return headerColors.products;
  }
  if (path.includes("/recipes") || path.includes("/recetas")) {
    return headerColors.recipes;
  }
  if (path.includes("/contact")) {
    return headerColors.contact;
  }
  if (path.includes("/news")) {
    return headerColors.news;
  }
  if (path.includes("/yummiesone")) {
    return headerColors.yummiesone;
  }
  if (path.includes("/about") || path.includes("/nosotros")) {
    return headerColors.about;
  }
  if (path.includes("/jurados")) {
    return headerColors.jurados;
  }
  if (path === "/" || path === "/es" || path === "/en" || path.endsWith("/index")) {
    return headerColors.home;
  }
  return headerColors.default;
}

const $$Astro$6 = createAstro("https://taqueritos.com");
const $$Index$3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$3;
  const { currentLang, headerColors } = Astro2.props;
  const logosData = logos;
  const { pathname } = Astro2.url;
  const headerColorConfig = getHeaderColors(pathname);
  let customHeaderConfig = headerColorConfig;
  let customStyles = {};
  if (headerColors) {
    customHeaderConfig = {
      ...headerColorConfig,
      // Mantener las clases base pero también usar estilos inline
      backgroundColor: headerColors.backgroundColor ? headerColors.backgroundColor : headerColorConfig.backgroundColor,
      textColor: headerColors.textColor ? headerColors.textColor : headerColorConfig.textColor,
      isSpecialBackground: headerColors.isSpecialBackground ?? headerColorConfig.isSpecialBackground
    };
    if (headerColors.backgroundColor) {
      customStyles.backgroundColor = headerColors.backgroundColor;
    }
    if (headerColors.textColor) {
      customStyles.color = headerColors.textColor;
    }
  }
  return renderTemplate`${maybeRenderHead()}<header id="site-header"${addAttribute(`relative w-full transition-all duration-300 font-sans flex flex-col ${customHeaderConfig.textColor}`, "class")}${addAttribute("background-color: " + (customStyles.backgroundColor || "transparent") + "; color: " + (customStyles.color || "inherit"), "style")}${addAttribute(JSON.stringify(customHeaderConfig), "data-header-config")}> ${headerColorConfig.showMessageCarousel && renderTemplate`${renderComponent($$result, "MessageCarousel", $$Index$4, { "currentLang": currentLang })}`} <!-- Banner superior azul claro con mensaje --> <!--{customHeaderConfig.showMessageCarousel && <MessageCarousel currentLang={currentLang} />}
  
  <!-- Navbar principal - ocupa el 100% del ancho --> <div${addAttribute(`w-full `, "class")}${addAttribute(customStyles.backgroundColor ? `background-color: ${customStyles.backgroundColor}` : "", "style")}> <!-- Navbar de Desktop (solo en pantallas lg y superiores) --> <div class="hidden lg:block"> ${renderComponent($$result, "DesktopNavbar", $$Index$6, { "currentLang": currentLang, "headerColorConfig": customHeaderConfig })} </div> <!-- Navegación Móvil --> <nav${addAttribute(`lg:hidden w-full py-2 px-4 flex justify-between items-center fixed top-6 left-1/2 -translate-x-1/2 z-50 
         bg-[rgba(11,2,2,0.2)] backdrop-blur-sm 
         border border-white/20 rounded-[200px] 
         w-[95%] max-w-[1400px] shadow-lg transition-all duration-300`, "class")}> <!-- Logo para Móvil --> <div class="logo-container"> <a${addAttribute(`/${currentLang}/`, "href")} class="flex-shrink-0"> ${renderComponent($$result, "LocalizedImage", $$LazyImage, { "src": logosData.principal.url, "alt": logosData.principal.alt, "class": "h-12 w-auto object-contain", "loading": "eager", "width": "120", "height": "48", "priority": true })} </a> </div> <!-- Mobile Menu Button --> <div class=""> ${renderComponent($$result, "MobileMenuButton", $$Index$5, { "currentLang": currentLang, "headerColorConfig": customHeaderConfig })} </div> </nav> </div> </header> ${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/Header/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/Header/index.astro", void 0);

const $$Skeleton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-100 animate-pulse"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> ${Array.from({ length: 4 }).map(() => renderTemplate`<div> <div class="h-6 w-24 bg-gray-300 rounded mb-4"></div> <div class="space-y-2"> ${Array.from({ length: 4 }).map(() => renderTemplate`<div class="h-4 w-3/4 bg-gray-300 rounded"></div>`)} </div> </div>`)} </div> <div class="mt-12 pt-8 border-t border-gray-200"> <div class="flex flex-col md:flex-row justify-between items-center"> <div class="h-6 w-32 bg-gray-300 rounded mb-4 md:mb-0"></div> <div class="flex space-x-6"> ${Array.from({ length: 4 }).map(() => renderTemplate`<div class="h-6 w-6 bg-gray-300 rounded-full"></div>`)} </div> </div> </div> </div> </footer>`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/Footer/Skeleton.astro", void 0);

const $$Astro$5 = createAstro("https://taqueritos.com");
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$2;
  const { currentLang, iconColor = "white", iconSize = 24, centered = false, class: className = "" } = Astro2.props;
  const alignmentClasses = centered ? "mx-auto justify-center" : "md:mx-0 md:justify-start";
  const socialMediaObj = t("social_media", { namespace: "common", locale: currentLang });
  const socialMedia = socialMediaObj ? Object.values(socialMediaObj) : [];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-row space-x-4 ${alignmentClasses} ${className}`, "class")}> ${socialMedia.map((sm) => renderTemplate`<a${addAttribute(sm.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(sm.name, "title")}${addAttribute(`hover:text-gray-300 transition-colors`, "class")}> <span class="sr-only">${sm.name}</span> ${sm.iconUrl && renderTemplate`${renderComponent($$result, "LazyImage", $$LazyImage, { "src": sm.iconUrl, "alt": sm.alt || sm.name, "style": `height: ${iconSize}px; width: ${iconSize}px;`, "color": iconColor, "width": iconSize, "height": iconSize, "loading": "lazy" })}`} </a>`)} </div>`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/SocialMediaIcons/index.astro", void 0);

const $$Astro$4 = createAstro("https://taqueritos.com");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { currentLang, loading = false } = Astro2.props;
  t("footer.main_text", { namespace: "common", locale: currentLang });
  t("footer.description", { namespace: "common", locale: currentLang });
  const followUs = t("footer.follow_us", { namespace: "common", locale: currentLang });
  const contactUs = t("footer.contact_us", { namespace: "common", locale: currentLang });
  t("footer.choose", { namespace: "common", locale: currentLang });
  t("footer.instagram_text", { namespace: "common", locale: currentLang });
  t("footer.facebook_text", { namespace: "common", locale: currentLang });
  t("footer.email", { namespace: "common", locale: currentLang });
  t("footer.copyright", { namespace: "common", locale: currentLang });
  const rawMenuItems = t("menu_items", { namespace: "common", locale: currentLang });
  const menuItems = rawMenuItems.filter((item) => item.id !== "community");
  return renderTemplate`${loading ? renderTemplate`${renderComponent($$result, "Skeleton", $$Skeleton, {})}` : renderTemplate`${maybeRenderHead()}<footer class="bg-brown text-white relative overflow-hidden"><div class="container text-center flex justify-center items-center mx-auto px-6 py-8 md:py-4"><div class="flex flex-col md:flex-row md:gap-32 xl:gap-64"><!-- Columna 1: Logo y Navegación --><div class="flex flex-col"><!-- Logo --><div class="mb-8 md:mb-8 md:mt-0"><a${addAttribute(`/${currentLang}/`, "href")}>${renderComponent($$result, "LazyImage", $$LazyImage, { "src": logos.principal.url, "alt": logos.principal.alt, "class": "h-12 md:h-16 lg:h-18 w-auto" })}</a></div><!-- Navegación --><div class="flex flex-col items-start justify-start mb-10 md:mb-12"><h3 class="font-title text-xl md:text-2xl font-bold mb-4 uppercase">${currentLang === "es" ? "Navegaci\xF3n" : "Navigation"}</h3><nav class="grid grid-cols-2 gap-x-6 md:gap-x-12 gap-y-2 text-left w-full">${menuItems && menuItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(item.id === "where-buy" ? "true" : void 0, "data-open-stockist")} class="font-sans text-sm md:text-base hover:underline transition-all duration-200 hover:opacity-80">${item.text}</a>`)}</nav></div></div><!-- Columna 2: Contacto --><div class="flex flex-col space-y-8 md:space-y-12 md:mt-0"><!-- Escríbenos --><div class="text-left"></div><!-- Contáctanos --><div class="flex flex-col sm:flex-col md:flex-row"><div class="pb-8 md:pb-0"><h3 class="font-title text-xl md:text-2xl font-bold mb-4 uppercase">${contactUs}</h3><div class="grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4 md:gap-x-16 xl:gap-x-24 text-sm md:text-base"><!-- Guatemala --><div class="flex items-center justify-start space-x-2"><svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"><g clip-path="url(#clip0_2132_1918)"><rect width="26.1944" height="18.7103" rx="3.74206" fill="white"></rect><path d="M13.0973 9.97884C13.4418 9.97884 13.721 9.42038 13.721 8.73148C13.721 8.04259 13.4418 7.48413 13.0973 7.48413C12.7529 7.48413 12.4736 8.04259 12.4736 8.73148C12.4736 9.42038 12.7529 9.97884 13.0973 9.97884Z" fill="#FFDA2C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16.2155 9.35516C16.2155 7.63381 14.8185 6.23677 13.0971 6.23677C11.3758 6.23677 9.97876 7.63381 9.97876 9.35516C9.97876 11.0765 11.3758 12.4735 13.0971 12.4735C14.8185 12.4735 16.2155 11.0765 16.2155 9.35516ZM13.0971 11.2262C14.13 11.2262 14.9682 10.1098 14.9682 8.73148C14.9682 7.35315 14.13 6.23677 13.0971 6.23677C12.0643 6.23677 11.2261 7.35315 11.2261 8.73148C11.2261 10.1098 12.0643 11.2262 13.0971 11.2262Z" fill="#249F58"></path><rect x="18.7102" width="7.48413" height="18.7103" fill="#3ECBF8"></rect><rect width="7.48413" height="18.7103" fill="#3ECBF8"></rect></g><defs><clipPath id="clip0_2132_1918"><rect width="26.1944" height="18.7103" rx="3.74206" fill="white"></rect></clipPath></defs></svg><span class="whitespace-nowrap">(+502) 2502-7050</span></div><!-- El Salvador --><div class="flex items-center justify-start space-x-2"><svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"><g clip-path="url(#clip0_2132_1921)"><rect width="26.1944" height="18.7103" rx="3.74206" fill="white"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.4735H26.1944V18.7103H0V12.4735ZM0 0H26.1944V6.23677H0V0Z" fill="#1A47B8"></path><path d="M13.0971 11.2262C14.1304 11.2262 14.9681 10.3885 14.9681 9.35516C14.9681 8.32182 14.1304 7.48413 13.0971 7.48413C12.0638 7.48413 11.2261 8.32182 11.2261 9.35516C11.2261 10.3885 12.0638 11.2262 13.0971 11.2262Z" fill="#1A47B8"></path><path d="M13.0973 9.97884C13.4418 9.97884 13.721 9.69961 13.721 9.35516C13.721 9.01071 13.4418 8.73148 13.0973 8.73148C12.7529 8.73148 12.4736 9.01071 12.4736 9.35516C12.4736 9.69961 12.7529 9.97884 13.0973 9.97884Z" fill="#FFDA2C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.97876 8.73148L11.2261 9.97884L13.0971 11.2262L14.9682 9.97884L16.2155 8.73148L14.9682 11.2262H11.2261L9.97876 8.73148Z" fill="#249F58"></path></g><defs><clipPath id="clip0_2132_1921"><rect width="26.1944" height="18.7103" rx="3.74206" fill="white"></rect></clipPath></defs></svg><span class="whitespace-nowrap">(+503) 2510-8300</span></div><!-- Costa Rica --><div class="flex items-center justify-start space-x-2"><svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"><g clip-path="url(#clip0_2132_1925)"><rect width="26.1944" height="18.7103" rx="3.74206" fill="#1A47B8"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.4735H26.1944V14.9682H0V12.4735Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.23677H26.1944V12.4735H0V6.23677Z" fill="#F93939"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 3.74206H26.1944V6.23677H0V3.74206Z" fill="white"></path></g><defs><clipPath id="clip0_2132_1925"><rect width="26.1944" height="18.7103" rx="3.74206" fill="white"></rect></clipPath></defs></svg><span class="whitespace-nowrap">(+506) 2271-0665</span></div><!-- República Dominicana --><div class="flex items-center justify-start space-x-2"><svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"><g clip-path="url(#clip0_2132_1928)"><rect width="26.1944" height="18.7103" rx="3.74206" fill="white"></rect><rect x="14.9683" y="11.2262" width="11.2262" height="7.48413" fill="#1A47B8"></rect><rect y="11.2262" width="11.2262" height="7.48413" fill="#F93939"></rect><circle cx="13.0971" cy="9.35516" r="1.87103" fill="#249F58"></circle><circle cx="0.623677" cy="0.623677" r="0.623677" transform="matrix(-1 0 0 1 14.9683 9.97883)" fill="#232C80"></circle><circle cx="0.623677" cy="0.623677" r="0.623677" transform="matrix(-1 0 0 1 12.4736 9.97883)" fill="#F93939"></circle><circle cx="13.0973" cy="9.35516" r="0.623677" fill="white"></circle><circle cx="14.3446" cy="8.1078" r="0.623677" fill="#F93939"></circle><circle cx="11.8498" cy="8.1078" r="0.623677" fill="#232C80"></circle><rect x="14.9683" width="11.2262" height="7.48413" fill="#F93939"></rect><rect width="11.2262" height="7.48413" fill="#1A47B8"></rect></g><defs><clipPath id="clip0_2132_1928"><rect width="26.1944" height="18.7103" rx="3.74206" fill="white"></rect></clipPath></defs></svg><span class="whitespace-nowrap">(+001) 809-2731042</span></div><!-- Nicaragua --><div class="flex items-center justify-start space-x-2"><svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"><g clip-path="url(#clip0_2132_1932)"><rect width="26.1944" height="18.7103" rx="3.74206" fill="white"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.4735H26.1944V18.7103H0V12.4735ZM8.73148 7.48413H9.97884V8.73148H8.73148V7.48413ZM8.73148 9.97884H9.97884V11.2262H8.73148V9.97884ZM16.2156 7.48413H17.463V8.73148H16.2156V7.48413ZM16.2156 9.97884H17.463V11.2262H16.2156V9.97884ZM12.4735 8.73148H13.7209V9.97884H12.4735V8.73148ZM0 0H26.1944V6.23677H0V0Z" fill="#3ECBF8"></path></g><defs><clipPath id="clip0_2132_1932"><rect width="26.1944" height="18.7103" rx="3.74206" fill="white"></rect></clipPath></defs></svg><span class="whitespace-nowrap">(+505) 2255-7480</span></div><!-- Honduras --><div class="flex items-center justify-start space-x-2"><svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0"><g clip-path="url(#clip0_2132_1935)"><rect width="26.1944" height="18.7103" rx="3.74206" fill="white"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M0 12.4735H26.1944V18.7103H0V12.4735ZM0 0H26.1944V6.23677H0V0Z" fill="#1A47B8"></path><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M0 12.4735H26.1944V18.7103H0V12.4735ZM0 0H26.1944V6.23677H0V0Z" fill="#3A99FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2261 11.2262L13.0971 7.48412L14.9681 11.2262H11.2261Z" fill="#00B731"></path></g><defs><clipPath id="clip0_2132_1935"><rect width="26.1944" height="18.7103" rx="3.74206" fill="white"></rect></clipPath></defs></svg><span class="whitespace-nowrap">2275-3370</span></div></div></div><div class="md:mt-10 md:ml-[50px] mt-8"><div class="flex flex-col items-center md:items-start gap-2 text-center md:text-left"><p class="mb-1">${followUs}</p>${renderComponent($$result, "SocialMediaIcons", $$Index$2, { "currentLang": currentLang, "iconColor": "white", "centered": false })}</div></div></div></div></div></div></footer>`}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/Footer/index.astro", void 0);

const $$Astro$3 = createAstro("https://taqueritos.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  const { currentLang, headerColorConfig } = Astro2.props;
  const socialMedia = t("social_media", { namespace: "common", locale: currentLang });
  const rawMenuItems = t("menu_items", { namespace: "common", locale: currentLang });
  const menuItems = rawMenuItems.filter((item) => item.id !== "community");
  const menuItemsFiltered = menuItems.filter((item) => item.id !== "games" || currentLang === "es");
  const contactHref = `/${currentLang}/${currentLang === "es" ? "contacto" : "contact"}`;
  const contactMenuItem = {
    id: "contact",
    text: t("contact_us", { namespace: "common", locale: currentLang }),
    href: contactHref
  };
  const menuItemsWithContact = [...menuItemsFiltered, contactMenuItem];
  const products = t("items", { namespace: "products", locale: currentLang });
  const games = t("games", { namespace: "common", locale: currentLang });
  t("menu_labels.open_main_menu", { namespace: "common", locale: currentLang }) || "Open main menu";
  const closeMenuLabel = t("menu_labels.close_main_menu", { namespace: "common", locale: currentLang }) || "Close main menu";
  return renderTemplate`<!-- Menú Móvil Global -->${maybeRenderHead()}<div id="mobile-menu" class="hidden fixed inset-0 w-screen h-screen z-[2147483647] bg-brown bg-opacity-96 overflow-y-auto lg:hidden"${addAttribute(currentLang, "data-current-lang")}> <div class="container mx-auto px-4 py-8"> <div class="flex justify-between items-center mb-8"> <a${addAttribute(`/${currentLang}/`, "href")} class="block"> <img${addAttribute(logos.principal.url, "src")}${addAttribute(logos.principal.alt, "alt")}> </a> <button id="mobile-menu-close" type="button" class="text-white pr-[12px]"> <span class="sr-only">${closeMenuLabel}</span> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <nav class="flex flex-col items-center space-y-3 text-center w-full text-white" id="mobile-menu-items"> ${menuItemsWithContact && menuItemsWithContact.map((item) => renderTemplate`<div class="w-full"> <div class="flex items-center justify-center text-white">  ${item.submenu && item.id !== "products" && item.id !== "games" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="#" class="menu-parent block text-xl font-title font-medium hover:text-gray-300 transition-colors py-2"> ${item.text} </a> <button class="menu-toggle px-2 py-1 text-white hover:text-gray-300 ml-1"> <svg class="w-5 h-5 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> ` })}` : null}  ${item.id === "products" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="#" class="menu-parent block text-xl font-title font-medium hover:text-gray-300 transition-colors py-2"> ${item.text} </a> <button class="menu-toggle px-2 py-1 text-white hover:text-gray-300 ml-1"> <svg class="w-5 h-5 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> ` })}` : null}  ${item.id === "games" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="#" class="menu-parent block text-xl font-title font-medium hover:text-gray-300 transition-colors py-2"> ${item.text} </a> <button class="menu-toggle px-2 py-1 text-white hover:text-gray-300 ml-1"> <svg class="w-5 h-5 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> ` })}` : null}  ${!item.submenu && item.id !== "products" && item.id !== "games" && renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(item.id === "where-buy" ? "true" : void 0, "data-open-stockist")}${addAttribute(item.id === "taqueritos-gaming" ? "_blank" : void 0, "target")}${addAttribute(item.id === "taqueritos-gaming" ? "noopener noreferrer" : void 0, "rel")} class="block text-xl font-title font-medium hover:text-gray-300 transition-colors py-2"> ${item.text} </a>`} </div>  ${item.submenu && item.id !== "products" && renderTemplate`<div class="submenu-container hidden mt-1 space-y-1 pl-4 text-center"> ${item.submenu.map((subItem) => renderTemplate`<div> <div class="flex items-center justify-center"> ${subItem.submenu ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a href="#" class="submenu-parent block text-lg font-title font-normal text-gray-400 hover:text-gray-200 transition-colors py-1">${subItem.text}</a> <button class="submenu-toggle px-2 py-1 text-gray-400 hover:text-gray-200 ml-1"> <svg class="w-4 h-4 chevron-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> ` })}` : renderTemplate`<a${addAttribute(subItem.href, "href")} class="block text-lg font-title font-normal text-gray-400 hover:text-gray-200 transition-colors py-1">${subItem.text}</a>`} </div> ${subItem.submenu && renderTemplate`<div class="third-level-submenu hidden mt-1 space-y-1 pl-4 text-center"> ${subItem.submenu.map((thirdItem) => renderTemplate`<a${addAttribute(thirdItem.href, "href")} class="block text-md font-title font-normal text-gray-500 hover:text-gray-300 transition-colors py-1 text-center">${thirdItem.text}</a>`)} </div>`} </div>`)} </div>`}  ${item.id === "products" && renderTemplate`<div class="submenu-container hidden mt-1 space-y-1 pl-4 text-center"> ${products && products.map((product) => renderTemplate`<a${addAttribute(`/${currentLang}/${currentLang === "es" ? "productos" : "products"}/${product.id}`, "href")} class="block text-lg font-title font-normal text-gray-400 hover:text-gray-200 transition-colors py-1"> ${product.name} </a>`)} </div>`}  ${item.id === "games" && renderTemplate`<div class="submenu-container hidden mt-1 space-y-1 pl-4 text-center"> ${games && games.map((game) => renderTemplate`<a${addAttribute(game.href, "href")} target="_blank" rel="noopener noreferrer" class="block text-lg font-title font-normal text-gray-400 hover:text-gray-200 transition-colors py-1"> ${game.name} </a>`)} </div>`} </div>`)} </nav> <!-- Selector de Idioma Móvil --> <div class="mt-6 mb-6 flex justify-center"> ${renderComponent($$result, "LanguageSwitcher", $$LanguageSwitcher, { "activeLocale": currentLang, "headerColorConfig": headerColorConfig })} <br> </div> <div class="flex justify-center"> ${renderComponent($$result, "SocialMediaIcons", $$Index$2, { "currentLang": currentLang, "iconColor": "white", "centered": false })} </div> <div class="mt-auto flex space-x-4"> ${socialMedia && Object.entries(socialMedia).map(([key, social]) => {
    const sm = social;
    return renderTemplate`<a${addAttribute(sm.url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(sm.name, "title")} class="text-white hover:text-gray-300"> <span class="sr-only">${sm.name}</span> ${sm.iconUrl && renderTemplate`${renderComponent($$result, "LocalizedImage", $$LazyImage, { "assetKey": sm.iconUrl, "alt": sm.alt || sm.name, "class": "h-6 w-6 filter invert", "width": 24, "height": 24, "loading": "lazy" })}`} </a>`;
  })} </div> </div> </div> ${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/MobileMenu/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/MobileMenu/index.astro", void 0);

const $$I18NProvider = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderSlot($$result, $$slots["default"])} ${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/i18n/I18nProvider.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/i18n/I18nProvider.astro", void 0);

const $$Astro$2 = createAstro("https://taqueritos.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://taqueritos.com");
const $$StockistModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$StockistModal;
  const { products = [], stockists = [], initialProduct, locale = "es" } = Astro2.props;
  const texts = {
    es: {
      product: "Producto",
      weight: "Gramaje",
      whereToFind: "\xBFD\xD3NDE ENCONTRARNOS?",
      buy: "COMPRAR",
      contact: "CONT\xC1CTANOS"
    },
    en: {
      product: "Product",
      weight: "Weight",
      whereToFind: "WHERE TO FIND US?",
      buy: "BUY",
      contact: "CONTACT US"
    }
  };
  const t = texts[locale] || texts.es;
  return renderTemplate(_a || (_a = __template(["", '<div id="stockist-modal" class="stockist-modal modal-hidden" data-astro-cid-feywqir3> <div class="modal-overlay" data-astro-cid-feywqir3></div> <div class="modal-content" data-astro-cid-feywqir3> <button class="modal-close" aria-label="Cerrar" data-astro-cid-feywqir3> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-feywqir3> <path d="M18 6L6 18M6 6l12 12" data-astro-cid-feywqir3></path> </svg> </button> <div class="modal-body" data-astro-cid-feywqir3> <!-- Secci\xF3n superior: Imagen + Selectores --> <div class="modal-top-section" data-astro-cid-feywqir3> <!-- Imagen del producto --> <div class="product-image-section" data-astro-cid-feywqir3> <img id="modal-product-image"', "", ' class="product-image" data-astro-cid-feywqir3> </div> <!-- Contenido del modal --> <div class="modal-info" data-astro-cid-feywqir3> <h2 id="modal-product-title" class="product-title" data-astro-cid-feywqir3> ', ' </h2> <!-- Selector de Producto --> <div class="form-group" data-astro-cid-feywqir3> <label for="product-select" data-astro-cid-feywqir3>', '</label> <select id="product-select" class="form-select" data-astro-cid-feywqir3> ', ' </select> </div> <!-- Selector de Gramaje --> <div class="form-group" data-astro-cid-feywqir3> <label for="weight-select" data-astro-cid-feywqir3>', '</label> <div id="weight-buttons" class="weight-buttons" data-astro-cid-feywqir3> ', ' </div> </div> </div> </div> <!-- Secci\xF3n inferior: Stockists centrados --> <div class="stockists-section" data-astro-cid-feywqir3> <h3 class="section-title" data-astro-cid-feywqir3>', '</h3> <img src="https://snack.yummiespromociones.com/SnacksyummiesAssets/arrow-down-circle.png" alt="arrow down" class="arrow-down-icon" data-astro-cid-feywqir3> <!-- Lista de Stockists --> <div class="stockists-list" data-astro-cid-feywqir3> ', ' </div> </div> </div> </div> <!-- JSON data for products --> <script type="application/json" id="stockist-products-json">', "<\/script> </div>  ", ""])), maybeRenderHead(), addAttribute(initialProduct?.image || products[0]?.image || "", "src"), addAttribute(initialProduct?.name || products[0]?.name || "", "alt"), initialProduct?.name || products[0]?.name || "", t.product, products.map((product) => renderTemplate`<option${addAttribute(product.id, "value")}${addAttribute(product.name, "data-name")}${addAttribute(product.image, "data-image")}${addAttribute(product.weight ? product.weight.join("|") : "", "data-weights")}${addAttribute(initialProduct?.id === product.id, "selected")} data-astro-cid-feywqir3> ${product.name} </option>`), t.weight, (initialProduct?.weight || products[0]?.weight || []).map((weight) => renderTemplate`<div class="weight-btn"${addAttribute(weight, "data-weight")} data-astro-cid-feywqir3> ${weight} </div>`), t.whereToFind, stockists.map((stockist) => renderTemplate`<div class="stockist-item" data-astro-cid-feywqir3> <div class="stockist-info" data-astro-cid-feywqir3> <img${addAttribute(stockist.icon, "src")}${addAttribute(stockist.name, "alt")} class="stockist-logo" data-astro-cid-feywqir3> </div> <a${addAttribute(stockist.link, "href")} target="_blank" rel="noopener noreferrer" class="stockist-button" data-astro-cid-feywqir3> ${stockist.id === "walmart" ? t.contact : t.buy} </a> </div>`), unescapeHTML(JSON.stringify(products)), renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/StockistModal.astro?astro&type=script&index=0&lang.ts"));
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/StockistModal.astro", void 0);

const $$Astro = createAstro("https://taqueritos.com");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description, class: className, headerColors } = Astro2.props;
  function withTaqueritosPrefix(value) {
    if (!value) return void 0;
    return value.startsWith("Taqueritos - ") ? value : `Taqueritos - ${value}`;
  }
  const pathSegments = Astro2.url.pathname.split("/");
  const langFromUrl = pathSegments[1];
  const validLocales = ["es", "en"];
  const currentLang = validLocales.includes(langFromUrl) ? langFromUrl : "es";
  const { pathname } = Astro2.url;
  const headerColorConfig = getHeaderColors(pathname);
  const products = t("items", { namespace: "products", locale: currentLang }) || [];
  const stockists = t("stockist", { namespace: "products", locale: currentLang }) || [];
  let customHeaderConfig = headerColorConfig;
  if (headerColors) {
    customHeaderConfig = {
      ...headerColorConfig,
      backgroundColor: headerColors.backgroundColor ? `bg-[${headerColors.backgroundColor}]` : headerColorConfig.backgroundColor,
      textColor: headerColors.textColor ? headerColors.textColor : headerColorConfig.textColor,
      isSpecialBackground: headerColors.isSpecialBackground ?? headerColorConfig.isSpecialBackground
    };
  }
  return renderTemplate`<html${addAttribute(currentLang, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderComponent($$result, "GoogleTagManager", $$GoogleTagManager, {})}${renderComponent($$result, "MetaPixel", $$MetaPixel, {})}${renderComponent($$result, "TikTokPixel", $$TikTokPixel, {})}${renderComponent($$result, "Favicon", $$Favicon, {})}${title && renderTemplate`<title>${withTaqueritosPrefix(title)}</title>`}${description && renderTemplate`<meta name="description"${addAttribute(description, "content")}>`}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body${addAttribute(`font-sans min-h-screen flex flex-col ${className || ""}`, "class")}> ${renderComponent($$result, "I18nProvider", $$I18NProvider, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["header"], renderTemplate` ${renderComponent($$result2, "Header", $$Index$3, { "currentLang": currentLang, "headerColors": headerColors })} `)} <main class="flex-1 flex flex-col overflow-hidden"> ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "Footer", $$Index$1, { "currentLang": currentLang })} ` })} ${renderComponent($$result, "MobileMenu", $$Index, { "currentLang": currentLang, "headerColorConfig": customHeaderConfig })} ${renderComponent($$result, "StockistModal", $$StockistModal, { "products": products, "stockists": stockists, "locale": currentLang })} ${renderScript($$result, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $, $$LazyImage as a, $$ClientRouter as b, generalAssets as c, getHeaderColors as g };
