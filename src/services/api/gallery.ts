import { cmsClient } from './client';
import { withSiteFilter } from './config';
import { mediaUrl, type CmsMultimedia } from './multimedia';

interface CmsGalleryImage {
  id: string;
  alt: string;
  caption?: string;
  order: number;
  image?: CmsMultimedia | null;
}

export interface GalleryItem {
  url: string;
  alt: string;
}

interface GalleryListResponse {
  data: CmsGalleryImage[];
}

export async function getGalleryImages(locale: string = 'es'): Promise<GalleryItem[]> {
  try {
    const response = await cmsClient.get<GalleryListResponse>(
      'v1/gallery',
      withSiteFilter({
        page: 1,
        pageSize: 100,
        languageCode: locale,
      })
    );

    const items = (response.data ?? [])
      .slice()
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map((item) => ({
        url: mediaUrl(item.image),
        alt: item.alt || '',
      }))
      .filter((item) => item.url);

    console.log(`[CMS] Galería recibida: ${items.length} imágenes (${locale})`);
    return items;
  } catch (error) {
    console.error('[CMS Error al obtener galería:', error);
    return [];
  }
}
