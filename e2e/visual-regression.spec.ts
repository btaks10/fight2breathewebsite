import { test, expect } from '@playwright/test';

test.describe('Visual Regression', () => {
  test.describe('Resume Page', () => {
    test('desktop screenshot', async ({ page }) => {
      test.skip(true, 'Run manually to generate baseline screenshots');
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/workwithcaleigh');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('resume-desktop.png', {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    });

    test('mobile screenshot', async ({ page }) => {
      test.skip(true, 'Run manually to generate baseline screenshots');
      await page.setViewportSize({ width: 600, height: 900 });
      await page.goto('/workwithcaleigh');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('resume-mobile.png', {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    });

    test('small phone screenshot', async ({ page }) => {
      test.skip(true, 'Run manually to generate baseline screenshots');
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/workwithcaleigh');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('resume-small-phone.png', {
        fullPage: true,
        maxDiffPixelRatio: 0.01,
      });
    });
  });

  test.describe('Home Page', () => {
    test('hero section screenshot', async ({ page }) => {
      test.skip(true, 'Run manually to generate baseline screenshots');
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveScreenshot('home-hero.png', {
        maxDiffPixelRatio: 0.01,
      });
    });
  });
});
