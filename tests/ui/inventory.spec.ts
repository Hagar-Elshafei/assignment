import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { uiTestData } from '../../utils/data';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

test.beforeEach(async ({ page }) => {
  await page.goto(uiTestData.baseURL);
  loginPage = new LoginPage(page);
  await loginPage.login(uiTestData.validUser.username, uiTestData.validUser.password);
  inventoryPage = new InventoryPage(page);
});

test('Add product to cart', async ({ page }) => {
  await inventoryPage.verifyInventoryPageIsOpened();
  await inventoryPage.addFirstProductToCart();
  await inventoryPage.verifyProductAddedToShoppingCart();
});