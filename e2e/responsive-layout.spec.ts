import { test, expect } from '@playwright/test';

test.describe('Main Site Responsive Layout', () => {
  test.describe('Desktop', () => {
    test.use({ viewport: { width: 1280, height: 800 } });

    test('desktop nav is visible', async ({ page }) => {
      await page.goto('/');
      const desktopNav = page.locator('.hidden.md\\:flex');
      await expect(desktopNav).toBeVisible();
    });

    test('mobile menu button is hidden on desktop', async ({ page }) => {
      await page.goto('/');
      const menuButton = page.locator('button[aria-label="Toggle menu"]');
      await expect(menuButton).toBeHidden();
    });
  });

  test.describe('Mobile', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('hamburger menu is visible', async ({ page }) => {
      await page.goto('/');
      const menuButton = page.locator('button[aria-label="Toggle menu"]');
      await expect(menuButton).toBeVisible();
    });

    test('desktop nav is hidden on mobile', async ({ page }) => {
      await page.goto('/');
      const desktopNav = page.locator('.hidden.md\\:flex');
      await expect(desktopNav).toBeHidden();
    });

    test('mobile menu opens and shows all links', async ({ page }) => {
      await page.goto('/');
      await page.click('button[aria-label="Toggle menu"]');
      await expect(page.getByText('Home')).toBeVisible();
      await expect(page.getByText('Story')).toBeVisible();
      await expect(page.getByText('Shop')).toBeVisible();
    });

    test('page does not horizontally overflow', async ({ page }) => {
      await page.goto('/');
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      const viewportWidth = await page.evaluate(() => window.innerWidth);
      expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1);
    });
  });
});
