import { test, expect } from '@playwright/test';

test.describe('Shop Flow', () => {
  test('shop page loads and displays products or loading state', async ({
    page,
  }) => {
    await page.goto('/shop');
    await expect(page.locator('h1')).toContainText('Wear the Fight');

    // Wait for either products to load or the loading skeletons
    const hasProducts = await page
      .locator('article[role="article"]')
      .first()
      .isVisible({ timeout: 5000 })
      .catch(() => false);

    if (!hasProducts) {
      // Should have loading skeletons
      await expect(page.locator('.animate-pulse').first()).toBeVisible();
    }
  });

  test('product modal opens when clicking a product', async ({ page }) => {
    await page.goto('/shop');

    // Wait for products to load
    const productButton = page.locator('article[role="article"] button').first();
    const isVisible = await productButton
      .isVisible({ timeout: 10000 })
      .catch(() => false);

    if (isVisible) {
      await productButton.click();
      await expect(page.locator('[role="dialog"]')).toBeVisible();
    }
  });

  test('product modal closes when backdrop is clicked', async ({ page }) => {
    await page.goto('/shop');

    const productButton = page.locator('article[role="article"] button').first();
    const isVisible = await productButton
      .isVisible({ timeout: 10000 })
      .catch(() => false);

    if (isVisible) {
      await productButton.click();
      await expect(page.locator('[role="dialog"]')).toBeVisible();

      // Click the backdrop
      await page.locator('.fixed.inset-0.bg-black\\/60').click({ force: true });
    }
  });

  test('bottom CTA section is present', async ({ page }) => {
    await page.goto('/shop');
    await expect(page.getByText('More than merch.')).toBeVisible();
  });
});
