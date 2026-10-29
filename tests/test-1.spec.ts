import { test, expect } from '@playwright/test';



test('Launch application', async ({ page }) => {
  await page.goto('https://ccpl-app.conacent.com/#/login');
  await page.locator('input[name="Username"]').fill('rupam.dey@conacent.com');
  await page.locator('input[name="password"]').fill('Rupam07');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
 
// await page.getByRole('button', { name: '<' }).click();await page.getByRole('button', { name: 'Add' }).click();
// await page.getByRole('button', { name: 'Add' }).click();

// await page.getByRole('button', { name: 'Save' }).click();
// await page.getByLabel('September 9,').click();
// await page.getByRole('button', { name: 'Add' }).click();
// await page.getByRole('row', { name: 'Please Select Task dropdown' }).click();
// await page.getByRole('cell', { name: 'Please Select Task dropdown' }).getByLabel('dropdown trigger').click();
// await page.getByRole('option', { name: 'INT-INT-6.3--Functional' }).click();

// await page.locator('#txtStartTime').getByRole('combobox', { name: 'HH:mm' }).click();
// await page.locator('#txtStartTime').getByRole('combobox', { name: 'HH:mm' }).fill('11:30_');
// await page.locator('#txtEndTime').getByRole('combobox', { name: 'HH:mm' }).click();
// await page.locator('#txtEndTime').getByRole('combobox', { name: 'HH:mm' }).fill('14:30_');  
// await page.locator('#txtsRemarks').click();
//   await page.locator('#txtsRemarks').fill('Supplier Portal Automation and Multiple Approvers workflow automation');
//   await page.locator('.p-element.pi.pi-copy').first().click();
// await page.getByRole('combobox', { name: 'HH:mm' }).nth(2).click();
// await page.getByRole('combobox', { name: 'HH:mm' }).nth(2).fill('14:50_');
// await page.getByRole('combobox', { name: 'HH:mm' }).nth(3).click();
// await page.getByRole('combobox', { name: 'HH:mm' }).nth(3).fill('19:30_');
// await page.getByRole('button', { name: 'Save' }).click();
// await page.locator('a').filter({ hasText: 'Timesheet Not Filled' }).nth(5).click();
// await page.getByRole('button', { name: 'Add' }).click();

 await page.locator('#email').fill('anurupadasgupta2904+ad1@gmail.com');
//   await page.locator('#password').fill('E55CC317E');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.waitForURL('**/main/**', { timeout: 60000 });
// await page.locator('i').first().click();
// await page.locator('a').filter({ hasText: 'Procure' }).click();



})