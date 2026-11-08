import { test, expect } from '@playwright/test';

const cases = [
  { lang: 'en', h1: 'Legal Advice & Dispute Resolution for Expats in The Hague', wizard: 'Find your solution in 2 steps', accept: 'Accept all', nav: 'Services' },
  { lang: 'es', h1: 'Asesoría jurídica y resolución de conflictos para expats en La Haya', wizard: 'Encuentra tu solución en 2 pasos', accept: 'Aceptar todo', nav: 'Servicios' },
  { lang: 'fr', h1: 'Conseil juridique et résolution de litiges pour expatriés à La Haye', wizard: 'Trouvez votre solution en 2 étapes', accept: 'Tout accepter', nav: 'Services' },
];

for (const c of cases) {
  test.describe(`Home in ${c.lang}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.addInitScript(() => sessionStorage.setItem('spreekuur-popup-seen', '1'));
      await page.goto(`/${c.lang}/`);
    });

    test('renders in the right language', async ({ page }) => {
      await expect(page.locator('html')).toHaveAttribute('lang', c.lang);
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(c.h1);
      await expect(page.getByRole('heading', { name: c.wizard })).toBeVisible();
      await expect(page.getByRole('button', { name: c.accept })).toBeVisible();
    });

    test('navigation stays in the same language', async ({ page, isMobile }) => {
      test.skip(isMobile, 'main navigation is hidden on mobile');
      await page.getByRole('navigation').getByRole('link', { name: c.nav }).click();
      await expect(page).toHaveURL(new RegExp(`/${c.lang}/diensten/$`));
      await expect(page.locator('html')).toHaveAttribute('lang', c.lang);
    });
  });
}

test('language switcher opens the same page in another language', async ({ page, isMobile }) => {
  test.skip(isMobile, 'language switcher is hidden on mobile');
  await page.addInitScript(() => sessionStorage.setItem('spreekuur-popup-seen', '1'));
  await page.goto('/diensten/huurrecht/');
  await page.locator('.langsel').getByRole('link', { name: 'ES' }).click();
  await expect(page).toHaveURL(/\/es\/diensten\/huurrecht\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Alquiler y vivienda para expats en La Haya');
});

test('translated legal pages point to the binding Dutch version', async ({ page }) => {
  await page.addInitScript(() => sessionStorage.setItem('spreekuur-popup-seen', '1'));
  await page.goto('/en/voorwaarden/');
  await expect(page.locator('.legal-note').getByRole('link', { name: 'Dutch version' })).toHaveAttribute('href', '/voorwaarden/');
});
