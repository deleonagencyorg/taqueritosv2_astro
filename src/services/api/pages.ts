import { cmsClient } from './client';
import { withSiteFilter } from './config';
import { mediaUrl, videoPlaybackUrl, type CmsMultimedia } from './multimedia';
import { TtlCache } from './runtime';

export const CMS_HOME_SLUGS = ['inicio', 'home', 'index'];

export interface BannerProduct {
  hero: string;
  topText: string;
  leftText: string;
  rightText: string;
  buttonText: string;
  buttonUrl: string;
  colorTheme: string;
}

export interface BannerSlide {
  id?: string;
  type: 'image' | 'video' | 'product';
  product?: BannerProduct;
  desktop: string;
  mobile: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

interface CmsPageBanner {
  id?: string;
  type?: string;
  desktop?: CmsMultimedia | null;
  mobile?: CmsMultimedia | null;
  alt?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  link?: string;
  order?: number;
  product?: Partial<BannerProduct> | null;
}

interface CmsMediaRef {
  originalUrl?: string;
  seoUrl?: string;
}

export interface CMSPage {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  languageCode?: string;
  isHomepage?: boolean;
  featuredImage?: CmsMediaRef;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: CmsMediaRef;
  banners?: CmsPageBanner[];
}

interface CMSPagesResponse {
  data: CMSPage[];
}

function mapBanner(banner: CmsPageBanner): BannerSlide | null {
  if (banner.type === 'video') {
    const desktopVideo = videoPlaybackUrl(banner.desktop);
    const mobileVideo = videoPlaybackUrl(banner.mobile);
    if (desktopVideo || mobileVideo) {
      return {
        id: banner.id,
        type: 'video',
        desktop: desktopVideo || mobileVideo,
        mobile: mobileVideo || desktopVideo,
        alt: banner.alt || banner.title || '',
        title: banner.title || '',
        subtitle: banner.subtitle || '',
        description: banner.description || '',
        link: banner.link || '',
      };
    }
  }

  const desktop = mediaUrl(banner.desktop);
  const mobile = mediaUrl(banner.mobile);
  if (!desktop && !mobile) return null;

  if (banner.type === 'product') {
    return {
      id: banner.id,
      type: 'product',
      desktop: desktop || mobile,
      mobile: mobile || desktop,
      alt: banner.alt || banner.title || '',
      title: banner.title || '',
      subtitle: banner.subtitle || '',
      description: banner.description || '',
      link: banner.link || '',
      product: {
        hero: banner.product?.hero || '',
        topText: banner.product?.topText || '',
        leftText: banner.product?.leftText || '',
        rightText: banner.product?.rightText || '',
        buttonText: banner.product?.buttonText || '',
        buttonUrl: banner.product?.buttonUrl || '',
        colorTheme: banner.product?.colorTheme || '',
      },
    };
  }

  return {
    id: banner.id,
    type: 'image',
    desktop: desktop || mobile,
    mobile: mobile || desktop,
    alt: banner.alt || banner.title || '',
    title: banner.title || '',
    subtitle: banner.subtitle || '',
    description: banner.description || '',
    link: banner.link || '',
  };
}

const pagesByLocale = new TtlCache<string, Promise<CMSPage[]>>();

export function getAllPages(locale: string = 'es'): Promise<CMSPage[]> {
  const cached = pagesByLocale.get(locale);
  if (cached) return cached;
  const request = cmsClient
    .get<CMSPagesResponse>('v1/pages', withSiteFilter({ page: 1, pageSize: 100, languageCode: locale, status: 'published' }))
    .then((response) => (Array.isArray(response.data) ? response.data : []))
    .catch((error) => {
      pagesByLocale.delete(locale);
      console.error('[CMS] Error al obtener páginas:', error);
      return [] as CMSPage[];
    });
  pagesByLocale.set(locale, request);
  return request;
}

export function isHomePage(page: CMSPage): boolean {
  return page.isHomepage === true || CMS_HOME_SLUGS.includes((page.slug || '').toLowerCase());
}

export async function getPageBySlug(slug: string, locale: string = 'es'): Promise<CMSPage | null> {
  const pages = await getAllPages(locale);
  return pages.find((page) => page.slug === slug) ?? null;
}

export async function getHomePage(locale: string = 'es'): Promise<CMSPage | null> {
  const pages = await getAllPages(locale);
  return pages.find(isHomePage) ?? null;
}

export function getPageBanners(page: CMSPage | null): BannerSlide[] {
  return (page?.banners ?? [])
    .slice()
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map(mapBanner)
    .filter((banner): banner is BannerSlide => banner !== null);
}
