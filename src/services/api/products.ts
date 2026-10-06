import { cmsClient } from './client';
import { withSiteFilter } from './config';
import { cmsMediaSrc, type CmsMultimedia } from './multimedia';
import { TtlCache } from './runtime';

interface CmsNutritionRow {
  label: string;
  value: string;
}

interface CmsProduct {
  id: string;
  name: string;
  slug: string;
  image?: string | CmsMultimedia | null;
  imageMobile?: string;
  backgroundColor?: string;
  category?: string;
  headerTextColor?: string;
  colorButton?: string;
  textColor?: string;
  description?: string;
  available?: string;
  backgroundImage?: string;
  isNew?: boolean;
  nameDescription?: string;
  secondColorButton?: string;
  borderColor?: string;
  sizes?: Array<{ value: string; image: string }>;
  weight?: string[];
  nutrition?: { title?: string; serving?: string; rows?: CmsNutritionRow[]; disclaimer?: string };
  metaTitle?: string;
  metaDescription?: string;
}

interface ProductsResponse {
  data: CmsProduct[];
  pagination?: { total: number };
}

export interface NutritionRow {
  label: string;
  value: string;
}

export interface SiteProduct {
  id: string;
  name: string;
  name_description: string;
  image: string;
  background_color: string;
  text_color: string;
  header_text_color: string;
  color_button: string;
  second_color_button: string;
  boder_color: string;
  description: string;
  available: string;
  background_image: string;
  isnew: boolean;
  category: string;
  sizes: Array<{ value: string; image: string }>;
  weight: string[];
  nutrition: Record<string, string>;
  nutritionRows: NutritionRow[];
  nutritionTitle: string;
  nutritionDisclaimer: string;
  metaTitle: string;
  metaDescription: string;
}

function mapProduct(item: CmsProduct): SiteProduct {
  const rows = (item.nutrition?.rows ?? []).filter((row) => row.label || row.value);
  return {
    id: item.slug || item.id,
    name: item.name || '',
    name_description: item.nameDescription || '',
    image: cmsMediaSrc(item.image as CmsMultimedia | string | null | undefined),
    background_color: item.backgroundColor || '',
    text_color: item.textColor || '',
    header_text_color: item.headerTextColor || '',
    color_button: item.colorButton || '',
    second_color_button: item.secondColorButton || '',
    boder_color: item.borderColor || '',
    description: item.description || '',
    available: item.available || '',
    background_image: item.backgroundImage || '',
    isnew: item.isNew === true,
    category: item.category || '',
    sizes: Array.isArray(item.sizes) ? item.sizes : [],
    weight: Array.isArray(item.weight) ? item.weight : [],
    nutrition: Object.fromEntries(rows.map((row, index) => [String(index), row.value])),
    nutritionRows: rows,
    nutritionTitle: item.nutrition?.title || '',
    nutritionDisclaimer: item.nutrition?.disclaimer || '',
    metaTitle: item.metaTitle || '',
    metaDescription: item.metaDescription || '',
  };
}

const productsByLocale = new TtlCache<string, Promise<SiteProduct[]>>();

async function fetchProducts(locale: string): Promise<SiteProduct[]> {
  const items: CmsProduct[] = [];
  for (let page = 1; page < 50; page++) {
    const response = await cmsClient.get<ProductsResponse>(
      'v1/products',
      withSiteFilter({ page, pageSize: 100, languageCode: locale })
    );
    const data = Array.isArray(response?.data) ? response.data : [];
    items.push(...data);
    const total = response?.pagination?.total ?? items.length;
    if (data.length === 0 || items.length >= total) break;
  }
  return items.map(mapProduct);
}

export function getAllProducts(locale: string = 'es'): Promise<SiteProduct[]> {
  const cached = productsByLocale.get(locale);
  if (cached) return cached;
  const request = fetchProducts(locale).catch((error) => {
    productsByLocale.delete(locale);
    console.error('[CMS] Error al obtener productos:', error);
    return [] as SiteProduct[];
  });
  productsByLocale.set(locale, request);
  return request;
}

export async function getProductBySlug(slug: string, locale: string = 'es'): Promise<SiteProduct | null> {
  const products = await getAllProducts(locale);
  return products.find((product) => product.id === slug) ?? null;
}
