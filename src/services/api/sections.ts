import { cmsClient } from './client';
import { withSiteFilter } from './config';
import { mediaUrl, type CmsMultimedia } from './multimedia';

interface SectionResponse<T> {
  data: T[];
}

interface CmsFooterPhone {
  country: string;
  flag: string;
  number: string;
  flagImage?: CmsMultimedia | null;
}

export interface FooterPhoneView {
  country: string;
  flag: string;
  flagImageUrl: string;
  number: string;
  telHref: string;
}

async function loadSection<T, R>(endpoint: string, locale: string, map: (item: T) => R): Promise<R[]> {
  try {
    const response = await cmsClient.get<SectionResponse<T>>(endpoint, withSiteFilter({ languageCode: locale }));
    return (response.data ?? []).map(map);
  } catch (error) {
    console.error(`[CMS] Error al obtener ${endpoint}:`, error);
    return [];
  }
}

export function getFooterPhones(locale: string = 'es'): Promise<FooterPhoneView[]> {
  return loadSection<CmsFooterPhone, FooterPhoneView>('v1/footer-phones', locale, (item) => ({
    country: item.country || '',
    flag: item.flag || '',
    flagImageUrl: mediaUrl(item.flagImage),
    number: item.number || '',
    telHref: `tel:+${(item.number || '').replace(/\D/g, '').replace(/^00?1(?=809)/, '1')}`,
  }));
}

interface CmsAboutTimelineItem {
  year: string;
  title: string;
  text: string;
  image?: CmsMultimedia | null;
  mobileImage?: CmsMultimedia | null;
}

export interface AboutTimelineItemView {
  year: string;
  title: string;
  text: string;
  imageUrl: string;
  mobileImageUrl: string;
}

export function getAboutTimeline(locale: string = 'es'): Promise<AboutTimelineItemView[]> {
  return loadSection<CmsAboutTimelineItem, AboutTimelineItemView>('v1/about-timeline', locale, (item) => ({
    year: item.year || '',
    title: item.title || '',
    text: item.text || '',
    imageUrl: mediaUrl(item.image),
    mobileImageUrl: mediaUrl(item.mobileImage) || mediaUrl(item.image),
  }));
}

interface CmsDeliveryApp {
  name: string;
  url: string;
  icon?: CmsMultimedia | null;
}

export interface DeliveryAppView {
  app_name: string;
  app_url: string;
  app_icon: string;
}

export function getDeliveryApps(locale: string = 'es'): Promise<DeliveryAppView[]> {
  return loadSection<CmsDeliveryApp, DeliveryAppView>('v1/delivery-apps', locale, (item) => ({
    app_name: item.name || '',
    app_url: item.url || '',
    app_icon: mediaUrl(item.icon),
  }));
}

export interface StockistView {
  id: string;
  name: string;
  link: string;
  icon: string;
}

export async function getStockists(locale: string = 'es'): Promise<StockistView[]> {
  const apps = await getDeliveryApps(locale);
  return apps.map((app, index) => ({
    id: `${index}-${app.app_name}`,
    name: app.app_name,
    link: app.app_url,
    icon: app.app_icon,
  }));
}
