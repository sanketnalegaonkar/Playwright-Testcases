import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('abc');
 
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('abc@gmail.com');

  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('4526632630');
 
  await page.getByRole('textbox', { name: 'Address:' }).fill('jicvcn123');

  await page.getByRole('radio', { name: 'Male', exact: true }).check();

  await page.getByRole('checkbox', { name: 'Tuesday' }).check();
  await page.getByRole('checkbox', { name: 'Wednesday' }).check();
  await page.getByRole('checkbox', { name: 'Thursday' }).check();
  await page.getByRole('checkbox', { name: 'Friday' }).check();
  await page.getByLabel('Country:').selectOption('australia');
  await page.getByLabel('Colors:').selectOption('red');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Simple Alert' }).click();
});