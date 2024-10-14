
import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage:Locator;
  readonly errorMessageButton:Locator;
  

  constructor(private readonly page: Page) {
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('.error-message-container.error');
    this.errorMessageButton = page.locator('[data-test="error-button"]');

  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyErrorMessageIsDisplayed(){
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessageButton).toBeVisible();
    await expect(this.errorMessage).toHaveText(/.*Username and password do not match.*/);
  }
}
        