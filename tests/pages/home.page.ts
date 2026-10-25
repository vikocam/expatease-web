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
    this.bookConsultationLink = page.getByRole('link', { name: 'Book a consultation' });
    this.wizardHeading = page.getByRole('heading', { name: 'Vind je oplossing in 2 stappen' });
    this.cookieBanner = page.getByRole('dialog', { name: 'Cookiemelding' });
  }

  /** Keep the spreekuur pop-up out of the way for tests that don't cover it. */
  async skipSpreekuurPopup() {
    await this.page.addInitScript(() => sessionStorage.setItem('spreekuur-popup-seen', '1'));
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

  /** Runs the 2-step triage wizard and returns the resulting WhatsApp link. */
  async completeWizard(situation: string, urgency: string) {
    await this.page.getByRole('button', { name: situation }).click();
    await this.page.getByRole('button', { name: urgency }).click();
  }

  get whatsappResultLink(): Locator {
    return this.page.getByRole('link', { name: 'Stuur direct via WhatsApp' });
  }

  navLink(name: string): Locator {
    return this.page.getByRole('navigation').getByRole('link', { name });
  }
}
