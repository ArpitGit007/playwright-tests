const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartLayer = '#layer_cart';
    this.cartQtyBadge = '.shopping_cart .ajax_cart_quantity';
    this.cartSummaryRows = '#cart_summary .cart_item';
  }

  async assertCartHasItems() {
    const count = await this.page.locator(this.cartSummaryRows).count();
    expect(count).toBeGreaterThan(0);
  }
}
module.exports = { CartPage };
