import { test, expect } from '@playwright/test';

test('Launch application', async ({ page }) => {

  test.setTimeout(120000);

  // Click and wait for URL change together, so we don't lose context on a slow SPA nav
  // await Promise.all
  //   page.waitForURL('**/main/**', { timeout: 60000 }),
  //   page.getByRole('button', { name: 'Sign In' }).click(),
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
 
    // advance payment page
await page.goto('https://dev.purplrp.com/#/main/finance/payable/advance-payment/list');
await page.getByText('Create New', { exact: true }).click();

await page.getByPlaceholder('Please Select Advance Type').click();
await page.getByRole('option', { name: 'Supplier' }).click();

await page.locator('#prePaymentDate input').click();
await page.locator('.p-datepicker-calendar').getByRole('gridcell', { name: '22' }).click();

await page.getByPlaceholder('Please Select Supplier').click();
await page.getByRole('option', { name: 'ABC Supplier' }).click();

await page.getByPlaceholder('Proforma Invoice').fill('ABC123');
await page.getByRole('spinbutton', { name: 'Advance Amount' }).fill('5000');

await page.getByPlaceholder('Please Select Department').click();
await page.getByRole('option', { name: 'Head Office' }).click();

await page.getByRole('button', { name: 'Save' }).click();

const toast = page.locator('app-toast-customized:visible');

// Gives the toast a brief moment to actually appear before checking,
// then waits for it to clear if it did.
async function waitForToastGone() {
  await page.waitForTimeout(300); // let a toast render if one is coming
  if (await toast.count() > 0) {
    await toast.first().waitFor({ state: 'hidden', timeout: 10000 }).catch(() => {});
  }
}

// Selects an option from a p-dropdown-style field, waiting for the panel to open first
async function selectDropdownOption(placeholder: string, optionName: string) {
  await page.getByPlaceholder(placeholder).click();
  const option = page.getByRole('option', { name: optionName });
  await expect(option).toBeVisible({ timeout: 5000 });
  await option.click();
}

await page.waitForLoadState('networkidle');

await page.locator('p-table tbody tr').first().click();

await waitForToastGone();

// ---------------------------------------------------
// SELF APPROVAL
// ---------------------------------------------------

const selfApproval = page.getByRole('button', { name: 'Self Approval', exact: true });

await expect(selfApproval).toBeVisible({ timeout: 10000 });
await expect(selfApproval).toBeEnabled({ timeout: 10000 });

await waitForToastGone();

await selfApproval.click();

// ---------------------------------------------------
// MAKE PAYMENT
// ---------------------------------------------------

const makePaymentButton = page.getByRole('button', { name: 'Make Payment', exact: true });

await expect(makePaymentButton).toBeVisible({ timeout: 10000 });
await expect(makePaymentButton).toBeEnabled({ timeout: 10000 });

await Promise.all([
  page.waitForURL('**/finance/payable/advance-payment/action/**', { timeout: 30000 }),
  makePaymentButton.click({ noWaitAfter: true }),
]);

await expect(
  page.getByText('Make Payment', { exact: true }).first()
).toBeVisible({ timeout: 30000 });

// Make Payment page
await selectDropdownOption('Please select Payment Mode', 'NEFT');
await selectDropdownOption('Please select Bank Account', 'null-CUR7369');
await page.getByPlaceholder('Bank Reference Number').fill('9876543210');

// Apply table (not the Attachment table)
const applyTable = page.locator('p-table').first();
const row = applyTable.locator('tbody tr').first();

await applyTable.locator('.p-datatable-wrapper').evaluate((el: HTMLElement) => {
  el.scrollLeft = el.scrollWidth;
});

const paymentInput = row.locator('p-inputnumber input').first();
await paymentInput.evaluate((el: HTMLInputElement) => {
  el.removeAttribute('disabled');
  el.value = '4500';
  el.dispatchEvent(new Event('input', { bubbles: true }));
  el.dispatchEvent(new Event('change', { bubbles: true }));
});

await page.getByRole('button', { name: 'Save' }).click();
// await page.waitForLoadState('networkidle');

await waitForToastGone();

// Re-check readiness before reusing the same button on this new screen state
await expect(selfApproval).toBeVisible({ timeout: 10000 });
await expect(selfApproval).toBeEnabled({ timeout: 10000 });
await selfApproval.click();

await page.waitForLoadState('networkidle');

// ---------------- Sign Out ----------------
await waitForToastGone();

await page.locator('.TopbarChip img').click();
await page.locator('.profile-menu-item.sign-out').click();

await expect(page.locator('#email')).toBeVisible();
})