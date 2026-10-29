import { test, expect } from '@playwright/test';

test('Create PR', async ({ page }) => {
  await page.goto('https://dev.purplrp.com/#/login');
  await page.locator('#email').fill('rupamde190+CMF-new@gmail.com');
  await page.locator('#password').fill('45301adb');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.goto('https://dev.purplrp.com/#/main/general/setup/payment-term/list');
  
// ---------------- Payment term ----------------
// Child part

await page.getByRole('button', { name: /\+?\s*Add/i }).click();  
// Fill Payment Term Name
await page.getByPlaceholder('Payment Term Name', { exact: true }).last().fill('150 Days');
// Fill Description
await page.getByPlaceholder('Description', { exact: true }).last().fill('150 Days');

// ==============================
// EFFECTIVE FROM
// ==============================

const paymentEffectiveFrom =
  page.getByPlaceholder('Effective From', { exact: true }).last();

await expect(paymentEffectiveFrom).toBeVisible({ timeout: 10000 });

await paymentEffectiveFrom.click();

// Go back 17 months to April 2025
for (let i = 0; i < 17; i++) {
  await page.locator('.p-datepicker-prev').click();
}

// Select 1 April 2025
await page
  .locator('.p-datepicker-calendar td:not(.p-datepicker-other-month)')
  .getByText('1', { exact: true })
  .click();

// SAVE
await page.getByRole('button', { name: 'Save' }).click();

  // ---------------- Currency ----------------
  await page.goto('https://dev.purplrp.com/#/main/general/setup/currency-master/list');

  await page.getByPlaceholder('Please Select Currency').click();
  await page.getByRole('option', { name: 'EUR - Italy' }).click(); 
//save//
  await page.getByRole('button', { name: 'Save' }).click();
//   await page.waitForURL('**/currency-master/list', { timeout: 60000 });

// ---------------- Employee Designation ----------------
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

await page.getByRole('button', {name: 'Save',exact: true}).click();


})