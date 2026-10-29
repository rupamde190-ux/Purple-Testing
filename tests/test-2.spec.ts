import { test, expect } from '@playwright/test';

test('Launch application', async ({ page }) => {
  test.setTimeout(120_000);
    await page.goto('https://dev.purplrp.com/#/login');
   
  await page.locator('#email').fill('rupamde190+sonu@gmail.com');
  await page.locator('#password').fill('32AE49BD1');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
await page.locator('i').first().click();
await page.locator('i').first().click();
await page.locator('a').filter({ hasText: /^General$/ }).click();
await page.getByRole('link', { name: 'Master' }).click();
await page.locator('div').filter({ hasText: 'Employee' }).nth(5).click();
await page.getByRole('heading', { name: 'Employee' }).click()
await page.getByRole('textbox', { name: 'Email' }).fill('anurupadasgupta2904+TESTING@gmail.com')
await page.getByRole('button', { name: 'Verify' }).click();

const dialog = page.getByRole('dialog');

// Wait until the verification actually completes
await expect(dialog.getByText('Email verified successfully')).toBeVisible({ timeout: 60000 });

// Now close the popup
await dialog.locator('.p-dialog-header-close').click();

// Confirm the popup is gone before continuing
await expect(dialog).toBeHidden();
  
})