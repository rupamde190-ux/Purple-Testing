import { test, expect } from '@playwright/test';
import { fileURLToPath } from 'node:url';

test('Launch application', async ({ page }) => {

  test.setTimeout(120000);

  // LoginS
  await page.goto('https://dev.purplrp.com/#/login');

  await page.locator('#email').fill('rupamde190+OPEN@gmail.com');
  await page.locator('#password').fill('A0F909F07');

  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.waitForURL('**/main/**', {
    timeout: 60000
  });

  // Open AP Invoice
  await page.goto('https://dev.purplrp.com/#/main/general/master/employee/list');

  // Create New
  await page.getByText('Create New', {exact: true}).click();

// // Employee Photo
// await page.locator('#imageUploadField').setInputFiles('C:\\Report\\Photo.jpg'); await page.waitForTimeout(2000);
// // Employee Signature
// await page.locator('#txtLogo').setInputFiles('C:\\Report\\Signature.png'); await page.waitForTimeout(2000);
  // --------------------------------------------------
  // 2. Employee Basic Information
  // --------------------------------------------------

  // Unique Identification Number
  await page.locator('#txtTaxIdentNumber').fill('G/0045645');

  // First Name
  await page.locator('#textFirstName').fill('Anirban');

  // Last Name
  await page.locator('#textLastName').fill('Chatterjee');


  // --------------------------------------------------
  // 3. Designation
  // --------------------------------------------------

  // Open Designation dropdown
  await page.locator('#drpDesignation').click();

  // Select Developer
  await page.locator('#drpDesignation_2').click();


  // --------------------------------------------------
  // 4. Grade
  // --------------------------------------------------

  // Open Grade dropdown
  await page.locator('#drpGrade').click();

  // Select Grade B
  await page.locator('#drpGrade_1').click();


  // --------------------------------------------------
  // 5. Department
  // --------------------------------------------------

  // Open Department dropdown
  await page.locator('#txtDepartment').click();

  // Select Sales
  await page.locator('#txtDepartment_1').click();


  // --------------------------------------------------
  // 6. Location
  // --------------------------------------------------

  // Open Location dropdown
  await page.locator('#txtinputlocation').click();

  // Select Dhaka
  await page.locator('#txtinputlocation_1').click();


  // --------------------------------------------------
  // 7. Payment Term
  // --------------------------------------------------

  // The recording only opened this dropdown.
  // No option selection was recorded.
  await page.locator('#inputPaymentTerm').click();


  // --------------------------------------------------
  // 8. Email
  // --------------------------------------------------

  await page.locator('#txtemail').fill(
    'rupamde190+TSDev@gmail.com'
  );


  // --------------------------------------------------
  // 9. Verify Email
  // --------------------------------------------------

  await page
    .locator('p-tabpanel:nth-of-type(1) button')
    .getByText('Verify', { exact: true })
    .click();


  // --------------------------------------------------
  // 10. Close Verify Email Dialog
  // --------------------------------------------------

  // await page
  //   .locator('p-dialog.ng-tns-c1946505645-244')
  //   .getByRole('button')
  //   .first()
  //   .click();


  // --------------------------------------------------
  // 11. Confirm Dialog
  // --------------------------------------------------

  await page
    .locator('p-confirmdialog button.buttonStyleSave')
    .click();


  // --------------------------------------------------
  // 12. Open Address Tab
  // --------------------------------------------------

  await page
    .locator('li:nth-of-type(2) span:nth-of-type(2)')
    .click();


  // --------------------------------------------------
  // 13. Open Address Form
  // --------------------------------------------------

  await page
    .locator('p-tabpanel:nth-of-type(2) div.row > div > div')
    .click();


  // --------------------------------------------------
  // 14. Country
  // --------------------------------------------------

  await page
    .locator(
      'p-dialog.ng-tns-c1946505645-241 div:nth-of-type(1) > p-dropdown span'
    )
    .click();

  // Search Country
  await page.locator('body > div input').fill('ind');

  // Select India
  await page.locator('#Country_1').click();


  // --------------------------------------------------
  // 15. State
  // --------------------------------------------------

  await page
    .locator(
      'p-dialog.ng-tns-c1946505645-241 div:nth-of-type(2) > p-dropdown span'
    )
    .click();

  // Search State
  await page.locator('body > div input').fill('we');

  // Select recorded option
  await page.locator('p-dropdownitem:nth-of-type(2) span').click();


  // --------------------------------------------------
  // 16. City
  // --------------------------------------------------

  await page
    .locator('div:nth-of-type(4) > p-dropdown > div')
    .click();

  await page.locator('#city_1').click();


  // --------------------------------------------------
  // 17. Address
  // --------------------------------------------------

  await page.locator('#address1').fill('96/ ROAD viyal');


  // --------------------------------------------------
  // 18. PIN / ZIP
  // --------------------------------------------------

  await page.locator('#pinzip').fill('1001');


  // --------------------------------------------------
  // 19. Save Address
  // --------------------------------------------------

  await page
    .locator(
      'p-dialog.ng-tns-c1946505645-241 button.buttonStyleSave'
    )
    .click();


  // --------------------------------------------------
  // End
  // --------------------------------------------------

  await page.waitForTimeout(3000);

});
