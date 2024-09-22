const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});