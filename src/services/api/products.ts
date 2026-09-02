// src/services/api/products.ts
import { cmsClient } from './client';
import type { Product, CMSProductsResponse, CMSProductRaw } from './types';

// Configuración obtenida estrictamente desde las variables de entorno
const BRAND_SLUG = import.meta.env.PUBLIC_CMS_BRAND_SLUG || 'taqueritos';
const TAQUERITOS_BRAND_ID = 'e52101f2-f83a-461f-979f-5350eed21a3c';

function mapProduct(item: CMSProductRaw): Product {
  const image = typeof item.image === 'string' ? item.image : item.image?.url || '';
  const imageMobile = typeof item.imageMobile === 'string' ? item.imageMobile : item.imageMobile?.url || image;
  const bgColor = item.backgroundColor || item.background_color || '#150404';
  const textColor = item.textColor || item.text_color || '#FFFFFF';
  const headerColor = item.headerTextColor || item.header_color || '#FFFFFF';
  const buttonColor = item.colorButton || item.color_button || '#520406';

  return {
    id: item.id,
    slug: item.slug || item.id,
    name: item.name,
    category: item.category,
    image,
    imageMobile,
    description: item.description,
    backgroundColor: bgColor,
    background_color: bgColor,
    headerTextColor: headerColor,
    header_text_color: headerColor,
    header_color: headerColor,
    textColor: textColor,
    text_color: textColor,
    colorButton: buttonColor,
    color_button: buttonColor,
    boder_color: buttonColor,
    sizes: Array.isArray(item.sizes) ? item.sizes : [],
    weight: Array.isArray(item.weight) ? item.weight : [],
    nutrition: item.nutrition,
    brandId: item.brandId,
    metaTitle: item.metaTitle,
    metaDescription: item.metaDescription,
    metaKeywords: item.metaKeywords,
    ogTitle: item.ogTitle,
    ogDescription: item.ogDescription,
    ogImage: item.ogImage,
  };
}

/**
 * Filtra la respuesta del CMS para garantizar que SOLO se retornan productos de la marca TAQUERITOS.
 */
function filterTaqueritosOnly(products: CMSProductRaw[]): CMSProductRaw[] {
  if (!Array.isArray(products)) return [];
  return products.filter((item) => {
    const isTaqueritosBrand = item.brandId === TAQUERITOS_BRAND_ID;
    const isTaqueritosSlug = item.slug ? item.slug.toLowerCase().includes('taqueritos') : false;
    const isTaqueritosName = item.name ? item.name.toLowerCase().includes('taqueritos') : false;
    return isTaqueritosBrand || isTaqueritosSlug || isTaqueritosName;
  });
}

/**
 * Obtiene todos los productos del CMS filtrados estrictamente para la marca Taqueritos.
 */
export async function getAllProducts(locale: string = 'es'): Promise<Product[]> {
  try {
    const response = await cmsClient.get<CMSProductsResponse>('v1/products', {
      page: 1,
      pageSize: 100,
      brandSlug: BRAND_SLUG,
      languageCode: locale,
    });

    if (!response || !Array.isArray(response.data)) {
      return [];
    }

    const taqueritosData = filterTaqueritosOnly(response.data);
    return taqueritosData.map(mapProduct);
  } catch (error) {
    console.error('Error al obtener productos de Taqueritos desde el CMS:', error);
    return [];
  }
}

/**
 * Obtiene un producto por su slug o ID desde el CMS, garantizando que pertenece a Taqueritos.
 */
export async function getProductBySlug(idOrSlug: string, locale: string = 'es'): Promise<Product | null> {
  try {
    // 1. Intentar buscar dentro del listado filtrado de Taqueritos
    const allProducts = await getAllProducts(locale);
    const matchedProduct = allProducts.find(
      (p) => p.id === idOrSlug || p.slug === idOrSlug
    );

    if (matchedProduct) {
      return matchedProduct;
    }

    // 2. Si no estuviera en el listado inicial y se consulta por UUID directa
    const isUuid = /^[0-9a-fA-F-]{36}$/.test(idOrSlug);
    if (isUuid) {
      const response = await cmsClient.get<CMSProductRaw>(`v1/products/${idOrSlug}`, {
        languageCode: locale,
      });

      if (response && response.id) {
        const product = mapProduct(response);
        const isTaqueritos =
          product.brandId === TAQUERITOS_BRAND_ID ||
          (product.slug && product.slug.toLowerCase().includes('taqueritos')) ||
          (product.name && product.name.toLowerCase().includes('taqueritos'));

        if (isTaqueritos) {
          return product;
        }
      }
    }

    return null;
  } catch (error) {
    console.error(`Error al obtener producto ${idOrSlug} de Taqueritos desde el CMS:`, error);
    return null;
  }
}