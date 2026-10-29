import { test, expect } from '@playwright/test';

test('Launch application', async ({ page }) => {
test.setTimeout(120000);

  await page.goto('https://dev.purplrp.com/#/login');

  await page.locator('#email').fill('rupamde190+CMF-new@gmail.com');
  await page.locator('#password').fill('45301adb');

  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.waitForURL('**/main/**', { timeout: 60000 });

  await page.goto(
    'https://dev.purplrp.com/#/main/general/setup/project/list'
  );

  await page.getByText('Create New', { exact: true }).click();
  await page.locator('input[placeholder="Project Name"]').fill('CRC Micro'); 
    await page .locator('input[placeholder="Project ID"]') .fill("test ID 1");

  await page.getByPlaceholder('Please Select Project Status').click();

await page
  .getByRole('option', { name: 'Awarded', exact: true })
  .click();

// ==============================
// Start Date
// ==============================

const startDate = page.locator('#startDate input');

await expect(startDate).toBeVisible({ timeout: 10000 });

await startDate.click();

// Calendar opens at September 2026.
// Go back 5 months to April 2026.
for (let i = 0; i < 5; i++) {
  await page.locator('.p-datepicker-prev').click();
}

// Select 1 April 2026
await page
  .locator('.p-datepicker-calendar td:not(.p-datepicker-other-month)').getByText('1', { exact: true }).click();

// Verify the selected date
await expect(startDate).toHaveValue('04/01/2026');
await page.getByRole('button', { name: 'Save' }).click();
})