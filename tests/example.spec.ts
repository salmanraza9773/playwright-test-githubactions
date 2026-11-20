import { test, expect } from '@playwright/test';

test.describe('SauceDemo E2E Flow', () => {
  test('should login and add item to cart', async ({ page }) => {
    // 1. Navigate to demo site
    await page.goto('https://saucedemo.com');

    // 2. Login using user-facing locators
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    // 3. Verify login succeeded
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.getByText('Products')).toBeVisible();

    // 4. Add backpack to cart and verify badge count
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });
});
