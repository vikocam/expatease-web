import { test, expect } from '@playwright/test';
import { HomePage } from './pages/home.page';

test.describe('Triage wizard', () => {
  let home: HomePage;

  test.beforeEach(async ({ page }) => {
    home = new HomePage(page);
    await home.goto();
    await home.acceptCookies();
  });

  test('completing all three steps reveals a prefilled WhatsApp link', async ({ page }) => {
    await home.completeWizard('Huurrecht & Wonen', 'Den Haag', 'Urgent');

    await expect(home.whatsappResultLink).toBeVisible();
    const href = await home.whatsappResultLink.getAttribute('href');

    expect(href).toContain('wa.me');
    expect(href).toContain('Huurrecht');
    expect(href).toContain('Den%20Haag');
    expect(href).toContain('Urgent');
  });

  test('shows a fallback email option alongside WhatsApp', async ({ page }) => {
    await home.completeWizard('Kooprecht & Consument', 'Delft', 'Deze week');
    await expect(page.getByRole('link', { name: 'of liever per e-mail' })).toBeVisible();
  });

  test('"Andere keuze maken" resets the wizard back to step one', async ({ page }) => {
    await home.completeWizard('Overheid & Administratie', 'Rijswijk', 'Ik oriënteer me nog');
    await expect(home.whatsappResultLink).toBeVisible();

    await page.getByText('Andere keuze maken').click();
    await expect(page.getByRole('button', { name: 'Huurrecht & Wonen' })).toBeVisible();
    await expect(home.whatsappResultLink).toBeHidden();
  });

  test('progress dots fill in as the visitor advances', async ({ page }) => {
    const dots = page.locator('.wsteps span');
    await expect(dots.nth(0)).not.toHaveClass(/done/);

    await page.getByRole('button', { name: 'Huurrecht & Wonen' }).click();
    await expect(dots.nth(0)).toHaveClass(/done/);
  });
});
