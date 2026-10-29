import { test, expect } from '@playwright/test';

test('Launch application', async ({ page }) => {
  test.setTimeout(120_000);
  await page.goto('http://3.110.239.158:8090/#/supplier');
  

  await page.getByRole('textbox', { name: 'Enter website URL (e.g., www.' }).click();

  // //website change 
  // await page.getByRole('textbox', { name: 'Enter website URL (e.g., www.' }).fill('');
  // await page.getByRole('textbox', { name: 'Enter website URL (e.g., www.' }).press('ControlOrMeta+V');
  // await page.getByRole('textbox', { name: 'Enter website URL (e.g., www.' }).fill('www.iavl.com');
  // await page.getByText('Website').click();
  

  await page.getByRole('combobox', { name: 'Please Select Type' }).first().click();
  await page.getByRole('option', { name: 'General' }).click();
  await page.getByRole('combobox', { name: 'Please Select Type' }).last().click();
  await page.getByRole('option', { name: 'Company' }).click();
  // await page.getByRole('textbox', { name: 'Enter company name' }).click();
  // await page.getByRole('textbox', { name: 'Enter company name' }).fill('INDIAN AEROSPACE & VALVE LIMITED');
// await page.getByRole('combobox', { name: 'Bangladesh' }).click();
// await page.getByRole('searchbox').click();
// // await page.getByRole('searchbox').fill('INDIA');
// await page.locator('div').filter({ hasText: /^British Indian Ocean TerritoryIndia$/ }).nth(3).click();
await page.getByRole('textbox', { name: 'GSTIN *' }).click();
await page.getByRole('textbox', { name: 'GSTIN *' }).fill('19FYUPS7468P1ZN'); //Put the GSTIN number of the supplier here
  test.setTimeout(10 * 60 * 1000); // whole test can run up to 10 minutes

  await page.getByRole('textbox', { name: 'Enter email address' }).fill('rupamde190+PE@gmail.com');
  await page.getByRole('button', { name: 'Verify' }).click();

  const dialog = page.getByRole('dialog', { name: 'Verify Your Email' });

  // 1. Wait until the user verifies in Gmail and the success message appears
  await expect(dialog.getByText('Email verified successfully')).toBeVisible({ timeout: 5 * 60 * 1000 });

  // 2. Click the cross
  await dialog.locator('button').click();

  // 3. Make sure the dialog is closed before moving on
  await expect(dialog).toBeHidden();


await page.getByRole('spinbutton', { name: 'Enter phone number' }).click();
await page.getByRole('spinbutton', { name: 'Enter phone number' }).fill('923632563');

await page.locator('.info-card-icon').first().click();
await page.getByRole('row', { name: 'PAN' }).locator('input[type="file"]').setInputFiles('C:/Report/CIN No..pdf'); 
await page.locator('.p-element.p-button-primary').first().click();
await page.getByRole('row', { name: 'TAN' }).locator('input[type="file"]').setInputFiles('C:/Report/Signature.png');  
await page.locator('.p-element.p-button-primary').first().click();
await page.getByRole('row', { name: 'CIN' }).locator('input[type="file"]').setInputFiles('C:/Report/Screenshot 2026-09-25 172058.png'); 
await page.locator('.p-element.p-button-primary').click();
await page.getByRole('row', { name: 'GSTIN' }).locator('input[type="file"]').setInputFiles('C:/Report/GST NO..pdf'); 
await page.getByRole('button', { name: 'Save' }).click();


await page.getByRole('img', { name: 'Registration Q&A' }).click();

await page.locator('#answer0').getByRole('combobox', { name: 'Please Select Answer' }).click();
await page.locator('div').filter({ hasText: 'YesNoempty' }).nth(3).click();
await page.locator('#answer1').click();
await page.locator('div').filter({ hasText: 'PartnershipBusinessempty' }).nth(3).click();
await page.getByRole('combobox', { name: 'Please Select Answer' }).click();
await page.locator('div').filter({ hasText: '-20020-100100' }).nth(3).click();
await page.getByRole('button', { name: 'Save' }).click();

await page.getByRole('img', { name: 'Product Category' }).click();
await page.getByRole('button', { name: ' Add' }).click();
await page.getByRole('combobox', { name: 'Please Select Product Category' }).click();
await page.locator('div').filter({ hasText: 'MECHCIVL' }).nth(3).click();
const row = page.getByRole('row').filter({ hasText: 'MECH' });
await page.locator('.pi.pi-eye').first().click();
await page.getByRole('dialog').getByRole('button', { name: ' Add' }).click();
await page.getByRole('textbox', { name: 'Specification Name' }).click();
await page.getByRole('textbox', { name: 'Specification Name' }).fill('TMT');

await page.getByRole('button', { name: 'Save' }).first().click();
await page.getByRole('button', { name: 'Save' }).last().click();


//Submit Click
await page.getByRole('button', { name: ' Submit' }).click();

await page.getByRole('button', { name: 'Go to Login' }).click();


  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 600000 });

      
    await page.getByRole('button', { name: 'Go to Login' }).click();
    
      await page.waitForTimeout(20000);
    
      await page.getByRole('button', { name: 'Sign In' }).click();

      await page.waitForTimeout(20000);


    await page.getByRole('button', { name: 'Edit' }).click();

    await page.locator('div').filter({ hasText: /^Please Select Payment Term$/ }).click();
    await page.locator('div').filter({ hasText: /^7 Days15 Days30 Days45 Days60 DaysImmediate$/ }).nth(3).click();


    await page.getByRole('combobox', { name: 'Please Select Contact Title' }).click();
    await page.locator('div').filter({ hasText: 'Mr.Mrs.' }).nth(3).click();
    await page.getByRole('textbox', { name: 'First Name' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('Amar');

    // await page.getByRole('textbox', { name: 'Last Name' }).click();
    // await page.getByRole('textbox', { name: 'Last Name' }).fill('Saha');
    await page.getByRole('tab', { name: ' Bank Details' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByRole('combobox', { name: 'Please Select Bank' }).click();
    await page.locator('div').filter({ hasText: 'Jamuna Bank Ltd.Sonali' }).nth(3).click();

    await page.getByRole('textbox', { name: 'Branch Code' }).fill('012546');

    await page.getByRole('combobox', { name: 'Please Select Account Type' }).click();

    await page.locator('div').filter({ hasText: 'CurrentSavings' }).nth(3).click();
    await page.getByRole('spinbutton', { name: 'Account Number' }).click();
    await page.getByRole('spinbutton', { name: 'Account Number' }).fill('0123456789');

    await page.getByRole('combobox', { name: 'Please Select Currency' }).click();
    await page.locator('div').filter({ hasText: /^BDT$/ }).nth(4).click();
    await page.getByRole('textbox', { name: 'SWIFT' }).click();
    await page.getByRole('textbox', { name: 'SWIFT' }).fill('22212551');


    await page.getByRole('button', { name: 'Submit' }).click();
    await page.locator('.p-checkbox-box').click();
    await page.waitForTimeout(20000);
    await page.getByRole('button', { name: 'Accept' }).click();
    await page.getByRole('img', { name: 'undefined' }).click();
await page.getByText('Sign Out').click();

//------------------------MENU-----------------------------
  await page.locator('#email').fill('rupamde190+sonu@gmail.com');
  await page.locator('#password').fill('32AE49BD1');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
await page.locator('.menu-icon').click();
await page.getByRole('link', { name: 'Supplier Portal' }).click();
await page.locator('div').filter({ hasText: 'Proposed Supplier' }).nth(5).click();

await page.getByRole('cell', { name: 'PRO/10023' }).click();
await page.getByRole('button', { name: 'Edit' }).click();
await page.getByRole('tab', { name: ' Company' }).click();
await page.getByRole('combobox', { name: 'Please Select Business Unit' }).click();
await page.getByRole('option', { name: 'IAVL BioGas OU' }).click();
await page.getByRole('button', { name: 'Send for Approval' }).click();
await page.waitForTimeout(20000);
await page.getByRole('img', { name: 'undefined' }).click();
await page.getByText('Sign Out').click();
// // //------------------------approver 1--------------------------------------
await page.locator('#email').fill('anurupadasgupta2904+ad1@gmail.com');
  await page.locator('#password').fill('E55CC317E');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
await page.locator('i').first().click();
await page.locator('a').filter({ hasText: 'Procure' }).click();
await page.getByRole('link', { name: 'Approval', exact: true }).click();
await page.locator('div').filter({ hasText: /^Supplier$/ }).nth(1).click();
await page.locator('tr:nth-child(5) > .inputSwitchStyle > .p-element.ng-untouched > .p-inputswitch > .p-inputswitch-slider').click();
await page.getByRole('button', { name: 'Approve' }).click();
await page.getByRole('img', { name: 'undefined' }).click();
await page.getByText('Sign Out').click();

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

// await page.getByRole('img', { name: 'undefined' }).click();
// await page.getByText('Sign Out').click();



    await page.goto('https://dev.purplrp.com/#/login');
  

// ///-------------------------Buyer User--------------------------
  
//------------------------MENU-----------------------------
  await page.locator('#email').fill('rupamde190+sonu@gmail.com');
  await page.locator('#password').fill('32AE49BD1');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
await page.locator('.menu-icon').click();
await page.getByRole('link', { name: 'Supplier Portal' }).click();
await page.locator('div').filter({ hasText: 'Proposed Supplier' }).nth(5).click();

await page.getByRole('cell', { name: 'PRO/10039' }).click();
await page.getByRole('button', { name: 'Edit' }).click();
await page.getByRole('tab', { name: ' Company' }).click();
await page.getByRole('combobox', { name: 'Please Select Business Unit' }).click();
await page.getByRole('option', { name: 'IAVL BioGas OU' }).click();
await page.getByRole('button', { name: 'Send for Approval' }).click();
await page.waitForTimeout(20000);
// await page.getByRole('img', { name: 'undefined' }).click();
// await page.getByText('Sign Out').click();
// // //------------------------approver 1--------------------------------------
await page.locator('#email').fill('anurupadasgupta2904+ad1@gmail.com');
  await page.locator('#password').fill('E55CC317E');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
await page.locator('i').first().click();
await page.locator('a').filter({ hasText: 'Procure' }).click();
await page.getByRole('link', { name: 'Approval', exact: true }).click();
await page.locator('div').filter({ hasText: /^Supplier$/ }).nth(1).click();
await page.locator('tr:nth-child(5) > .inputSwitchStyle > .p-element.ng-untouched > .p-inputswitch > .p-inputswitch-slider').click();
await page.getByRole('button', { name: 'Approve' }).click();
await page.getByRole('img', { name: 'undefined' }).click();
await page.getByText('Sign Out').click();

// // //------------------------approver 2--------------------------------------
await page.locator('#email').fill('anurupadasgupta2904+rohit1@gmail.com');
  await page.locator('#password').fill('131B865F3');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
await page.locator('i').first().click();
await page.locator('a').filter({ hasText: 'Procure' }).click();
await page.getByRole('link', { name: 'Approval', exact: true }).click();
await page.locator('div').filter({ hasText: /^Supplier$/ }).nth(1).click();


await page.locator('tr:nth-child(2) > .inputSwitchStyle > .p-element.ng-untouched > .p-inputswitch > .p-inputswitch-slider').click();
await page.getByRole('button', { name: 'Approve' }).click();
await page.getByRole('img', { name: 'undefined' }).click();
await page.getByText('Sign Out').click(); 



//-----------Hyperlink Click--(Change the Supplier number in the below line according to the created supplier number)
// await page.getByText('SUP/10094').click();
// await page.getByRole('button', { name: 'Approve' }).click();

// await page.getByRole('img', { name: 'undefined' }).click();
// await page.getByText('Sign Out').click();



}) 