import { type Page, type Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly bookConsultationLink: Locator;
  readonly wizardHeading: Locator;
  readonly cookieBanner: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { level: 1 });
    this.bookConsultationLink = page.getByRole('main').getByRole('link', { name: 'Boek een consult' });
    this.wizardHeading = page.getByRole('heading', { name: 'Vind je oplossing in 3 stappen' });
    this.cookieBanner = page.getByRole('dialog', { name: 'Cookiemelding' });
  }

  async goto() {
    await this.page.goto('/');
  }

  /** Dismiss the cookie banner so it doesn't intercept clicks in other tests. */
  async acceptCookies() {
    const acceptButton = this.page.getByRole('button', { name: 'Alles accepteren' });
    if (await acceptButton.isVisible().catch(() => false)) {
      await acceptButton.click();
      await expect(this.cookieBanner).toBeHidden();
    }
  }

  /** Runs the 3-step triage wizard and returns the resulting WhatsApp link. */
  async completeWizard(situation: string, region: string, urgency: string) {
    await this.page.getByRole('button', { name: situation }).click();
    await this.page.getByRole('button', { name: region }).click();
    await this.page.getByRole('button', { name: urgency }).click();
  }

  get whatsappResultLink(): Locator {
    return this.page.getByRole('link', { name: 'Stuur direct via WhatsApp' });
  }

  navLink(name: string): Locator {
    return this.page.getByRole('navigation').getByRole('link', { name });
  }
}
