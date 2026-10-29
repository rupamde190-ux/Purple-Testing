import { test, expect } from '@playwright/test';

test('Create Role', async ({ page }) => {
  await page.goto('https://dev.purplrp.com/#/login');
  await page.locator('#email').fill('rupamde190+TR@gmail.com');
  await page.locator('#password').fill('0295B6F0D');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });

  await page.goto('https://dev.purplrp.com/#/main/general/setup/role/list');

  await page.getByText('Create New', { exact: true }).click();

  await page.locator('input[placeholder="Role Name"]').fill('Approver_3');

  await page.getByPlaceholder('Please Select Business Unit').click();
  await page.getByRole('option', { name: 'Default Business Unit' }).click();

  await page.getByPlaceholder('Please Select Department').click();
  await page.getByRole('option', { name: 'Head Office' }).click();

  // Select General in the permission panel
  await page.locator('strong').filter({ hasText: 'General' }).nth(0).click();

  // Select Setup in the middle panel
  await page.locator('strong').filter({ hasText: 'Setup' }).nth(0).click();

  const accessPoints = [  'Company Info',  'Fiscal Calendar',  'Subsidiary',  'Account Code',  'General Preference'];

  for (const name of accessPoints) {
    const row = page.locator('tr').filter({ has: page.getByText(name, { exact: true })});
    // Create
    await row.locator('td').nth(1).locator('.p-inputswitch').click();
  }
  // await page.getByRole('button', { name: 'Save' }).click();

  // // Sign Out
  // await page.waitForLoadState('networkidle');

  // const avatar = page.locator('.TopbarChip img');
  // await expect(avatar).toBeVisible({ timeout: 60000 });
  // await avatar.click();

  // await expect(page.locator('.profile-menu-container')).toBeVisible();
  // await page.locator('.profile-menu-item.sign-out').click();

  // // Login page should appear
  // await expect(page.locator('#email')).toBeVisible({ timeout: 60000 });
  
})