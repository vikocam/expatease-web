import { test, expect } from '@playwright/test';

test.describe('Spreekuur pop-up', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem(
      'expataid-cookie-consent',
      JSON.stringify({ necessary: true, analytics: false })
    ));
  });

  test('opens on first visit and links to the Spreekuur page', async ({ page }) => {
    await page.goto('/');
    const popup = page.getByRole('dialog', { name: 'Wekelijks inloopspreekuur' });
    await expect(popup).toBeVisible();
    await expect(popup.getByRole('link', { name: 'Meer over het Spreekuur' })).toHaveAttribute('href', /\/spreekuur\/$/);
  });

  test('closes with Escape and does not return in the same session', async ({ page }) => {
    await page.goto('/');
    const popup = page.getByRole('dialog', { name: 'Wekelijks inloopspreekuur' });
    await expect(popup).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(popup).toBeHidden();

    await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/\/contact\/$/);
    await expect(popup).toBeHidden();
  });

  test('"Misschien later" dismisses it', async ({ page }) => {
    await page.goto('/');
    const popup = page.getByRole('dialog', { name: 'Wekelijks inloopspreekuur' });
    await popup.getByRole('button', { name: 'Misschien later' }).click();
    await expect(popup).toBeHidden();
  });

  test('is not shown on the Spreekuur page itself', async ({ page }) => {
    await page.goto('/spreekuur/');
    await expect(page.getByRole('heading', { name: 'Wekelijks inloopspreekuur', level: 1 })).toBeVisible();
    await expect(page.getByRole('dialog', { name: 'Wekelijks inloopspreekuur' })).toBeHidden();
  });
});
