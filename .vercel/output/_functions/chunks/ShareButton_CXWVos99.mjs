import { g as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import 'clsx';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://taqueritos.com", "SSR": true};
const $$Astro = createAstro("https://taqueritos.com");
const $$ShareButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ShareButton;
  const { modalId, lang, className = "", url } = Astro2.props;
  const derivedLang = lang || Astro2.url.pathname.split("/")[1] || "es";
  const label = derivedLang === "es" ? "Compartir:" : "Share:";
  const siteOrigin = Object.assign(__vite_import_meta_env__, { _: process.env._ })?.PUBLIC_SITE_URL || (Astro2.site ? Astro2.site.origin : "") || "https://taqueritos.com";
  function toAbsoluteUrl(input) {
    try {
      return new URL(input).href;
    } catch {
      return new URL(input, siteOrigin).href;
    }
  }
  const rawUrl = url ? toAbsoluteUrl(url) : new URL(`${Astro2.url.pathname}${Astro2.url.search}`, siteOrigin).href;
  const encodedUrl = encodeURIComponent(rawUrl);
  const encodedText = encodeURIComponent("");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex items-center gap-3 text-white ${className}`, "class")}> <span class="font-title text-sm md:text-base uppercase tracking-wide"> ${label} </span> <div class="flex items-center gap-3"> <!-- WhatsApp --> <a${addAttribute(`https://wa.me/?text=${encodedUrl}`, "href")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="hover:text-white/70 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"> <path d="M12 2C6.5 2 2 6.1 2 11c0 1.8.6 3.5 1.6 4.9L2 22l6.3-1.6C9.7 21 10.8 21.3 12 21.3 17.5 21.3 22 17.2 22 12.3 22 7.4 17.5 2 12 2z"></path> <path d="M8.5 9.5c0 .3.1.7.3 1 0 0 .3.7 1 1.4.8.8 1.8 1.3 1.8 1.3.3.2.7.3 1 .3.3 0 .5-.1.7-.3l.5-.5c.1-.1.2-.3.2-.5 0-.1 0-.3-.1-.4 0 0-.2-.2-.6-.4-.3-.2-.7-.2-.7-.2-.2 0-.3.1-.4.2l-.3.3c-.1.1-.3.1-.4 0 0 0-.5-.2-1-.7-.5-.5-.8-1.1-.8-1.1-.1-.1-.1-.3 0-.4l.2-.3c.1-.1.1-.3.2-.4 0 0 0-.3-.1-.5-.1-.2-.4-.6-.4-.6-.1-.1-.2-.1-.4-.1-.2 0-.3 0-.5.1l-.5.3c-.3.3-.5.7-.5 1.1z"></path> </svg> </a> <!-- Facebook --> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "href")} target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="hover:text-white/70 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-white"> <path d="M13.5 22v-7h2.5l.5-3h-3V9.5c0-.9.3-1.5 1.5-1.5h1.6V5.2C16.3 5.1 15.5 5 14.6 5 12.3 5 10.7 6.4 10.7 9.2V12H8v3h2.7v7h2.8z"></path> </svg> </a> <!-- X / Twitter --> <a${addAttribute(`https://twitter.com/intent/tweet?url=${encodedUrl}${encodedText ? `&text=${encodedText}` : ""}`, "href")} target="_blank" rel="noopener noreferrer" aria-label="X" class="hover:text-white/70 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"> <path d="M4 4l7.5 8.5L4.5 20H7l5-5.5L17.5 20H20l-7.5-8.5L19.5 4H17L12 9.2 8 4H4z"></path> </svg> </a> <!-- Telegram --> <a${addAttribute(`https://t.me/share/url?url=${encodedUrl}`, "href")} target="_blank" rel="noopener noreferrer" aria-label="Telegram" class="hover:text-white/70 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-white"> <path d="M21.6 5.2c.3-1-.6-1.8-1.6-1.5L3.2 9.3C2.3 9.6 2.3 10.8 3.2 11.1l4.2 1.3 1.6 5c.2.7 1.1.9 1.6.3l2.3-2.4 4 3c.7.5 1.8.1 2-0.8l2.7-12.3zM9.3 11.5l8.9-5.5-6.5 7.1-.2 2.7-1-3.3-1.2-0.4z"></path> </svg> </a> </div> </div>`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/components/common/ShareButton.astro", void 0);

export { $$ShareButton as $ };
