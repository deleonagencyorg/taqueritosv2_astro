import { AsyncLocalStorage } from 'node:async_hooks';

export interface RequestLocaleContext {
  locale: 'es' | 'en';
  commonTexts?: Record<string, string>;
}

declare global {
  var __requestLocale: AsyncLocalStorage<RequestLocaleContext> | undefined;
}

export const requestLocale =
  globalThis.__requestLocale ??= new AsyncLocalStorage<RequestLocaleContext>();
