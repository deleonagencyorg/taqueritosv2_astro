// Centralized environment access with safe fallbacks
// This file prevents undefined environment variables from breaking the app

// Client-exposed (must start with PUBLIC_)
export const PUBLIC_PROMOTION_ID: number = Number((((import.meta as any).env.PUBLIC_PROMOTION_ID) ?? '').toString()) || 0;
export const PUBLIC_DEBUG_CREATORS = ((import.meta as any).env.PUBLIC_DEBUG_CREATORS || 'false') === 'true';
export const PUBLIC_GTM_ID = (import.meta as any).env.PUBLIC_GTM_ID || 'GTM-XXXXXX';
export const PUBLIC_API_HOST = (import.meta as any).env.PUBLIC_API_HOST || '';
export const PUBLIC_API_TOKEN = (import.meta as any).env.PUBLIC_API_TOKEN || '';
export const PUBLIC_CONTACT_API_HOST = (import.meta as any).env.PUBLIC_CONTACT_API_HOST || '';
export const PUBLIC_CONTACT_API_TOKEN = (import.meta as any).env.PUBLIC_CONTACT_API_TOKEN || '';
export const PUBLIC_CONTACT_FORM_PATH = (import.meta as any).env.PUBLIC_CONTACT_FORM_PATH || '/v1/auth/email/custom';
export const PUBLIC_SUSCRIBE_FROM_PATH = (import.meta as any).env.PUBLIC_SUSCRIBE_FROM_PATH || '/v1/auth/subscribe';

// Server-only (must NOT start with PUBLIC_)
// These use PUBLIC_ vars as fallback for backward compatibility
export const CONTACT_API_HOST = (import.meta as any).env.CONTACT_API_HOST || PUBLIC_CONTACT_API_HOST || '';
export const API_TOKEN = (import.meta as any).env.API_TOKEN || PUBLIC_API_TOKEN || '';
export const SITE_URL = (import.meta as any).env.SITE_URL || 'https://taqueritos.com';

// Logging level for server-side logs
export const LOG_LEVEL = (import.meta as any).env.LOG_LEVEL || 'info';

export const isDev = (import.meta as any).env.DEV;
