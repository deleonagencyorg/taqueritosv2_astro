// src/services/api/recipes.ts
import { cmsClient } from './client';
import type { Recipe, CMSRecipesResponse, CMSRecipeRaw } from './types';

// Configuración obtenida estrictamente desde las variables de entorno
const BRAND_SLUG = import.meta.env.PUBLIC_CMS_BRAND_SLUG || 'taqueritos';
const TAQUERITOS_BRAND_ID = 'e52101f2-f83a-461f-979f-5350eed21a3c';

function slugify(text: string): string {
  return text
    .toString()
    .toLocaleLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function mapRecipe(item: CMSRecipeRaw): Recipe {
  const image = typeof item.image === 'string' ? item.image : item.image?.url || '';
  const prepTime = item.preparationTime ?? item.preparation_time ?? 0;
  const brandList = Array.isArray(item.brands) ? item.brands : [];
  const productList = Array.isArray(item.products) ? item.products : [];

  return {
    id: item.id,
    slug: item.slug || slugify(item.title),
    title: item.title,
    image: image,
    ['preview-image']: image,
    preparationTime: prepTime,
    preparation_time: prepTime,
    category: item.category || item.type || '',
    type: item.type || item.category || '',
    description: item.description || '',
    ingredients: Array.isArray(item.ingredients) ? item.ingredients : [],
    instructions: Array.isArray(item.instructions) ? item.instructions : [],
    people: item.people ?? item.servings ?? 1,
    servings: Number(item.people ?? item.servings ?? 1) || 1,
    difficulty: item.difficulty || '',
    gallery: Array.isArray(item.gallery) ? item.gallery : [],
    tags: Array.isArray(item.tags) ? item.tags : [],
    brands: brandList,
    products: productList,
    product: productList.map((p: any) => typeof p === 'string' ? p : p.name || p.slug || p.id),
    date: item.date || item.createdAt || '',
    video: item.video || '',
    metaTitle: item.metaTitle,
    metaDescription: item.metaDescription,
    metaKeywords: item.metaKeywords,
    ogTitle: item.ogTitle,
    ogDescription: item.ogDescription,
    ogImage: item.ogImage,
  };
}

/**
 * Filtra las recetas devueltas por el CMS para garantizar que PERTENECEN ÚNICAMENTE A LA MARCA TAQUERITOS.
 */
function filterTaqueritosOnly(recipes: CMSRecipeRaw[]): CMSRecipeRaw[] {
  if (!Array.isArray(recipes)) return [];
  return recipes.filter((item) => {
    const hasTaqueritosBrand = Array.isArray(item.brands) && item.brands.some((b: any) =>
      b.id === TAQUERITOS_BRAND_ID || (b.slug && b.slug.toLowerCase().includes('taqueritos'))
    );
    const isTaqueritosSlug = item.slug ? item.slug.toLowerCase().includes('taqueritos') : false;
    const isTaqueritosTitle = item.title ? item.title.toLowerCase().includes('taqueritos') : false;

    return hasTaqueritosBrand || isTaqueritosSlug || isTaqueritosTitle;
  });
}

/**
 * Obtiene todas las recetas del CMS filtradas únicamente para Taqueritos.
 */
export async function getAllRecipes(locale: string = 'es'): Promise<Recipe[]> {
  try {
    const response = await cmsClient.get<CMSRecipesResponse>('v1/recipes', {
      page: 1,
      pageSize: 100,
      brandSlug: BRAND_SLUG,
      languageCode: locale,
    });

    if (!response || !Array.isArray(response.data)) {
      return [];
    }

    const taqueritosRecipes = filterTaqueritosOnly(response.data);
    return taqueritosRecipes.map(mapRecipe);
  } catch (error) {
    console.error('Error al obtener recetas de Taqueritos desde el CMS:', error);
    return [];
  }
}

/**
 * Obtiene una receta por slug o ID desde el CMS, garantizando que pertenece a Taqueritos.
 */
export async function getRecipeBySlug(idOrSlug: string, locale: string = 'es'): Promise<Recipe | null> {
  try {
    const allRecipes = await getAllRecipes(locale);
    const matchedRecipe = allRecipes.find(
      (r) => r.id === idOrSlug || r.slug === idOrSlug
    );

    if (matchedRecipe) {
      return matchedRecipe;
    }

    const isUuid = /^[0-9a-fA-F-]{36}$/.test(idOrSlug);
    if (isUuid) {
      const response = await cmsClient.get<CMSRecipeRaw>(`v1/recipes/${idOrSlug}`, {
        languageCode: locale,
      });

      if (response && response.id) {
        const recipe = mapRecipe(response);
        const isTaqueritos =
          (Array.isArray(recipe.brands) && recipe.brands.some((b: any) => b.id === TAQUERITOS_BRAND_ID || (b.slug && b.slug.includes('taqueritos')))) ||
          (recipe.slug && recipe.slug.toLowerCase().includes('taqueritos')) ||
          (recipe.title && recipe.title.toLowerCase().includes('taqueritos'));

        if (isTaqueritos) {
          return recipe;
        }
      }
    }

    return null;
  } catch (error) {
    console.error(`Error al obtener receta ${idOrSlug} de Taqueritos desde el CMS:`, error);
    return null;
  }
}