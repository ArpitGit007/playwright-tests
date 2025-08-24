const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.emailInput = '#email';
    this.passwordInput = '#passwd';
    this.signInBtn = '#SubmitLogin';
    this.errorMsg = '.alert-danger';
    this.accountName = '.account span, .account';
    this.signInLink = 'a.login';
  }

  async goto() { await super.goto('/'); }

  async openLogin() { await this.page.click(this.signInLink); }

  async login(email, password) {
    if (await this.page.locator(this.emailInput).count() === 0) {
      await this.openLogin();
    }
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.signInBtn);
  }

  async assertValidLogin(expectedName) {
    await expect(this.page.locator(this.accountName)).toContainText(expectedName);
  }

  async assertInvalidLogin() {
    await expect(this.page.locator(this.errorMsg)).toBeVisible();
  }
}
module.exports = { LoginPage };
