import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('home page loads', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Fight2Breathe/);
  });

  test('story page loads', async ({ page }) => {
    await page.goto('/story');
    await expect(page.locator('h1')).toContainText(/fighting/i);
  });

  test('about page loads', async ({ page }) => {
    await page.goto('/about');
    await expect(page.locator('h1')).toContainText('Caleigh');
  });

  test('shop page loads', async ({ page }) => {
    await page.goto('/shop');
    await expect(page.locator('h1')).toContainText('Wear the Fight');
  });

  test('podcast page loads', async ({ page }) => {
    await page.goto('/podcast');
    await expect(page.locator('h1')).toContainText('Our Fight to Breathe');
  });

  test('connect page loads', async ({ page }) => {
    await page.goto('/connect');
    await expect(page.locator('h1')).toContainText('Connect');
  });

  test('resume page loads', async ({ page }) => {
    await page.goto('/workwithcaleigh');
    await expect(page.locator('.r-name')).toContainText('Caleigh');
  });

  test('nav links work from home page', async ({ page }) => {
    await page.goto('/');

    // Click Story link
    await page.click('a[href="/story"]');
    await expect(page).toHaveURL('/story');

    // Go back and click Work link
    await page.goto('/');
    await page.click('a[href="/about"]');
    await expect(page).toHaveURL('/about');
  });
});
