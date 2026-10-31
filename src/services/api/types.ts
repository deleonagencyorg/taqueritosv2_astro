// src/services/api/types.ts
export interface RecipeBrand {
  id: string;
  name: string;
  slug?: string;
}

export interface RecipeProduct {
  id: string;
  name: string;
  slug?: string;
}

export interface Recipe {
  id: string;
  slug?: string;
  title: string;
  image?: string;
  ['preview-image']?: string;
  preparation_time?: number;
  preparationTime?: number;
  people?: string | number;
  servings?: number;
  difficulty?: string;
  ingredients?: string[];
  instructions?: string[];
  category?: string;
  type?: string;
  gallery?: string[];
  brand?: string[];
  brands?: RecipeBrand[];
  products?: RecipeProduct[];
  product?: string[];
  description?: string;
  tags?: string[];
  date?: string;
  video?: string;
  // seo
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string | { url: string };
}

export interface CMSRecipeRaw {
  id: string;
  slug?: string;
  title: string;
  image?: string | { url: string };
  preparationTime?: number;
  preparation_time?: number;
  category?: string;
  type?: string;
  description?: string;
  ingredients?: string[];
  instructions?: string[];
  people?: string | number;
  servings?: number;
  difficulty?: string;
  gallery?: string[];
  brands?: RecipeBrand[];
  products?: RecipeProduct[];
  tags?: string[];
  date?: string;
  video?: string;
  createdAt?: string;
  // seo
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string | { url: string };
}

export interface CMSRecipesResponse {
  data: CMSRecipeRaw[];
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
    pageCount?: number;
  };
}

export interface ProductSize {
  value: string;
  image?: string;
}

export interface ProductNutritionRow {
  label: string;
  value: string;
}

export interface ProductNutrition {
  title?: string;
  serving?: string;
  rows?: ProductNutritionRow[];
  disclaimer?: string;
  [key: string]: any;
}

export interface Product {
  id: string;
  slug?: string;
  name: string;
  category?: string;
  image?: string;
  imageMobile?: string;
  description?: string;
  backgroundColor?: string;
  headerTextColor?: string;
  textColor?: string;
  colorButton?: string;
  
  // snake_case aliases for UI components compatibility
  background_color?: string;
  header_text_color?: string;
  header_color?: string;
  text_color?: string;
  color_button?: string;
  boder_color?: string;
  second_color_button?: string;
  isnew?: boolean;

  sizes?: ProductSize[];
  weight?: string[];
  nutrition?: ProductNutrition;
  brandId?: string;

  // SEO
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string | { url: string };
}

export interface CMSProductRaw {
  id: string;
  slug?: string;
  name: string;
  category?: string;
  image?: string | { url: string };
  imageMobile?: string | { url: string };
  description?: string;
  backgroundColor?: string;
  background_color?: string;
  headerTextColor?: string;
  header_color?: string;
  textColor?: string;
  text_color?: string;
  colorButton?: string;
  color_button?: string;
  sizes?: ProductSize[];
  weight?: string[];
  nutrition?: any;
  brandId?: string;

  // SEO
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string | { url: string };
}

export interface CMSProductsResponse {
  data: CMSProductRaw[];
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
    pageCount?: number;
  };
}

export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: { url: string } | string | null;
  canonical?: string;
}

export interface CMSPageRaw {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  featuredImage?: { url: string };
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: { url: string } | null;
  seo?: SEO;
}

export interface TopMessage {
  id: string;
  text: string;
  link?: string;
  isActive: boolean;
  backgroundColor?: string;
  textColor?: string;
}

export interface CMSTopMessageRaw {
  id: string;
  text: string;
  link?: string;
  is_active?: boolean;
  background_color?: string;
  text_color?: string;
}

export interface CMSTopMessagesResponse {
  data: CMSTopMessageRaw[];
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
  };
}