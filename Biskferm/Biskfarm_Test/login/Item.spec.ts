import { test, expect } from '@playwright/test';

test('Launch application', async ({ page }) => {

  test.setTimeout(120000);

  await page.goto('http://3.110.239.158:8671/#/login');

  await page.locator('#email').fill('anurupadasgupta2904+mark-maker@gmail.com');
  await page.locator('#password').fill('7677F1297');

  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
// // ---------------- MARKETING MAKER ----------------
  await page.getByText('Create New', { exact: true }).click();
  await page.getByRole('textbox', { name: 'Type *', exact: true }).click();
  await page.locator('div').filter({ hasText: 'PromoNon-PromoFree Item' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Size *' }).click();
  await page.locator('div').filter({ hasText: 'SmallMediumLargeOthers' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Pack Type *' }).click();
  await page.locator('div').filter({ hasText: 'PolyATCNormalOthers' }).nth(2).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('cell', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(21000);  
await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();
// // ---------------- MARKETING CHECKER ----------------
 await page.locator('#email').fill('anurupadasgupta2904+marketing-checker@gmail.comm');
  await page.locator('#password').fill('FC94DF212');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
await page.getByRole('cell', { name: '1', exact: true }).click();
await page.getByRole('button', { name: 'Approve' }).click();

await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();

// // // // ---------------- Production MAKER ----------------
 await page.locator('#email').fill('anurupadasgupta2904+prod-maker@gmail.com');
  await page.locator('#password').fill('FDF14E49A');
  await page.getByRole('button', { name: 'Sign In' }).click();  
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
  await page.getByRole('cell', { name: '1', exact: true }).click();
await page.getByRole('button', { name: 'Edit' }).click();
await page.getByRole('textbox', { name: 'Case Pack *' }).click();
// await page.getByRole('option', { name: '24/ctn' }).click(); await page.getByRole('option', { name: '12/ctn' }).click();
  await page.getByRole('option', { name: '120/ctn' }).click();
  await page.getByRole('textbox', { name: 'Shelf Life Days' }).click();
  await page.getByRole('option', { name: '120 Days' }).click();

  await page.getByRole('textbox', { name: 'Base Grammage *' }).click();
  // await page.getByRole('combobox', { name: '250g' }).click(); await page.getByRole('combobox', { name: '100G' }).click();
await page.getByRole('option', { name: '250g' }).click();

  await page.getByRole('textbox', { name: 'Diameter' }).click();
  await page.locator('div').filter({ hasText: '50 mm' }).nth(3).click();  
//   await page.getByRole('button', { name: 'Save' }).click();
// await page.getByRole('cell', { name: '1', exact: true }).click();
//   await page.getByRole('button', { name: 'Edit' }).click();
await page.getByRole('button', { name: 'Submit' }).click();

await page.waitForTimeout(2100);  
await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();
// ---------------- Product CHECKER ----------------
await page.locator('#email').fill('anurupadasgupta2904+prod-checker@gmail.com');
  await page.locator('#password').fill('6DF514718');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
await page.getByRole('cell', { name: '1', exact: true }).click();
await page.getByRole('button', { name: 'Approve' }).click();

await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();

// ---------------- Packaging-concept MAKER ----------------
 
 await page.locator('#email').fill('anurupadasgupta2904+pack_con-maker@gmail.com');
  await page.locator('#password').fill('235D2AA32');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
  await page.getByRole('cell', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('textbox', { name: 'Segment 1', exact: true }).fill('ghssb');
  await page.getByRole('textbox', { name: 'Product Code *' }).click();
  await page.locator('div').filter({ hasText: 'MarieFruit FusionNamkeen' }).nth(3).click();
  await page.getByRole('textbox', { name: 'Segment 2' }).fill('test2');
  await page.getByRole('textbox', { name: 'Segment 5' }).fill('test5');
  await page.getByRole('textbox', { name: 'Promo Flag *' }).click();
  await page.getByRole('option', { name: 'Regular' }).click();
  // await page.getByRole('option', { name: 'Promo' }).click();
  // await page.getByRole('option', { name: 'Limited' }).click();
  await page.getByRole('textbox', { name: 'Segment 8' }).fill('css');
  await page.getByRole('textbox', { name: 'Segment 9' }).fill('test');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('cell', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
await page.getByRole('button', { name: 'Submit' }).click();
 

await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();
// ---------------- Package CHECKER ----------------
  await page.locator('#email').fill('anurupadasgupta2904+pack_con_checker@gmail.com');
  await page.locator('#password').fill('DAAC81D68');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
await page.getByRole('cell', { name: '6', exact: true }).click();
await page.getByRole('button', { name: 'Approve' }).click();

await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();
//  ---------------- Packaging-Development MAKER ----------------

  await page.locator('#email').fill('anurupadasgupta2904+pack_dev-maker@gmail.com');
  await page.locator('#password').fill('6A8B20382');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
  await page.getByRole('cell', { name: '6', exact: true }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
await page.getByRole('textbox', { name: 'Free Qty' }).click();
await page.getByRole('option', { name: '10 gram' }).click();
// await page.getByRole('option', { name: '25 gram' }).click();
await page.getByRole('textbox', { name: 'FAC Category' }).click();
await page.getByRole('option', { name: 'Burst' }).click();
// await page.getByRole('option', { name: 'Cake' }).click();
// await page.getByRole('option', { name: 'Cookies' }).click();
// await page.getByRole('option', { name: 'Biscuit' }).click();
await page.getByRole('textbox', { name: 'Volume' }).fill('20');
await page.getByRole('textbox', { name: 'Outer Wrap Weight' }).fill('10');
await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('cell', { name: '6', exact: true }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
await page.getByRole('button', { name: 'Submit' }).click();


await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();
//  ---------------- Packaging-Development CHECKER ----------------
 await page.locator('#email').fill('anurupadasgupta2904+pack_dev-checker@gmail.com');
  await page.locator('#password').fill('C0C27ADEB');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
await page.getByRole('cell', { name: '6', exact: true }).click();
await page.getByRole('button', { name: 'Approve' }).click();

await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();
//  ---------------- Statutory Maker----------------
await page.locator('#email').fill('anurupadasgupta2904+statutory-maker@gmail.com');
  await page.locator('#password').fill('198D2BFC7');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });

  await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
  await page.getByRole('cell', { name: '6', exact: true }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('textbox', { name: 'HSN Code' }).click();
await page.locator('div').filter({ hasText: '19051905 40 001905 321905 31' }).nth(3).click();

await page.getByRole('textbox', { name: 'IGST%' }).click();
await page.locator('div').filter({ hasText: '%5%12%' }).nth(3).click()
// await page.locator('div').filter({ hasText: '%5%12%' }).nth(3).click();

  
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('cell', { name: '6', exact: true }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  

await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();
//  ---------------- Statutory CHECKER ----------------
await page.locator('#email').fill('anurupadasgupta2904+statutory-checker@gmail.com');
  await page.locator('#password').fill('C5B987D6C');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
  await page.getByRole('cell', { name: '6', exact: true }).click();
  await page.getByRole('button', { name: 'Approve' }).click();

await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();
//  ---------------- Finance Maker---------------
await page.locator('#email').fill('anurupadasgupta2904+finance-maker@gmail.com');
  await page.locator('#password').fill('376145F04');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
await page.getByRole('cell', { name: '6', exact: true }).click();
await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('textbox', { name: 'Prefix' }).click();
  await page.getByRole('option', { name: 'Finished Goods' }).click();
  await page.getByRole('textbox', { name: 'Segment 3' }).fill('test2');
  await page.getByRole('textbox', { name: 'Segment 6' }).fill('test2');
  
  await page.getByRole('textbox', { name: 'Field' }).click();
  await page.getByRole('textbox', { name: 'Field' }).fill('test Field 21');

  await page.getByRole('textbox', { name: 'Item Description', exact: true }).click();
  await page.getByRole('textbox', { name: 'Item Description', exact: true }).fill('Test Description ');

  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('cell', { name: '6', exact: true }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  
  
await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();
//  ---------------- Finance CHECKER ----------------
await page.locator('#email').fill('anurupadasgupta2904+finance-checker@gmail.com');
  await page.locator('#password').fill('CB492C57E');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
  await page.getByRole('cell', { name: '6', exact: true }).click();
  await page.getByRole('button', { name: 'Approve' }).click();

await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();
//  ---------------- Supply Maker---------------
  await page.locator('#email').fill('anurupadasgupta2904+supplychain-maker@gmail.com');
  await page.locator('#password').fill('A2027C895');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
await page.getByRole('cell', { name: '6', exact: true }).click();
await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('textbox', { name: 'Mother Brand/Sales Brand' }).click();
  await page.getByRole('option', { name: 'Top Gold' }).click();
  
  await page.getByRole('textbox', { name: 'Item Category' }).click();
  await page.locator('div').filter({ hasText: 'Group-AGroup-BGroup-C' }).nth(2).click();

  await page.getByRole('textbox', { name: 'Item Segment' }).click();
  await page.locator('div').filter({ hasText: 'SweetSemi Sweet' }).nth(3).click();
await page.getByRole('combobox', { name: 'Sweet' }).press('Tab');
  await page.getByRole('textbox', { name: 'EAN No/Item Bar Code' }).fill('W434FDGGHF45555523000125');

  
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('cell', { name: '6', exact: true }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  

await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();
//  ---------------- Supply Checker---------------
await page.locator('#email').fill('anurupadasgupta2904+supplychain-checker@gmail.com');
  await page.locator('#password').fill('130BC785E');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
  await page.getByRole('cell', { name: '6', exact: true }).click();
  await page.getByRole('button', { name: 'Approve' }).click();


await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();
//  ---------------- Trade Maker---------------
  await page.locator('#email').fill('anurupadasgupta2904+trade-maker@gmail.com');
  await page.locator('#password').fill('27F86CA38');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
await page.getByRole('cell', { name: '6', exact: true }).click();
await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('textbox', { name: 'NIQ Sub Brand' }).click();
  await page.getByRole('option', { name: 'Regular' }).click();
  
  await page.getByRole('textbox', { name: 'NIQ Segment' }).click();
  await page.getByRole('option', { name: 'Milk' }).click();
  
  await page.getByRole('textbox', { name: 'NIQ Sub Segment' }).click();
  await page.getByRole('option', { name: 'Digestive' }).click();
  
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('cell', { name: '6', exact: true }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
   
  
await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();
//  ---------------- Trade Checker---------------
await page.locator('#email').fill('anurupadasgupta2904+trade-checker@gmail.com');
  await page.locator('#password').fill('A3205412B');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
  await page.getByRole('cell', { name: '6', exact: true }).click();
  await page.getByRole('button', { name: 'Approve' }).click();

  
await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();
//  ---------------- MDM Maker---------------
await page.locator('#email').fill('anurupadasgupta2904+MDM-maker@gmail.com');
  await page.locator('#password').fill('FD211BDF4');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
await page.getByRole('cell', { name: '1', exact: true }).click();
await page.getByRole('button', { name: 'Edit' }).click();

await page.getByRole('textbox', { name: 'Unit of Measure *' }).click();
await page.locator('div').filter({ hasText: 'BAGBOXCBBCFTCMCMTDZNLOTLTSMLMTSPCSPKTSETSMTSFTGMKGLOTLTSMLMTSPCSPKTSETSMTSFT' }).nth(3).click();

await page.getByRole('textbox', { name: 'Template Master' }).click();
await page.locator('div').filter({ hasText: 'SAJ FG ITEM TEMPALTE' }).nth(3).click();
await page.getByRole('textbox', { name: 'Field 9' }).click();
await page.getByRole('textbox', { name: 'Field 9' }).fill('Test Field 9');

await page.getByRole('button', { name: 'Next' }).click();

await page.getByRole('textbox', { name: 'Field 1' }).click();
await page.getByRole('textbox', { name: 'Field 1' }).fill('Test Field 1');
await page.getByRole('textbox', { name: 'Field 4' }).click();



  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('cell', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

await page.locator('.TopbarChip').click();
await page.getByText('Sign Out').click();

//  ---------------- MDM Checker---------------
await page.locator('#email').fill('anurupadasgupta2904+MDM-checker@gmail.com');
  await page.locator('#password').fill('BE12FD85F');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForURL('**/main/**', { timeout: 60000 });
  await page.goto('http://3.110.239.158:8671/#/main/general/master/item-master/list');
  await page.getByRole('cell', { name: '2', exact: true }).click();
await page.getByRole('button', { name: 'Reject' }).click();
await page.getByRole('textbox', { name: 'Comments *' }).fill('Please change this test');

// await page.locator('.TopbarChip').click();
// await page.getByText('Sign Out').click();


})
