import { test, expect } from '@playwright/test';

test('Launch application', async ({ page }) => {

  test.setTimeout(120000);

  await page.goto('https://dev.purplrp.com/#/login');

  await page.locator('#email').fill('rupamde190+CMF-new@gmail.com');
  await page.locator('#password').fill('45301adb');

  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.waitForURL('**/main/**', { timeout: 60000 });

  await page.goto(
    'https://dev.purplrp.com/#/main/general/setup/location/list');

  await page.getByText('Create New', { exact: true }).click();
  // ---------------------------------------------------
  // 1. Location Name
  // ---------------------------------------------------

  await page.getByPlaceholder('Location Name', { exact: true }).fill('Kolkata Location');


  // ---------------------------------------------------
  // 2. Parent Location TOGGLE
  // ---------------------------------------------------

  const parentToggle = page.locator('p-inputswitch').first();

  // Check current state before clicking
  const toggleInput = parentToggle.locator('input');

  if (!(await toggleInput.isChecked())) {
    await parentToggle.click();
  }

// ---------------------------------------------------
// Parent Location dropdown
// ---------------------------------------------------

const parentLocationDropdown = page.locator('p-dropdown').filter({
  hasText: 'Head Office'
}).last();

await expect(parentLocationDropdown).toBeVisible({
  timeout: 10000
});

await parentLocationDropdown.click();


// Now select Head Office from the opened dropdown
const headOfficeOption = page.getByRole('option', {
  name: 'Head Office',
  exact: true
});

await expect(headOfficeOption).toBeVisible({
  timeout: 10000
});

await headOfficeOption.click();

  // ---------------------------------------------------
  // 4. Location Type
  // ---------------------------------------------------

  const locationType = page.getByPlaceholder(
    'Please Select Location Type',
    { exact: true }
  );

  await locationType.click();

  // CHANGE THIS VALUE according to your application
  await page.getByRole('option', {name: 'Branch',exact: true}).click();


  // ---------------------------------------------------
  // 5. LOCATION ADDRESS
  // ---------------------------------------------------

  // Your screenshot/DOM shows:
  // textarea id="locationAddress"

  await page.locator('#locationAddress').click();


  // ---------------------------------------------------
  // 6. ADDRESS DETAIL ENTRY POPUP
  // ---------------------------------------------------

  // Wait for popup
  const addressDialog = page.locator('.p-dialog:visible').last();

  await expect(addressDialog).toBeVisible({timeout: 10000});

  // ---------------------------------------------------
  // Country
  // ---------------------------------------------------

  const country = addressDialog.getByPlaceholder('Please select a country',{ exact: true });

  await country.click();

  // CHANGE IF REQUIRED
  await page.getByRole('option', {name: 'India',exact: true}).click();


  // ---------------------------------------------------
  // State
  // ---------------------------------------------------

  const state = addressDialog.getByPlaceholder('Please select a state',{ exact: true });

  await state.click();

  // CHANGE IF REQUIRED
  await page.getByRole('option', {name: 'West Bengal',exact: true}).click();


  // ---------------------------------------------------
  // City
  // ---------------------------------------------------

  const city = addressDialog.getByPlaceholder('Please select a city',{ exact: true });

  await city.click();

  // CHANGE IF REQUIRED
  await page.getByRole('option', {name: 'Kolkata',exact: true}).click();


  // ---------------------------------------------------
  // Address 1
  // ---------------------------------------------------

  await addressDialog.getByPlaceholder('Address 1',{ exact: true }).fill('123 Test Street, Kolkata');


  // ---------------------------------------------------
  // PIN / ZIP
  // ---------------------------------------------------

  await addressDialog.getByPlaceholder('Pin / Zip',{ exact: true }).fill('700001');


  // ---------------------------------------------------
  // SAVE ADDRESS POPUP
  // ---------------------------------------------------

  const addressSaveButton = addressDialog.getByRole('button', {name: 'Save',exact: true});

  await expect(addressSaveButton).toBeVisible();

  await addressSaveButton.click();


  // ---------------------------------------------------
  // 7. EFFECTIVE FROM
  // ---------------------------------------------------

  // This follows the locator approach we used previously.
  // .last() is useful because your page can contain multiple
  // Effective From elements.

  const effectiveFrom = page.getByPlaceholder('Effective From',{ exact: true }).last();

  await expect(effectiveFrom).toBeVisible({timeout: 10000});

  await effectiveFrom.click();


  // ---------------------------------------------------
  // SELECT DATE
  // ---------------------------------------------------

  // Example: select 22 from the currently displayed calendar.
  // If your calendar contains multiple "22" values, use the
  // calendar container to avoid selecting the wrong one.

  const calendar = page.locator('.p-datepicker:visible').last();

  await expect(calendar).toBeVisible();

  await calendar.getByRole('gridcell', {name: '22',exact: true}).click();


  // ---------------------------------------------------
  // 8. REGISTRATION TYPE
  // ---------------------------------------------------

  const registrationType = page.getByPlaceholder('Please Select Registration Type',{ exact: true }); 
  await expect(registrationType).toBeVisible();await registrationType.click();


  // CHANGE THIS VALUE according to your application
  await page.getByRole('option', {name: 'GST',exact: true}).click();


  // ---------------------------------------------------
  // 9. MAIN SAVE
  // ---------------------------------------------------

  // const mainSaveButton = page.getByRole('button', {
  //   name: 'Save',
  //   exact: true
  // }).last();

  // await expect(mainSaveButton).toBeVisible();

  // await mainSaveButton.click();


  // // ---------------------------------------------------
  // // 10. WAIT FOR SAVE TO COMPLETE
  // // ---------------------------------------------------

  // await page.waitForLoadState('networkidle');


  await page.getByText('Create New', { exact: true }).click();

  await page
    .locator('input[placeholder="Business Unit Name"]')
    .fill('BU6');

  await page
    .locator('input[placeholder="Description"]')
    .fill("test");


  // ==============================
  // EFFECTIVE FROM
  // ==============================

  await page.locator('#dateEffectiveFrom input').click();

  // Calendar opens at September 2026.
  // Go back 17 months to April 2025.
  for (let i = 0; i < 17; i++) {
    await page.locator('.p-datepicker-prev').click();
  }

  // Select 1 April 2025
  await page
    .locator('.p-datepicker-calendar td:not(.p-datepicker-other-month)')
    .getByText('1', { exact: true })
    .click();


  // Verify the date
  await expect(
    page.locator('#dateEffectiveFrom input')
  ).toHaveValue('04/01/2025');


  // ==============================
  // SAVE
  // ==============================

  await page.getByRole('button', { name: 'Save' }).click();
})