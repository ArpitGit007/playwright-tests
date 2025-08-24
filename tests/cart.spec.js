const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('Add first item to cart (layer opens)', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.search('dress');
  await home.addFirstItemToCart();
  await expect(page.locator('#layer_cart')).toBeVisible();
});
