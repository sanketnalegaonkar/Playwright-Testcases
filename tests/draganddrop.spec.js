const { test, expect } = require('@playwright/test');

test('drag and drop',async({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    const draganddrop = await page.locator("//h2[text()='Drag and Drop']");
    await draganddrop.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);

    const sorce = await page.locator("//div[@id='draggable']");
    const dest = await page.locator("//div[@id='droppable']");
   
    await sorce.dragTo(dest);
    await page.waitForTimeout(3000);






})