import { test, expect } from '@playwright/test';

test.describe('Accessibility Widget', () => {
  test('widget button is visible on main pages', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.locator('button[aria-label="Accessibility Options (Alt + A)"]')
    ).toBeVisible();
  });

  test('widget is NOT present on resume page', async ({ page }) => {
    await page.goto('/workwithcaleigh');
    await expect(
      page.locator('button[aria-label="Accessibility Options (Alt + A)"]')
    ).toHaveCount(0);
  });

  test('widget opens when clicked', async ({ page }) => {
    await page.goto('/');
    await page.click('button[aria-label="Accessibility Options (Alt + A)"]');
    await expect(page.locator('[role="dialog"]')).toBeVisible();
    await expect(page.getByText('Accessibility Options')).toBeVisible();
  });

  test('Alt+A keyboard shortcut toggles widget', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Alt+a');
    await expect(page.locator('[role="dialog"]')).toBeVisible();
    await page.keyboard.press('Alt+a');
    await expect(page.locator('[role="dialog"]')).toHaveCount(0);
  });

  test('text size can be changed', async ({ page }) => {
    await page.goto('/');
    await page.click('button[aria-label="Accessibility Options (Alt + A)"]');

    // Click Large text size
    await page.getByText('Large', { exact: true }).click();

    // Check that font size changed on html element
    const fontSize = await page.evaluate(
      () => document.documentElement.style.fontSize
    );
    expect(fontSize).toBe('18px');
  });

  test('high contrast toggle works', async ({ page }) => {
    await page.goto('/');
    await page.click('button[aria-label="Accessibility Options (Alt + A)"]');

    const toggle = page.locator('button[role="switch"][aria-checked="false"]').first();
    await toggle.click();

    const hasClass = await page.evaluate(() =>
      document.documentElement.classList.contains('high-contrast')
    );
    expect(hasClass).toBe(true);
  });

  test('settings persist in localStorage', async ({ page }) => {
    await page.goto('/');
    await page.click('button[aria-label="Accessibility Options (Alt + A)"]');
    await page.getByText('Large', { exact: true }).click();

    const stored = await page.evaluate(() =>
      localStorage.getItem('accessibilitySettings')
    );
    expect(stored).toBeTruthy();
    const parsed = JSON.parse(stored!);
    expect(parsed.textSize).toBe('large');
  });
});
