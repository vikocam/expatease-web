import { test, expect } from '@playwright/test';
import { HomePage } from './pages/home.page';

test.describe('Spreekuur pop-up', () => {
  test('opens after the cookie choice and can be closed', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    const popup = page.getByRole('dialog', { name: 'Wekelijks inloopspreekuur' });
    await expect(popup).toBeHidden();
    await home.acceptCookies();
    await expect(popup).toBeVisible();
    await expect(popup.getByRole('link', { name: 'Meer over het spreekuur' })).toBeVisible();
    await popup.getByRole('button', { name: 'Later' }).click();
    await expect(popup).toBeHidden();
  });

  test('shows only once per visit', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.acceptCookies();
    const popup = page.getByRole('dialog', { name: 'Wekelijks inloopspreekuur' });
    await expect(popup).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(popup).toBeHidden();
    await page.goto('/over-ons/');
    await page.waitForTimeout(1800);
    await expect(popup).toBeHidden();
  });

  test('does not open on the spreekuur page itself', async ({ page }) => {
    await page.goto('/spreekuur/');
    await expect(page.locator('#spreekuur-popup')).toHaveCount(0);
  });
});
