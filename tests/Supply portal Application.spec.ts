import { test, expect } from '@playwright/test';

test('Launch application', async ({ page }) => {

// //------------------------Application--------------------------------------  
  await page.goto('https://dev.purplrp.com/#/login');
  await page.locator('#email').fill('rupamde190+sonu@gmail.com');
  await page.locator('#password').fill('32AE49BD1');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
//------------------------Manu-----------------
await page.locator('.menu-icon').click();
await page.getByRole('link', { name: 'Supplier Portal' }).click();
await page.locator('div').filter({ hasText: 'Proposed Supplier' }).nth(5).click();
//------------------------Create New Supplier-----------------
await page.getByRole('button', { name: ' Create New' }).click();
  await page.getByRole('combobox', { name: 'Please Select Registration' }).click();
  await page.getByRole('option', { name: 'Registered', exact: true }).click();
  await page.getByRole('textbox', { name: 'GSTIN' }).click();
  await page.getByRole('textbox', { name: 'GSTIN' }).press('ControlOrMeta+V');
  await page.getByRole('textbox', { name: 'GSTIN' }).fill('19AFTPC8606E1Z9');
  await page.getByRole('row', { name: '1 dropdown trigger' }).click();
  await page.getByRole('combobox', { name: 'Please Select Project' }).click();
  await page.getByRole('option', { name: 'IAV Biogas -Namakkal' }).click();
  await page.locator('div').filter({ hasText: /^Please Select Payment Method$/ }).click();
  await page.getByRole('option', { name: 'NEFT' }).click();
  await page.getByRole('combobox', { name: 'Immediate' }).click();
  await page.getByRole('option', { name: 'Immediate' }).click();


  await page.getByRole('tab', { name: ' Contact Details' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('combobox', { name: 'Please Select Contact Title' }).click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  // await page.getByRole('option', { name: 'Mrs.' }).check();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Amar');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Saha');
  await page.getByRole('textbox', { name: 'Contact Number' }).fill('698565625');
  await page.getByRole('textbox', { name: 'Email' }).fill('rupamde190+testcompany@gmail.com');


  await page.getByRole('tab', { name: ' Manage Operating Units' }).click();
  await page.locator('#operatingUnitId0').click();
  await page.getByRole('option', { name: 'IAVL BioGas OU' }).click();

  await page.getByRole('tab', { name: ' Bank Details' }).click();
      await page.getByRole('button', { name: ' Add' }).click();
      
      await page.getByRole('combobox', { name: 'Please Select Account Type' }).click();
      await page.getByRole('spinbutton', { name: 'Account Number' }).click();
      await page.getByRole('spinbutton', { name: 'Account Number' }).fill('0021358556789');
  await page.getByRole('textbox', { name: 'IFSC' }).fill('SBIN0015280');
  await page.getByRole('cell').nth(1).dblclick();
  await page.getByRole('textbox', { name: 'Account Holder Name' }).fill('Rupam Dey');
  await page.getByRole('combobox', { name: 'Please Select Account Type' }).click();
  await page.pause();
  await page.locator('[id^="accountType"][id$="_0"]').click();
// await page.getByRole('option', { name: 'Savings' }).click();

  await page.getByRole('tab', { name: ' Localization' }).click();
  await page.getByRole('combobox', { name: 'Please Select Direct Tax' }).click();
  await page.getByRole('option', { name: 'Company' }).click();
  await page.getByRole('combobox', { name: 'Please Select TDS Section' }).click();
  await page.getByRole('option', { name: 'SEC. 194C (Others)' }).click();
  await page.getByRole('textbox', { name: 'Certificate No' }).first().fill('TDS-2023-24');

  await page.getByRole('tab', { name: ' Item Variant' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('combobox', { name: 'Please Select Item Category' }).click();
  await page.getByRole('option', { name: 'MECH' }).click();
      await page.locator('.pi.pi-eye').first().click();
      await page.locator('#addproductspecification').getByRole('button', { name: ' Add' }).click();
      await page.getByRole('textbox', { name: 'Specification Name' }).click();
      await page.getByRole('textbox', { name: 'Specification Name' }).fill('TMT');
      await page.locator('#saveProductSpecification').click();
//   await page.locator('#saveButton').click();

// await page.getByRole('cell', { name: '1', exact: true }).click();
//     await page.getByRole('button', { name: 'Send for Approval' }).click();
// await page.getByRole('img', { name: 'undefined' }).click();
// await page.getByText('Sign Out').click();

// // //------------------------approver 1--------------------------------------
// await page.locator('#email').fill('anurupadasgupta2904+ad1@gmail.com');
//   await page.locator('#password').fill('E55CC317E');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.waitForURL('**/main/**', { timeout: 60000 });
// await page.locator('i').first().click();
// await page.locator('a').filter({ hasText: 'Procure' }).click();
// await page.getByRole('link', { name: 'Approval', exact: true }).click();
// await page.locator('div').filter({ hasText: /^Supplier$/ }).nth(1).click();
// await page.locator('tr:nth-child(5) > .inputSwitchStyle > .p-element.ng-untouched > .p-inputswitch > .p-inputswitch-slider').click();
// await page.getByRole('button', { name: 'Approve' }).click();
// await page.getByRole('img', { name: 'undefined' }).click();
// await page.getByText('Sign Out').click();

// // //------------------------approver 2--------------------------------------
await page.locator('#email').fill('anurupadasgupta2904+rohit1@gmail.com');
  await page.locator('#password').fill('131B865F3');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
await page.locator('i').first().click();
await page.locator('a').filter({ hasText: 'Procure' }).click();
await page.getByRole('link', { name: 'Approval', exact: true }).click();
await page.locator('div').filter({ hasText: /^Supplier$/ }).nth(1).click();
//-----------Hyperlink Click--(Change the Supplier number in the below line according to the created supplier number)
await page.getByText('SUP/10094').click();
await page.getByRole('button', { name: 'Approve' }).click();
  
await page.getByRole('img', { name: 'undefined' }).click();
await page.getByText('Sign Out').click();


})