const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.skip('End-to-end checkout (requires real account)', async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('valid@example.com', 'validpass');

  await home.search('dress');
  await home.addFirstItemToCart();

  await page.click('a[title="Proceed to checkout"]');
  await checkout.proceedToCheckoutFlow();
  await checkout.assertOrderConfirmation();
});
