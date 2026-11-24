import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test.describe('SauceDemo E2E Flow', () => {
  test('should login and add item to cart', async ({ page }) => {
    
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.getByText('Products')).toBeVisible();
  })
test('should show error message for locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(page.locator('[data-test="error"]')).toContainText('Sorry, this user has been locked out');
  });



  });
