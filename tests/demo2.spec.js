import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForTimeout(3000);
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');

  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.waitForTimeout(3000);
  
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.locator('div').filter({ hasText: /^Time at Work$/ }).first().click();
  await page.locator('div').filter({ hasText: /^My Actions$/ }).first().click();
  await page.locator('div').filter({ hasText: /^Quick Launch$/ }).first().click();
});