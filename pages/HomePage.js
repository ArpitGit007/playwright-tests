const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.searchBox = '#search_query_top';
    this.searchBtn = 'button[name="submit_search"]';
    this.firstProduct = '.product_list .product-container >> nth=0';
    this.addToCartBtn = '.ajax_add_to_cart_button';
    this.proceedToCheckoutOnLayer = 'a[title="Proceed to checkout"]';
  }

  async goto() { await super.goto('/'); }

  async search(term) {
    await this.page.fill(this.searchBox, term);
    await this.page.click(this.searchBtn);
  }

  async addFirstItemToCart() {
    // open first product hover and add to cart
    await this.page.hover(this.firstProduct);
    await this.page.click(`${this.firstProduct} ${this.addToCartBtn}`);
    await this.page.waitForSelector('#layer_cart', { state: 'visible' });
    // close layer or proceed
  }
}
module.exports = { HomePage };
