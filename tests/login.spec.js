const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login Tests', () => {
  test('Invalid login shows error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('wrong@example.com', 'invalidpass');
    await login.assertInvalidLogin();
  });

  // NOTE: Replace credentials & expected name with a real account before enabling this test.
  test.skip('Valid login succeeds (provide real creds)', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('ar@mail.com', 'ar123');
    await login.assertValidLogin('Valid User');
  });
});
