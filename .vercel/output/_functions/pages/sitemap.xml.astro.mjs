import { _ as __vite_glob_0_0 } from '../chunks/baked-pasta-with-taqueritos-cheese-fusion_BVTdNRg9.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/cesar-salad-with-bullfighting-chicken-and-taqueritos-fusion-cheese_vsq5q62_.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/crazy-corn-toreados_CD6BSHyn.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/crunchy-folded-tortillas-with-taqueritos-cheese-fusion_B1bBzJhL.mjs';
import { _ as __vite_glob_0_4 } from '../chunks/empanized-chicken-wings-torado-taqueritos-and-fusion-cheese_CbE5IVoo.mjs';
import { _ as __vite_glob_0_5 } from '../chunks/fired-cheese-with-taqueritos_BZTolZXA.mjs';
import { _ as __vite_glob_0_6 } from '../chunks/ham-and-cheese-cheese-with-chile-fusion-cheese-taqueritos_DE5fx7o5.mjs';
import { _ as __vite_glob_0_7 } from '../chunks/ice-cream-taqueritos-chile-toreado_Ca41Rit5.mjs';
import { _ as __vite_glob_0_8 } from '../chunks/jalapeno-poppers-with-taqueritos-chile-toreado_DIdIgznO.mjs';
import { _ as __vite_glob_0_9 } from '../chunks/mango-prepared-with-taqueritos-fusion-cheese-and-chile-toreado_DZpltVVV.mjs';
import { _ as __vite_glob_0_10 } from '../chunks/omelette-with-taqueritos-chile-toreado_BpemzOyg.mjs';
import { _ as __vite_glob_0_11 } from '../chunks/roasted-meat-with-taqueritos_Bngsyd_1.mjs';
import { _ as __vite_glob_0_12 } from '../chunks/small-balls-covered-of-zibas-with-taqueritos_piBpm4aB.mjs';
import { _ as __vite_glob_0_13 } from '../chunks/spicy-shrimp-with-taqueritos_CumBt8Me.mjs';
import { _ as __vite_glob_0_14 } from '../chunks/taquedogs_JNk01OyN.mjs';
import { _ as __vite_glob_0_15 } from '../chunks/towed-taled-chile-taqueritos-cheese-dice_Be_oHT78.mjs';
import { _ as __vite_glob_0_16 } from '../chunks/veggie-sticks-with-taqueritos-chile-toreado_DRUDeh_M.mjs';
import { _ as __vite_glob_1_16, a as __vite_glob_1_15, b as __vite_glob_1_14, c as __vite_glob_1_13, d as __vite_glob_1_12, e as __vite_glob_1_11, f as __vite_glob_1_10, g as __vite_glob_1_9, h as __vite_glob_1_8, i as __vite_glob_1_7, j as __vite_glob_1_6, k as __vite_glob_1_5, l as __vite_glob_1_4, m as __vite_glob_1_3, n as __vite_glob_1_2, o as __vite_glob_1_1, p as __vite_glob_1_0 } from '../chunks/taquedogs_rwPL-3nY.mjs';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { r as removeBase, i as isRemotePath, p as prependForwardSlash } from '../chunks/path_mk0j0CbE.mjs';
import { V as VALID_INPUT_FORMATS } from '../chunks/consts_BmVDRGlB.mjs';
import { A as AstroError, U as UnknownContentCollectionError, c as createComponent, R as RenderUndefinedEntryError, u as unescapeHTML, a as renderTemplate, d as renderUniqueStylesheet, e as renderScriptElement, f as createHeadAndContent, r as renderComponent } from '../chunks/astro/server_BXq2V0OX.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';
import { e as enProducts } from '../chunks/products_2ywXeEut.mjs';
export { renderers } from '../renderers.mjs';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('../chunks/_astro_data-layer-content_DHoCpe74.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://taqueritos.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  maxAge: z.number().optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('../chunks/content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('../chunks/content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('../chunks/_astro_assets_BChcoeJd.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('../chunks/content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const config = {
  supportedLocales: ["es", "en"]};

const staticPages = ["/", "/nosotros", "/about-us", "/contacto", "/contact", "/blog"];
const menuUrls = [
  "/marcas",
  "/brands",
  "/productos",
  "/products",
  "/recetas",
  "/recipes",
  "/retos-torneos",
  "/challenges-tournaments",
  "/blog",
  "/contacto",
  "/contact",
  "/encontranos",
  "/find-us"
];
const GET = async () => {
  const posts = await getCollection("blog");
  const staticPagesWithLang = staticPages.flatMap(
    (page) => config.supportedLocales.map((lang) => `/${lang}${page}`)
  );
  const menuUrlsWithLang = menuUrls.flatMap((url) => {
    const lang = url.startsWith("/en") ? "en" : url.startsWith("/es") ? "es" : null;
    if (lang && config.supportedLocales.includes(lang)) {
      return [`/${lang}${url.replace(`/${lang}`, "")}`];
    }
    return config.supportedLocales.map((lng) => `/${lng}${url}`);
  });
  const blogPosts = posts.map(
    (post) => `/${post.slug.split("/")[0]}/blog/${post.slug.split("/")[1]}`
  );
  const challengesModules = /* #__PURE__ */ Object.assign({});
  const challengeUrls = Object.values(challengesModules).map((mod) => mod.default).filter((challenge) => challenge && challenge.id).map((challenge) => `/es/retos-torneos/${challenge.id}`);
  const recipesEnModules = /* #__PURE__ */ Object.assign({"../locales/en/recipes/baked-pasta-with-taqueritos-cheese-fusion.json": __vite_glob_0_0,"../locales/en/recipes/cesar-salad-with-bullfighting-chicken-and-taqueritos-fusion-cheese.json": __vite_glob_0_1,"../locales/en/recipes/crazy-corn-toreados.json": __vite_glob_0_2,"../locales/en/recipes/crunchy-folded-tortillas-with-taqueritos-cheese-fusion.json": __vite_glob_0_3,"../locales/en/recipes/empanized-chicken-wings-torado-taqueritos-and-fusion-cheese.json": __vite_glob_0_4,"../locales/en/recipes/fired-cheese-with-taqueritos.json": __vite_glob_0_5,"../locales/en/recipes/ham-and-cheese-cheese-with-chile-fusion-cheese-taqueritos.json": __vite_glob_0_6,"../locales/en/recipes/ice-cream-taqueritos-chile-toreado.json": __vite_glob_0_7,"../locales/en/recipes/jalapeno-poppers-with-taqueritos-chile-toreado.json": __vite_glob_0_8,"../locales/en/recipes/mango-prepared-with-taqueritos-fusion-cheese-and-chile-toreado.json": __vite_glob_0_9,"../locales/en/recipes/omelette-with-taqueritos-chile-toreado.json": __vite_glob_0_10,"../locales/en/recipes/roasted-meat-with-taqueritos.json": __vite_glob_0_11,"../locales/en/recipes/small-balls-covered-of-zibas-with-taqueritos.json": __vite_glob_0_12,"../locales/en/recipes/spicy-shrimp-with-taqueritos.json": __vite_glob_0_13,"../locales/en/recipes/taquedogs.json": __vite_glob_0_14,"../locales/en/recipes/towed-taled-chile-taqueritos-cheese-dice.json": __vite_glob_0_15,"../locales/en/recipes/veggie-sticks-with-taqueritos-chile-toreado.json": __vite_glob_0_16});
  const recipesEsModules = /* #__PURE__ */ Object.assign({"../locales/es/recipes/alitas-de-pollo-empanizadas-taqueritostoreado-y-queso-fusion.json": __vite_glob_1_0,"../locales/es/recipes/camarones-picaros-con-taqueritos.json": __vite_glob_1_1,"../locales/es/recipes/carne-asada-con-taqueritos.json": __vite_glob_1_2,"../locales/es/recipes/dados-de-queso-toreados-con-taqueritos-chile-toreado.json": __vite_glob_1_3,"../locales/es/recipes/dobladas-crunchy-con-taqueritos-queso-fusion.json": __vite_glob_1_4,"../locales/es/recipes/elotes-locos-con-taqueritos-chile-toreado.json": __vite_glob_1_5,"../locales/es/recipes/ensalada-cesar-con-pollo-toreado-y-taqueritos-queso-fusion.json": __vite_glob_1_6,"../locales/es/recipes/ice-cream-taqueritos-chile-toreado.json": __vite_glob_1_7,"../locales/es/recipes/jalapeno-poppers-con-taqueritos-chile-toreado.json": __vite_glob_1_8,"../locales/es/recipes/mango-preparado-con-taqueritos-queso-fusion-y-chile-toreado.json": __vite_glob_1_9,"../locales/es/recipes/mini-bolitas-de-queso-cubierta-de-zibas-con-taqueritos.json": __vite_glob_1_10,"../locales/es/recipes/ommelette-con-taqueritos-chile-toreado.json": __vite_glob_1_11,"../locales/es/recipes/pasta-horneada-con-taqueritos-queso-fusion.json": __vite_glob_1_12,"../locales/es/recipes/quesadilla-de-jamon-y-queso-con-taqueritos-chile-queso-fusion.json": __vite_glob_1_13,"../locales/es/recipes/queso-frito-con-taqueritos.json": __vite_glob_1_14,"../locales/es/recipes/rajitas-con-taqueritos-chile-toreado.json": __vite_glob_1_15,"../locales/es/recipes/taquedogs.json": __vite_glob_1_16});
  const recipeUrlsEn = Object.values(recipesEnModules).map((mod) => mod.default).filter((recipe) => recipe && recipe.id).map((recipe) => `/en/recipes/${recipe.id}`);
  const recipeUrlsEs = Object.values(recipesEsModules).map((mod) => mod.default).filter((recipe) => recipe && recipe.id).map((recipe) => `/es/recipes/${recipe.id}`);
  const enItems = enProducts?.items || enProducts || [];
  const productUrlsEn = (Array.isArray(enItems) ? enItems : []).filter((p) => p && p.id).map((p) => `/en/products/${p.id}`);
  const allUrls = [
    ...staticPagesWithLang,
    ...menuUrlsWithLang,
    ...blogPosts,
    ...challengeUrls,
    ...recipeUrlsEn,
    ...recipeUrlsEs,
    ...productUrlsEn
  ];
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls.map((url) => `
        <url>
          <loc>https://taqueritos.com${url}</loc>
          <lastmod>${(/* @__PURE__ */ new Date()).toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `).join("")}
    </urlset>`.trim(),
    {
      headers: {
        "Content-Type": "application/xml"
      }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
