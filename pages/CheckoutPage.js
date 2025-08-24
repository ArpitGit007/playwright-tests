const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.proceedSummary = '.cart_navigation a.button[href*="order&step=1"]';
    this.proceedAddress = 'button[name="processAddress"]';
    this.termsCheckbox = '#cgv';
    this.proceedShipping = 'button[name="processCarrier"]';
    this.payByBankWire = '.bankwire';
    this.confirmOrderBtn = '#cart_navigation button[type="submit"]';
    this.confirmMsg = '.cheque-indent strong, .alert.alert-success';
  }

  async proceedToCheckoutFlow() {
    // assumes already has item in cart and on summary page
    if (await this.page.locator(this.proceedSummary).count()) {
      await this.page.click(this.proceedSummary);
    }
    if (await this.page.locator(this.proceedAddress).count()) {
      await this.page.click(this.proceedAddress);
    }
    if (await this.page.locator(this.termsCheckbox).count()) {
      await this.page.check(this.termsCheckbox);
    }
    if (await this.page.locator(this.proceedShipping).count()) {
      await this.page.click(this.proceedShipping);
    }
    if (await this.page.locator(this.payByBankWire).count()) {
      await this.page.click(this.payByBankWire);
    }
    if (await this.page.locator(this.confirmOrderBtn).count()) {
      await this.page.click(this.confirmOrderBtn);
    }
  }

  async assertOrderConfirmation() {
    await expect(this.page.locator(this.confirmMsg)).toBeVisible();
  }
}
module.exports = { CheckoutPage };
