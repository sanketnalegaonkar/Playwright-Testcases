import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.waitForTimeout(3000);

  
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
    await page.waitForTimeout(3000);

  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
    await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'Submit' }).click();
});