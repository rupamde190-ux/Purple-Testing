import { test, expect } from '@playwright/test';

test('Open Purpl application', async ({ page }) => {
  await page.goto('https://dev.purplrp.com/');
  await expect(page).toHaveTitle(/Purpl/);
});
