import { test, expect } from '@playwright/test';

test('Launch application', async ({ page }) => {

  test.setTimeout(120000);

  await page.goto('http://3.110.239.158:8671/#/login');

  await page.locator('#email').fill('sk.jaid.rt@gmail.com');
  await page.locator('#password').fill('password');

  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/setup/subsidiary/list');
await page.waitForURL('**/main/**', { timeout: 20000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/setup/business-unit/list');
await page.waitForURL('**/main/**', { timeout: 20000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/setup/role/list');
await page.waitForURL('**/main/**', { timeout: 20000 });

  await page.goto('http://3.110.239.158:8671/#/main/general/setup/business-segment-workflow/list');

})