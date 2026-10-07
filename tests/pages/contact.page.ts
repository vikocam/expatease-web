import { type Page, type Locator } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectSelect: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly confirmationMessage: Locator;
  readonly sharedWhatsappCard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Neem contact op' });
    this.nameInput = page.getByLabel('Naam');
    this.emailInput = page.getByLabel('E-mail');
    this.subjectSelect = page.getByLabel('Onderwerp');
    this.messageInput = page.getByLabel('Bericht');
    this.submitButton = page.getByRole('button', { name: 'Verstuur bericht' });
    this.confirmationMessage = page.getByText('Bedankt — we nemen zo snel mogelijk contact op.');
    this.sharedWhatsappCard = page.getByRole('link', { name: /gedeeld WhatsApp-nummer/i });
  }

  async goto() {
    await this.page.goto('/contact/');
  }

  async fillAndSubmit(data: { name: string; email: string; message: string }) {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.messageInput.fill(data.message);
    await this.submitButton.click();
  }
}
