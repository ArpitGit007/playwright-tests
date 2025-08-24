const { test } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { SearchPage } = require('../pages/SearchPage');

test('Search returns results', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.search('dress');

  const search = new SearchPage(page);
  await search.assertResultsContain('dress');
});
