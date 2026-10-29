 import { test, expect } from '@playwright/test';

test('Launch application', async ({ page }) => {

  test.setTimeout(120000);

  await page.goto('http://3.110.239.158:8671/#/login');

  await page.locator('#email').fill('anurupadasgupta2904+biskfarm@gmail.com');
  await page.locator('#password').fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
await page.getByRole('button', { name: 'Setup' }).locator('a').click();
await page.getByRole('link', { name: 'Business Field Mapping' }).click();
await page.getByRole('button', { name: 'Edit' }).click();
await page.locator('div').filter({ hasText: /^Add$/ }).nth(2).click();

await page.locator('input[placeholder="Segment"]:placeholder-shown').fill('test 1');

await page.getByRole('combobox', { name: 'Please Select Oracle Attribute' }).last().click();
await page.getByText('ATTRIBUTE4', { exact: true }).click();


await page.getByText('Input', { exact: true }).click();
// if ypu want to select input  as field type 
// // await page.getByRole('option', { name: 'Input' }).click();
await page.getByRole('option', { name: 'Dropdown' }).click(); 

//popup click
await page.locator('tr:nth-child(49) > .mapping-field-cell.field-type-cell > .field-type-row > .svg-icon').click()

//POPUP VALUE if FIELD TYPE is DROPDOWN
await page.getByRole('textbox', { name: 'Value' }).fill('PUT Here');
await page.getByRole('textbox', { name: 'Code' }).fill('2100');
// await page.locator('#addDropdownValueButton').click();
//POPUP save button click
await page.locator('#saveDropdownValueButton').click();

//----------Another -----------

await page.locator('div').filter({ hasText: /^Add$/ }).nth(2).click();

// 1. Only matches inputs that are currently empty (placeholder showing)
await page.locator('input[placeholder="Segment"]:placeholder-shown').fill('test2');

await page.getByRole('combobox', { name: 'Please Select Oracle Attribute' }).last().click();
await page.getByRole('option', { name: 'ATTRIBUTE6', exact: true }).click();

await page.locator('#fieldType48 > .p-element.p-dropdown-label').click();

// if ypu want to select input  as field type 
await page.getByRole('option', { name: 'Input' }).click();

//----------Another -----------
await page.locator('div').filter({ hasText: /^Add$/ }).nth(2).click();

await page.locator('input[placeholder="Segment"]:placeholder-shown').fill('test 1');
await page.getByRole('combobox', { name: 'Please Select Oracle Attribute' }).last().click();
await page.getByRole('option', { name: 'ATTRIBUTE9', exact: true }).click();
await page.locator('#fieldType48 > .p-element.p-dropdown-label').click();
// if ypu want to select input  as field type 
// // await page.getByRole('option', { name: 'Input' }).click();

await page.getByRole('option', { name: 'Dropdown' }).click(); 
// add the SL no. inside child() then will work
await page.locator('tr:nth-child(51) > td:nth-child(5) > .p-element.ng-untouched > .p-inputswitch > .p-inputswitch-slider').click()

})