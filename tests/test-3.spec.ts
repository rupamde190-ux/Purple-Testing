import { test, expect } from '@playwright/test';

test('Launch application', async ({ page }) => {

// //------------------------Application--------------------------------------  
  await page.goto('https://dev.purplrp.com/#/login');
  await page.locator('#email').fill('rupamde190+TKCompany@gmail.com');
  await page.locator('#password').fill('5918B7398');
  await page.getByRole('button', { name: 'Sign In' }).click();
     await page.waitForURL('**/main/**', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.getByRole('button', { name: 'Verify' }).click();




})