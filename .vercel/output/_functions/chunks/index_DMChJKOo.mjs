import { g as createAstro, c as createComponent, a as renderTemplate, j as defineScriptVars, r as renderComponent, m as maybeRenderHead } from './astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, b as $$ClientRouter } from './MainLayout_CEv0P3ec.mjs';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://taqueritos.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { currentLang } = Astro2.props;
  const pageTitle = currentLang === "es" ? "Noticias" : "News";
  const pageDescription = currentLang === "es" ? "Mantente al d\xEDa con nuestras \xFAltimas noticias y art\xEDculos." : "Stay updated with our latest news and articles.";
  const mdModules = /* #__PURE__ */ Object.assign({});
  let allPosts = [];
  for (const path in mdModules) {
    const lang = path.split("/")[3];
    if (lang === currentLang) {
      const mod = await mdModules[path]();
      const fm = mod.frontmatter || {};
      if (fm && fm.id && fm.slug && fm.title) {
        allPosts.push({
          id: String(fm.id),
          slug: String(fm.slug),
          title: String(fm.title),
          summary: fm.summary ? String(fm.summary) : "",
          image: fm.image ? String(fm.image) : "/images/blog/placeholder.jpg",
          published_date: fm.published_date ? String(fm.published_date) : "",
          category: fm.category ? String(fm.category).toLowerCase() : "other"
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
    const t = Date.parse(s);
    return isNaN(t) ? 0 : t;
  }
  allPosts = allPosts.sort((a, b) => toDate(b.published_date) - toDate(a.published_date));
  Array.from(new Set(allPosts.map((p) => p.category || "other")));
  const firstFive = allPosts.slice(0, 5);
  firstFive.slice(0, 3);
  firstFive.slice(3, 5);
  allPosts.slice(5);
  return renderTemplate(_a || (_a = __template(["", "  <script>(function(){", `
  function initBlogFilters(){
    const filterButtons = Array.from(document.querySelectorAll('#blogFilters .filter-btn'));
    const data = Array.isArray(initialPosts) ? initialPosts : [];

    function getCarousel(){ return (window)._newsCarousels && (window)._newsCarousels['news-list']; }

    function setActive(btn) {
      filterButtons.forEach(b => { b.classList.remove('opacity-40'); b.classList.add('text-white'); });
      filterButtons.forEach(b => { if (b!==btn) b.classList.add('opacity-40'); });
    }
    function applyFilter(filter) {
      const carousel = getCarousel();
      if (!carousel) return; // will be re-applied on ready
      const filtered = filter === 'all' 
        ? data 
        : data.filter(p => (p.category || 'other').toLowerCase() === filter);
      carousel.setData(filtered);
    }
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter') || 'all';
        setActive(btn);
        applyFilter(filter);
      });
    });
    // init
    const defaultBtn = filterButtons.find(b => b.getAttribute('data-filter') === 'all');
    if (defaultBtn) setActive(defaultBtn);

    // Ensure carousel receives initial data when ready
    const applyInitial = () => {
      const c = getCarousel();
      if (c) { 
        c.setData(data); 
        // Also apply the "all" filter to show all posts initially
        const defaultBtn = filterButtons.find(b => b.getAttribute('data-filter') === 'all');
        if (defaultBtn) setActive(defaultBtn);
        return true; 
      }
      return false;
    };
    
    // Try immediate application
    if (!applyInitial()) {
      // If carousel not ready, retry with polling
      const start = Date.now();
      const timer = setInterval(() => {
        if (applyInitial() || Date.now() - start > 3000) clearInterval(timer);
      }, 100);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBlogFilters);
  } else {
    initBlogFilters();
  }
  document.addEventListener('astro:page-load', initBlogFilters);
})();<\/script>`])), renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle, "description": pageDescription, "class": "", "data-astro-cid-tjdpv4jl": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="background: radial-gradient(circle at 50% 50%, #2c0b0b 0%, #150404 80%);" data-astro-cid-tjdpv4jl> ${renderComponent($$result2, "ViewTransitions", $$ClientRouter, { "data-astro-cid-tjdpv4jl": true })} </div> ` }), defineScriptVars({ initialPosts: allPosts, currentLang }));
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Blog/index.astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/views/Blog/index.astro";
const $$url = undefined;

export { $$Index as default, $$file as file, $$url as url };
