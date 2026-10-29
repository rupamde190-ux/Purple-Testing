// apInvoice

import { test, expect } from '@playwright/test';

test('Ap Invoice', async ({ page }) => {
  await page.goto('https://dev.purplrp.com/#/login');
  await page.locator('#email').fill('rupamde190+TR@gmail.com');
  await page.locator('#password').fill('0295B6F0D');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.waitForLoadState('networkidle');
  await page.goto('https://dev.purplrp.com/#/main/finance/payable/ap-invoice/list');
  await page.getByText('Create New', { exact: true }).click();

  // Open Invoice Upload dialog
  await page.getByRole('button', { name: 'Upload' }).first().click();

  const uploadDialog = page.getByRole('dialog').filter({ hasText: 'Invoice Upload' });
  await expect(uploadDialog).toBeVisible();

  // Business Unit
  await uploadDialog.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Default Business Unit' }).click();
  
  // Upload file
  const fileChooserPromise = page.waitForEvent('filechooser');
  await uploadDialog.getByRole('button', { name: 'Upload' }).click();
  
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('C:/Report/report(11).pdf');
  
  // Wait until dialog closes
  await expect(uploadDialog).toBeHidden({ timeout: 30000 });
  
  // Select first row from In Process table
  const secondRow = page.locator('p-table tbody tr').nth(0); //kon file tha select korbi sei no row ta nth er bhetore dibi, 0 theke row no ta start hoe
  await expect(secondRow).toBeVisible({ timeout: 15000 });
  await secondRow.locator('p-inputSwitch .p-inputswitch').click();

  await page.getByPlaceholder('Please Select PO Number').click();
  await page.getByRole('option', { name: 'PO/10086/25-26'}).click();

  await page.getByRole('button', { name: 'Match' }).click();
  const dialog = page.getByRole('dialog').filter({ hasText: 'Match' });
  await expect(dialog).toBeVisible();
  await dialog.getByRole('button', { name: 'Confirm' }).click();
  await expect(dialog).toBeHidden();

  await page.getByRole('button', { name: 'Cancel' }).click();

  // // ---------------- Sign Out ----------------
  // await page.waitForLoadState('networkidle');
  // await page.locator('.TopbarChip img').click();
  // await page.locator('.profile-menu-item.sign-out').click();
  // await expect(page.locator('#email')).toBeVisible();
})