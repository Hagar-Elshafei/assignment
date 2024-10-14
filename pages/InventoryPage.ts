
import { expect, Locator, Page } from '@playwright/test';

export class InventoryPage {

  readonly productsTitle: Locator;
  readonly addToCartButton: Locator;
  readonly shoppingCartBadge: Locator;


  constructor(private readonly page: Page) {
    this.productsTitle = page.getByText('Products');
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' }).first();
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
  }

  async verifyInventoryPageIsOpened() {
    await expect(this.productsTitle).toBeVisible();
  }

  async addFirstProductToCart(){
    await this.addToCartButton.click();
  }

  async verifyProductAddedToShoppingCart() {
  await expect(this.shoppingCartBadge).toBeVisible();
  await expect(this.shoppingCartBadge).toHaveText('1');
  }
}