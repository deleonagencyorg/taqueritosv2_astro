import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DN4f7hW2.mjs';
import { manifest } from './manifest_Dp5tyv0A.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/creators/participations.astro.mjs');
const _page3 = () => import('./pages/api/detect-locale.astro.mjs');
const _page4 = () => import('./pages/api/geo-headers.astro.mjs');
const _page5 = () => import('./pages/gaming.astro.mjs');
const _page6 = () => import('./pages/sitemap.xml.astro.mjs');
const _page7 = () => import('./pages/_lang_/about-us.astro.mjs');
const _page8 = () => import('./pages/_lang_/blog/_blogid_.astro.mjs');
const _page9 = () => import('./pages/_lang_/blog.astro.mjs');
const _page10 = () => import('./pages/_lang_/challenges/_challengeid_.astro.mjs');
const _page11 = () => import('./pages/_lang_/challenges-tournaments/_challengeid_.astro.mjs');
const _page12 = () => import('./pages/_lang_/contact.astro.mjs');
const _page13 = () => import('./pages/_lang_/contacto.astro.mjs');
const _page14 = () => import('./pages/_lang_/jurados.astro.mjs');
const _page15 = () => import('./pages/_lang_/news/_newsid_.astro.mjs');
const _page16 = () => import('./pages/_lang_/nosotros.astro.mjs');
const _page17 = () => import('./pages/_lang_/noticias/_newsid_.astro.mjs');
const _page18 = () => import('./pages/_lang_/participacion.astro.mjs');
const _page19 = () => import('./pages/_lang_/productos/_productid_.astro.mjs');
const _page20 = () => import('./pages/_lang_/products/_productid_.astro.mjs');
const _page21 = () => import('./pages/_lang_/recetas/_recipeid_.astro.mjs');
const _page22 = () => import('./pages/_lang_/recipes/_recipeid_.astro.mjs');
const _page23 = () => import('./pages/_lang_/retos/_challengeid_.astro.mjs');
const _page24 = () => import('./pages/_lang_/retos-torneos/_challengeid_.astro.mjs');
const _page25 = () => import('./pages/_lang_/_pageslug_.astro.mjs');
const _page26 = () => import('./pages/_lang_.astro.mjs');
const _page27 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/creators/participations.ts", _page2],
    ["src/pages/api/detect-locale.ts", _page3],
    ["src/pages/api/geo-headers.ts", _page4],
    ["src/pages/gaming.ts", _page5],
    ["src/pages/sitemap.xml.ts", _page6],
    ["src/pages/[lang]/about-us/index.astro", _page7],
    ["src/pages/[lang]/blog/[blogId].astro", _page8],
    ["src/pages/[lang]/blog/index.astro", _page9],
    ["src/pages/[lang]/challenges/[challengeId].astro", _page10],
    ["src/pages/[lang]/challenges-tournaments/[challengeId].astro", _page11],
    ["src/pages/[lang]/contact/index.astro", _page12],
    ["src/pages/[lang]/contacto/index.astro", _page13],
    ["src/pages/[lang]/jurados/index.astro", _page14],
    ["src/pages/[lang]/news/[newsId].astro", _page15],
    ["src/pages/[lang]/nosotros/index.astro", _page16],
    ["src/pages/[lang]/noticias/[newsId].astro", _page17],
    ["src/pages/[lang]/participacion/index.astro", _page18],
    ["src/pages/[lang]/productos/[productId].astro", _page19],
    ["src/pages/[lang]/products/[productId].astro", _page20],
    ["src/pages/[lang]/recetas/[recipeId].astro", _page21],
    ["src/pages/[lang]/recipes/[recipeId].astro", _page22],
    ["src/pages/[lang]/retos/[challengeId].astro", _page23],
    ["src/pages/[lang]/retos-torneos/[challengeId].astro", _page24],
    ["src/pages/[lang]/[pageSlug].astro", _page25],
    ["src/pages/[lang]/index.astro", _page26],
    ["src/pages/index.astro", _page27]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "4dd7d718-0e3e-4a9b-b811-622329b4a544",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
