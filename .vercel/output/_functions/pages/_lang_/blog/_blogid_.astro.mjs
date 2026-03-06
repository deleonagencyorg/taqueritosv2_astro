/* empty css                                            */
import { g as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import { $ as $$Index } from '../../../chunks/index_BQtX9q7m.mjs';
import { s as setLocale } from '../../../chunks/i18n_BuYowHj0.mjs';
import { $ as $$MainLayout } from '../../../chunks/MainLayout_CEv0P3ec.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://taqueritos.com");
async function getStaticPaths() {
  const locales = ["en", "es"];
  const paths = [];
  const modules = /* #__PURE__ */ Object.assign({});
  for (const locale of locales) {
    const allPosts = [];
    for (const p in modules) {
      const parts = p.split("/");
      const fileLocale = parts[4];
      if (fileLocale !== locale) continue;
      const mod = await modules[p]();
      const fm = mod.frontmatter || {};
      if (fm && fm.slug && fm.id) {
        const content = typeof mod.compiledContent === "function" ? mod.compiledContent() : "";
        allPosts.push({ ...fm, content });
      }
    }
    for (const blogPost of allPosts) {
      paths.push({
        params: { lang: locale, blogId: blogPost.slug || blogPost.id },
        props: { blogPost, currentLang: locale, allBlogPosts: allPosts }
      });
    }
  }
  return paths;
}
const $$blogId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$blogId;
  const { blogPost, currentLang, allBlogPosts } = Astro2.props;
  const { lang, blogId } = Astro2.params;
  setLocale(lang);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": blogPost.title }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogDetail", $$Index, { "blogPost": blogPost, "currentLang": currentLang, "allBlogPosts": allBlogPosts })} ` })}`;
}, "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/blog/[blogId].astro", void 0);

const $$file = "/Volumes/EMMA SSD/Proyectos/taqueritosv2_astro/src/pages/[lang]/blog/[blogId].astro";
const $$url = "/[lang]/blog/[blogId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$blogId,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
