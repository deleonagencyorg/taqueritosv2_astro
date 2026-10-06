import { cmsClient } from './client';
import { withSiteFilter } from './config';
import { TtlCache } from './runtime';

interface CmsRecipeRelation {
  name: string;
  slug: string;
}

interface CmsRecipe {
  id: string;
  title: string;
  slug: string;
  date?: string;
  people?: string;
  difficulty?: string;
  image?: string;
  gallery?: string[];
  type?: string;
  preparationTime?: number;
  video?: string;
  ingredients?: string[];
  category?: string;
  instructions?: string[];
  brands?: CmsRecipeRelation[];
  products?: CmsRecipeRelation[];
}

interface RecipesResponse {
  data: CmsRecipe[];
  pagination?: { total: number };
}

export interface SiteRecipe {
  id: string;
  slug: string;
  title: string;
  date: string;
  people: string;
  difficulty: string;
  image: string;
  gallery: string[];
  type: string;
  preparation_time: number;
  video: string;
  category: string;
  ingredients: string[];
  instructions: string[];
  brand: string[];
  product: string[];
}

function mapRecipe(item: CmsRecipe): SiteRecipe {
  return {
    id: item.slug || item.id,
    slug: item.slug || item.id,
    title: item.title || '',
    date: item.date || '',
    people: item.people || '',
    difficulty: item.difficulty || '',
    image: item.image || '',
    gallery: Array.isArray(item.gallery) ? item.gallery : [],
    type: item.type || (item.video ? 'video' : 'image'),
    preparation_time: item.preparationTime ?? 0,
    video: item.video || '',
    category: item.category || '',
    ingredients: Array.isArray(item.ingredients) ? item.ingredients : [],
    instructions: Array.isArray(item.instructions) ? item.instructions : [],
    brand: (item.brands ?? []).map((brand) => brand.slug),
    product: (item.products ?? []).map((product) => product.name || product.slug),
  };
}

const recipesByLocale = new TtlCache<string, Promise<SiteRecipe[]>>();

async function fetchRecipes(locale: string): Promise<SiteRecipe[]> {
  const items: CmsRecipe[] = [];
  for (let page = 1; page < 50; page++) {
    const response = await cmsClient.get<RecipesResponse>(
      'v1/recipes',
      withSiteFilter({ page, pageSize: 100, languageCode: locale })
    );
    const data = Array.isArray(response?.data) ? response.data : [];
    items.push(...data);
    const total = response?.pagination?.total ?? items.length;
    if (data.length === 0 || items.length >= total) break;
  }
  return items
    .map(mapRecipe)
    .sort((a, b) => (b.date ? new Date(b.date).getTime() : 0) - (a.date ? new Date(a.date).getTime() : 0));
}

export function getAllRecipes(locale: string = 'es'): Promise<SiteRecipe[]> {
  const cached = recipesByLocale.get(locale);
  if (cached) return cached;
  const request = fetchRecipes(locale).catch((error) => {
    recipesByLocale.delete(locale);
    console.error('[CMS] Error al obtener recetas:', error);
    return [] as SiteRecipe[];
  });
  recipesByLocale.set(locale, request);
  return request;
}

export async function getRecipeBySlug(slug: string, locale: string = 'es'): Promise<SiteRecipe | null> {
  const recipes = await getAllRecipes(locale);
  return recipes.find((recipe) => recipe.slug === slug) ?? null;
}
