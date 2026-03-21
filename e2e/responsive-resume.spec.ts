import { test, expect } from '@playwright/test';

test.describe('Resume Page Responsive Behavior', () => {
  test.describe('Desktop', () => {
    test.use({ viewport: { width: 1280, height: 800 } });

    test('experience bullets are visible without interaction', async ({ page }) => {
      await page.goto('/workwithcaleigh');
      await page.waitForSelector('.r-entry');

      // On desktop, details content should be visible
      const firstEntryBullets = page.locator('.r-entry .r-eb').first();
      await expect(firstEntryBullets).toBeVisible();
    });

    test('summary elements are non-interactive on desktop', async ({ page }) => {
      await page.goto('/workwithcaleigh');
      await page.waitForSelector('.r-entry');

      // On desktop, summary should have pointer-events: none
      const summary = page.locator('.r-entry summary').first();
      const pointerEvents = await summary.evaluate(
        (el) => window.getComputedStyle(el).pointerEvents
      );
      expect(pointerEvents).toBe('none');
    });

    test('two-column grid layout', async ({ page }) => {
      await page.goto('/workwithcaleigh');
      const grid = page.locator('.r-grid');
      const display = await grid.evaluate(
        (el) => window.getComputedStyle(el).display
      );
      expect(display).toBe('grid');
    });

    test('stats are displayed', async ({ page }) => {
      await page.goto('/workwithcaleigh');
      await expect(page.locator('.r-hstat').first()).toBeVisible();
    });
  });

  test.describe('Mobile (600px)', () => {
    test.use({ viewport: { width: 600, height: 900 } });

    test('details are collapsed by default', async ({ page }) => {
      await page.goto('/workwithcaleigh');
      await page.waitForSelector('.r-entry');

      // Details should be collapsed (not have open attribute)
      const details = page.locator('details.r-entry').first();
      const isOpen = await details.getAttribute('open');
      expect(isOpen).toBeNull();
    });

    test('details can be toggled open', async ({ page }) => {
      await page.goto('/workwithcaleigh');
      await page.waitForSelector('.r-entry');

      const summary = page.locator('.r-entry summary').first();
      await summary.click();

      const details = page.locator('details.r-entry').first();
      await expect(details).toHaveAttribute('open', '');
    });

    test('single column layout', async ({ page }) => {
      await page.goto('/workwithcaleigh');
      const grid = page.locator('.r-grid');
      const columns = await grid.evaluate(
        (el) => window.getComputedStyle(el).gridTemplateColumns
      );
      // Single column should have only one column value
      const colCount = columns.split(' ').length;
      expect(colCount).toBe(1);
    });
  });

  test.describe('Small Phone (375px)', () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test('page renders without horizontal overflow', async ({ page }) => {
      await page.goto('/workwithcaleigh');
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      const viewportWidth = await page.evaluate(() => window.innerWidth);
      expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1); // +1 for rounding
    });

    test('stats are visible', async ({ page }) => {
      await page.goto('/workwithcaleigh');
      const stat = page.locator('.r-hstat').first();
      await expect(stat).toBeVisible();
    });

    test('media table does not overflow', async ({ page }) => {
      await page.goto('/workwithcaleigh');
      const table = page.locator('.r-media-table');
      if (await table.isVisible()) {
        const tableWidth = await table.evaluate((el) => el.scrollWidth);
        const containerWidth = await table.evaluate(
          (el) => el.parentElement?.clientWidth ?? 0
        );
        expect(tableWidth).toBeLessThanOrEqual(containerWidth + 1);
      }
    });
  });
});
