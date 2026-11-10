import { expect, test } from '@playwright/test';

const GTM_ID = 'GTM-P5NQNXN';

test('Google Tag Manager se dispara en la carga y al cambiar de página', async ({ page }) => {
  const gtmRequests: string[] = [];
  const pageErrors: string[] = [];

  page.on('request', (request) => {
    const url = request.url();
    if (url.includes('googletagmanager.com/gtm.js')) {
      gtmRequests.push(url);
    }
  });
  page.on('pageerror', (error) => {
    pageErrors.push(error.message);
  });

  await page.goto('/es/', { waitUntil: 'domcontentloaded' });

  await expect
    .poll(() => gtmRequests.some((url) => url.includes(`id=${encodeURIComponent(GTM_ID)}`)))
    .toBe(true);

  await expect
    .poll(() =>
      page.evaluate(() => {
        const layer = window.dataLayer || [];
        return layer.some((entry) => entry && entry.event === 'gtm.js');
      })
    )
    .toBe(true);

  await page.evaluate(() => {
    window.__gtmNavMarker = true;
  });

  const requestsBeforeNav = gtmRequests.length;
  await page.locator('a[href="/es/recetas"]').first().click();
  await page.waitForURL('**/es/recetas**');

  const sameDocument = await page.evaluate(() => window.__gtmNavMarker === true);

  if (sameDocument) {
    await expect
      .poll(() =>
        page.evaluate(() => {
          const layer = window.dataLayer || [];
          return layer.some(
            (entry) =>
              entry &&
              entry.event === 'page_view' &&
              String(entry.page_path || '').includes('/es/recetas')
          );
        })
      )
      .toBe(true);
  } else {
    await expect.poll(() => gtmRequests.length).toBeGreaterThan(requestsBeforeNav);
  }

  await expect
    .poll(() =>
      page.evaluate((id) => {
        const manager = window.google_tag_manager;
        return Boolean(document.querySelector(`script[data-gtm-loader="${id}"]`) || (manager && manager[id]));
      }, GTM_ID)
    )
    .toBe(true);

  expect(pageErrors.filter((message) => /gtm|dataLayer|parentNode/i.test(message))).toEqual([]);
});
