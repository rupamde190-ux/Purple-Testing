// Doc-Seq + Currency

import { test, expect } from '@playwright/test';

test('Employee Grade + Document Sequence + Currency + Sign Out', async ({ page }) => {
  test.setTimeout(120000);

  // Login
  await page.goto('https://dev.purplrp.com/#/login');
  await page.locator('#email').fill('rupamde190+CMF-new@gmail.com');
  await page.locator('#password').fill('45301adb');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**');

  
await page.goto('https://dev.purplrp.com/#/main/general/setup/designation/list');

await page.getByRole('button', { name: /\+?\s*Add/i }).click();  

await page.getByPlaceholder('Designation Name', { exact: true }).last().fill('Sales Associate');

// ==============================
// EFFECTIVE FROM
// ==============================

const effectiveFrom = page
  .getByPlaceholder('Effective From Date', { exact: true })
  .last();

await expect(effectiveFrom).toBeVisible({ timeout: 10000 });

await effectiveFrom.click();

// ==============================
// CALENDAR
// ==============================

const calendar = page.locator('.p-datepicker').last();

await expect(calendar).toBeVisible({ timeout: 10000 });

const previousMonth = calendar.locator('.p-datepicker-prev');

await expect(previousMonth).toBeVisible({ timeout: 10000 });

// September 2026 → April 2025
for (let i = 0; i < 17; i++) {
  await previousMonth.click();
}

// Select 1 April 2025
await calendar
  .locator('td:not(.p-datepicker-other-month)')
  .getByText('1', { exact: true })
  .click();

// ==============================
// VERIFY
// ==============================

await expect(effectiveFrom).toHaveValue('01/04/2025');

// ==============================
// SAVE
// ==============================

await page.getByRole('button', {name: 'Cancel',exact: true}).click();

  // ---------------- Currency ----------------
  await page.goto('https://dev.purplrp.com/#/main/general/setup/currency-master/list');

  await page.getByPlaceholder('Please Select Currency').click();
  await page.getByRole('option', { name: 'AED - United Arab Emirates' }).click(); 

  await page.getByRole('button', { name: 'Cancel' }).click();
  // await page.waitForURL('**/currency-master/list', { timeout: 60000 });
  
  // ---------------- Document Sequence ----------------
  await page.goto('https://dev.purplrp.com/#/main/general/setup/document-sequence/list');

  await page.getByRole('button', { name: 'Create New' }).click();

  await page.getByPlaceholder('Please Select Type').click();
  await page.getByRole('option', { name: 'Item Fulfillment' }).click();

  await page.getByPlaceholder('Prefix').fill('Iteam');
  await page.getByPlaceholder('Suffix').fill('/27-28');
  await page.getByPlaceholder('Maximum Digits').fill('7');
  await page.getByPlaceholder('Initial Number').fill('00');

  // Start Date
  await page.locator('#startDate0 input').click();
  await page.locator('.p-datepicker').last().locator('td:not(.p-datepicker-other-month)[aria-label="4"]').click();

  // End Date
  await page.locator('#endDate0 input').click();
  await page.locator('.p-datepicker').last().locator('td:not(.p-datepicker-other-month)[aria-label="29"]').click();

  await page.getByRole('button', { name: 'cancel' }).click();
  await page.waitForURL('**/document-sequence/list', { timeout: 60000 });

  // ---------------- Sign Out ----------------
  await page.waitForLoadState('networkidle');

  await page.locator('.TopbarChip img').click();
  await page.locator('.profile-menu-item.sign-out').click();

  await expect(page.locator('#email')).toBeVisible();
})      