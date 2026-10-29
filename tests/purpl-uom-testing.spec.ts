import { test, expect } from '@playwright/test';

test('Launch application', async ({ page }) => {
    await page.goto('https://dev.purplrp.com/#/login');
  await page.locator('#email').fill('rupamde190+CMF-new@gmail.com');
  await page.locator('#password').fill('45301adb');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.locator('i').first().click();
await page.locator('i').first().click();
await page.locator('a').filter({ hasText: /^General$/ }).click();
await page.getByRole('link', { name: 'Setup' }).click();
await page.locator('div').filter({ hasText: 'Unit of Measure' }).nth(5).click();
await page.getByText('Create New', { exact: true }).click();

  
  await page.locator('input[placeholder="UOM Name"]').fill('Milliliters');
 await page.locator('input[placeholder="Abbreviation"]').fill('ML2');

  
  //await page.getByPlaceholder('Please Select Parent Department').click();
  //await page.getByRole('option', { name: 'Accounts' }).click();

  //await page.getByRole('combobox', { name: 'Please Select Effective From'}).click();

  // Select the day 17 from the calendar
  //await page.locator('.p-datepicker-calendar').getByText('17', { exact: true }).click();

  await page.getByRole('button', { name: 'Save' }).click();
 await page.waitForLoadState('networkidle');

  const avatar = page.locator('.TopbarChip img');
  await expect(avatar).toBeVisible({ timeout: 60000 });
  await avatar.click();

  await expect(page.locator('.profile-menu-container')).toBeVisible();
  await page.locator('.profile-menu-item.sign-out').click();
// await page.getByText('Cancel', { exact: true }).click();
});