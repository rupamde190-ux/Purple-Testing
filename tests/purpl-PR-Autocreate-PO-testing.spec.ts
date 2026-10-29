// 
  // pr + auto-create + po + grn

import { test, expect } from '@playwright/test';

test('Create PR', async ({ page }) => {
  test.setTimeout(180000);
  await page.goto('https://dev.purplrp.com/#/login');
  await page.locator('#email').fill('rupamde190+CMF-new@gmail.com');
  await page.locator('#password').fill('45301adb');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });

  //pr page
  await page.goto('https://dev.purplrp.com/#/main/procure/transaction/purchases-requisition/list');
  await page.getByText('Create New', { exact: true }).click();

  await page.locator('#PickerPrDate input').click(); 
  await page.locator('.p-datepicker-calendar').getByRole('gridcell', { name: '25' }).click();

  await page.getByPlaceholder('Please Select a Department').click();
  await page.getByRole('option', { name: 'Head Office' }).click();

  await page.getByPlaceholder('Please Select a Location').click();
  await page.getByRole('option', { name: 'Kolkata' }).click();

  await page.getByPlaceholder('Please Select PR Type').click();
  await page.getByRole('option', { name: 'Internal' }).click();

  await page.getByPlaceholder('Please Select Project Name').click();
  await page.getByRole('option', { name: 'IBS Project' }).click();

  await page.getByPlaceholder('Please Select Priority').click();
  await page.getByRole('option', { name: 'Medium' }).click();

  // child part
  await page.getByRole('button', { name: /\+?\s*Add/i }).click();

  // ✅ wait for the table row to appear, use stable selector
  const row = page.locator('p-table tbody tr').first();
  await expect(row).toBeVisible({ timeout: 15000 });

  // ✅ click the dropdown inside the row
  await row.locator('p-dropdown').first().click();
  await page.getByRole('option', { name: 'GT-003-Milk' }).click();

  await row.locator('input[placeholder="Quantity"]').fill('500');
  await row.locator('input[placeholder="Estimated Rate"]').fill('5');

  // ✅ click the date picker inside the row
  await row.locator('p-calendar input').click();
  await page.locator('.p-datepicker-calendar').getByRole('gridcell', { name: '29' }).click();

  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForLoadState('networkidle');
  await page.locator('p-table tbody tr').first().click();
  await page.getByRole('button', { name: 'Self Approval' }).click();

  await page.waitForLoadState('networkidle');
  // auto create rfq-po
  await page.goto('https://dev.purplrp.com/#/main/procure/transaction/create-rfq-po/list');
  
  // ✅ wait for table to load before interacting
  const firstRow = page.locator('p-table tbody tr').first();
  await expect(firstRow).toBeVisible({ timeout: 15000 });

  const poToggle = firstRow.locator('p-inputSwitch').nth(1);
  await poToggle.locator('.p-inputswitch').click();

  await firstRow.locator('p-calendar input').click();
  await page.locator('.p-datepicker-calendar').getByRole('gridcell', { name: '25' }).click();

  const supplier = firstRow.getByPlaceholder('Please select Supplier').first();

  await expect(supplier).toBeVisible({ timeout: 10000 });
  await supplier.click();

  await page.getByRole('option', { name: 'Ujala. ltd' }).click();

  const createPOBtn = page.getByRole('button', { name: /Create PO/i });
  await expect(createPOBtn).toBeVisible({ timeout: 15000 });
  await expect(createPOBtn).toBeEnabled({ timeout: 15000 });
  await createPOBtn.scrollIntoViewIfNeeded();
  await createPOBtn.click();
  await page.waitForLoadState('networkidle');

  // po page
  await page.goto('https://dev.purplrp.com/#/main/procure/transaction/purchase-order/list');

  // PO list
  const poRow = page.locator('p-table tbody tr').first(); 

  await expect(poRow).toBeVisible({ timeout: 15000 });
  await poRow.click();  

  // Wait for success toast to disappear
  const toast = page.locator('.toast-content');
  await toast.waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});

  // Now click Edit
  const editBtn = page.getByRole('button', { name: 'Edit' });
  await expect(editBtn).toBeVisible();
  await editBtn.click();

  // Don't rely only on networkidle
  await page.waitForTimeout(1000);  

  // Checkbox
  // const checkbox = page.locator('p-checkbox').first();  

  // await expect(checkbox).toBeVisible({ timeout: 15000 });
  // await checkbox.scrollIntoViewIfNeeded();  

  // await checkbox.click(); 

  // Save
  const saveBtn = page.getByRole('button', { name: 'Save' }); 

  await expect(saveBtn).toBeVisible({ timeout: 15000 });
  await saveBtn.click();  

  // Wait for save to finish
  await page.waitForTimeout(1500);  

  // PO list again
  await page.goto('https://dev.purplrp.com/#/main/procure/transaction/purchase-order/list');  
  const savedRow = page.locator('p-table tbody tr').first();  
  await expect(savedRow).toBeVisible({ timeout: 15000 }); 
  await savedRow.click(); 
  await page.waitForTimeout(1500);  

  // Self Approval
  const selfApprovalBtn = page.getByRole('button', {name: 'Self Approval'}); 
  await expect(selfApprovalBtn).toBeVisible({ timeout: 15000 });
  await expect(selfApprovalBtn).toBeEnabled({ timeout: 15000 });  
  await selfApprovalBtn.click();

  // PO list again
  await page.goto('https://dev.purplrp.com/#/main/procure/transaction/purchase-order/list');  
  const savedRow2 = page.locator('p-table tbody tr').first();  
  await expect(savedRow2).toBeVisible({ timeout: 15000 }); 
  await savedRow2.click(); 
  await page.waitForTimeout(1500);

  // Click Goods Received Notes button
  const grnBtn = page.getByRole('button', { name: 'Goods Received Notes' });
  await expect(grnBtn).toBeVisible({ timeout: 15000 });
  await grnBtn.click();

  // ✅ wait for the date picker dialog to appear
  await expect(page.locator('.p-datepicker-calendar')).toBeVisible({ timeout: 10000 });

  // ✅ select date 21
  await page.locator('.p-datepicker-calendar').getByRole('gridcell', { name: '29' }).click();

  // ✅ click Ok button in the dialog
  const okBtn = page.getByRole('button', { name: 'Ok' });
  await expect(okBtn).toBeVisible({ timeout: 10000 });
  await okBtn.click();

  await page.waitForLoadState('networkidle');

  await page.getByPlaceholder('Vehicle Number').fill('WB 1234');
  await page.getByPlaceholder('E-way Bill Number').fill('5678');
  await page.getByPlaceholder('Please Select Mode Of Transport').click();
  await page.getByRole('option', { name: 'Road' }).click();

  const lineRow = page.locator('p-table tbody tr').first();
  await lineRow.locator('p-inputSwitch').first().locator('.p-inputswitch').click();
  await lineRow.getByPlaceholder('Select Sub-Inventory').click();
  await expect(page.getByRole('option', { name: 'Raw Materials' })).toBeVisible({ timeout: 10000 });
  await page.getByRole('option', { name: 'Raw Materials' }).click();
  await lineRow.getByRole('spinbutton', { name: 'Receive QTY' }).fill('450');

  await page.getByRole('button', { name: 'Submit' }).click();

  // Sign Out
  const avatar = page.locator('.TopbarChip img');
  await expect(avatar).toBeVisible({ timeout: 60000 });
  await avatar.click();

  await expect(page.locator('.profile-menu-container')).toBeVisible();
  await page.locator('.profile-menu-item.sign-out').click();

  await expect(page.locator('#email')).toBeVisible({ timeout: 60000 });
  
});

// import { test, expect } from '@playwright/test';

// test('Create PR', async ({ page }) => {
//   await page.goto('https://dev.purplrp.com/#/login');
//   await page.locator('#email').fill('rupamde190+CMF-new@gmail.com');
//   await page.locator('#password').fill('45301adb');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.waitForURL('**/main/**', { timeout: 60000 });
//   // await page.goto('https://dev.purplrp.com/#/main/procure/transaction/purchases-requisition/list');
//   // await page.getByText('Create New', { exact: true }).click();

//   // await page.locator('#PickerPrDate input').click(); 
//   // await page.locator('.p-datepicker-calendar').getByRole('gridcell', { name: '18' }).click();

//   // await page.getByPlaceholder('Please Select a Department').click();
//   // await page.getByRole('option', { name: 'Head Office' }).click();

//   // await page.getByPlaceholder('Please Select a Location').click();
//   // await page.getByRole('option', { name: 'Kolkata' }).click();

//   // await page.getByPlaceholder('Please Select PR Type').click();
//   // await page.getByRole('option', { name: 'External' }).click();

//   // await page.getByPlaceholder('Please Select Project Name').click();
//   // await page.getByRole('option', { name: 'IBS Project' }).click();

//   // await page.getByPlaceholder('Please Select Priority').click();
//   // await page.getByRole('option', { name: 'Medium' }).click();

//   // // child part
//   // await page.getByRole('button', { name: /\+?\s*Add/i }).click();
  
//   // const row = page.locator('#pn_id_116-table tbody tr').first();

//   // await row.locator('p-dropdown').click();
//   // await page.getByRole('option', { name: 'GT-002-Rice'}).click();

//   // await row.locator('input[placeholder="Quantity"]').fill('500');

//   // await row.locator('input[placeholder="Estimated Rate"]').fill('5');

//   // await row.getByRole('combobox', { name: /Required By Date/i }).click();
//   // await page.locator('[data-date="2026-9-30"]').click();

//   // await page.getByRole('button', { name: 'Save' }).click();

//   // // Sign Out
//   // await page.waitForLoadState('networkidle');

//   // const avatar = page.locator('.TopbarChip img');
//   // await expect(avatar).toBeVisible({ timeout: 60000 });
//   // await avatar.click();

//   // await expect(page.locator('.profile-menu-container')).toBeVisible();
//   // await page.locator('.profile-menu-item.sign-out').click();

//   // // Login page should appear
//   // await expect(page.locator('#email')).toBeVisible({ timeout: 60000 });