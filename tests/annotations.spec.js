const { test, expect } = require('@playwright/test');

test('test1', async ({ page }) => {
    await page.goto('');
    await page.waitForTimeout(3000);
    console.log("This is Test case 1");





})

test('test2', async ({ page }) => {

    await page.goto('');
    await page.waitForTimeout(3000);
    console.log("This is Test case 2");
})

test('test3', async ({ page }) => {

    await page.goto('');
    await page.waitForTimeout(3000);
    console.log("This is Test case 3");
})

test('test4', async ({ page }) => {

    await page.goto('');
    await page.waitForTimeout(3000);
    console.log("This is Test case 4");
})