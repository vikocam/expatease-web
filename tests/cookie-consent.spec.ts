import { test, expect } from '@playwright/test';
import { HomePage } from './pages/home.page';

test.describe('Cookie consent banner', () => {
  test.beforeEach(async ({ page }) => {
    // Start with a clean slate — no prior consent stored.
    await page.goto('/');
    await page.evaluate(() => localStorage.removeItem('expatease-cookie-consent'));
    await page.reload();
  });

  test('shows on first visit with all three choices visible', async ({ page }) => {
    const home = new HomePage(page);
    await expect(home.cookieBanner).toBeVisible();
    await expect(page.getByRole('button', { name: 'Alles accepteren' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Alleen noodzakelijk' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Instellingen' })).toBeVisible();
  });

  test('accepting all hides the banner and persists the choice', async ({ page }) => {
    const home = new HomePage(page);
    await page.getByRole('button', { name: 'Alles accepteren' }).click();
    await expect(home.cookieBanner).toBeHidden();

    // Reload — a returning visitor with stored consent should not see it again.
    await page.reload();
    await expect(home.cookieBanner).toBeHidden();
  });

  test('"Instellingen" reveals granular analytics/marketing toggles', async ({ page }) => {
    await page.getByRole('button', { name: 'Instellingen' }).click();
    await expect(page.getByText('Analytisch')).toBeVisible();
    await expect(page.getByText('Marketing')).toBeVisible();

    const necessaryCheckbox = page.getByRole('checkbox').first();
    await expect(necessaryCheckbox).toBeDisabled();
    await expect(necessaryCheckbox).toBeChecked();
  });

  test('rejecting non-essential cookies still hides the banner', async ({ page }) => {
    const home = new HomePage(page);
    await page.getByRole('button', { name: 'Alleen noodzakelijk' }).click();
    await expect(home.cookieBanner).toBeHidden();
  });
});
