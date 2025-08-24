const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

class SearchPage extends BasePage {
  constructor(page) {
    super(page);
    this.resultsList = '.product_list';
  }
  async assertResultsContain(term) {
    await expect(this.page.locator(this.resultsList)).toContainText(term, { ignoreCase: true });
  }
}
module.exports = { SearchPage };
