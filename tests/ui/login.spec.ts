
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { uiTestData } from '../../utils/data';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  await page.goto(uiTestData.baseURL);
  loginPage = new LoginPage(page);
});


test('Login with valid credentials', async ({ page }) => {
  await loginPage.login(uiTestData.validUser.username, uiTestData.validUser.password);
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.verifyInventoryPageIsOpened();
});

test('Login with invalid credentials', async ({ page }) => {
  await loginPage.login(uiTestData.invalidUser.username, uiTestData.invalidUser.password);
  await loginPage.verifyErrorMessageIsDisplayed();
});