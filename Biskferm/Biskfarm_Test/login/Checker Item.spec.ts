import { test, expect } from '@playwright/test';

test('Launch application', async ({ page }) => {

  test.setTimeout(120000);

  await page.goto('http://3.110.239.158:8671/#/login');

  await page.locator('#email').fill('anurupadasgupta2904+marketing-checker@gmail.comm');
  await page.locator('#password').fill('FC94DF212');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');

await page.getByRole('row', { name: 'Next Step Medium Normal ' }).click();
await page.getByRole('button', { name: 'Approve' }).click();
await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();


 })
