import { test, expect } from '@playwright/test';


// Keep credentials out of the file: set BISK_EMAIL / BISK_PASSWORD in your shell or a .env

   // Log in
  test('Launch application', async ({ page }) => {

  await page.goto('http://3.110.239.158:8671/#/login');
  await page.locator('#email').fill('sk.jaid.rt@gmail.com');
  await page.locator('#password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.waitForLoadState('networkidle');

  await page.goto(
    'http://3.110.239.158:8671/#/main/general/master/employee/list');

 await page.getByText('Create New', { exact: true }).click();



// The app will likely reject duplicate employee numbers / emails, so change these per run.
const employee = {
  employeeNo: 'EMP032145',
  taxNumber: '56321422623',
  salutation: 'Mr.',
  firstName: 'rupam',
  lastName: 'Dey',
  department: 'Product Development',
  email: 'rupamde190+bisk@gmail.com',
  mobile: '8240168778',
};

  // Open employee list
  await page.goto('http://3.110.239.158:8671/#/main/general/master/employee/list');
  await expect(page.locator('#createNewButton > button')).toBeVisible();

  // Start a new employee record
  await page.locator('#createNewButton > button').click();

  // Employee number and tax ID
  await page.locator('#employeeNo').fill(employee.employeeNo);
  await page.locator('#UniqueTaxNumber').fill(employee.taxNumber);

  // Salutation (PrimeNG dropdown)
  await page.getByPlaceholder('Please Select Salutation').click();
  
  await page.locator('#empSalutation_0').click();
//   await expect(page.locator('#empSalutation')).toContainText(employee.salutation);

  // Names (middle name was cleared in the recording)
  await page.locator('#textFirstName').fill(employee.firstName);
  await page.locator('#textMiddleName').clear();
  await page.getByPlaceholder('Last Name').fill(employee.lastName);

  // Department (PrimeNG dropdown)
  await page.getByPlaceholder('Please Select Department').click();
  await page.locator('#txtDepartment_2').click();
//   await expect(page.locator('#txtDepartment')).toContainText(employee.department);
  // Contact details
  await page.locator('#txtemail').fill(employee.email);
  await page.locator('#mobile').fill(employee.mobile);
  // Save
  await page.locator('#saveButton').click();


})