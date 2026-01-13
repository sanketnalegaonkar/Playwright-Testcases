const { test, expect } = require('@playwright/test');

test("Amazon page screenshot", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.screenshot({ path: 'tests/screenshot/' + "Homepage.png" });

})



test("Amazon page full screenshot", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.screenshot({ path: 'tests/screenshot/' + "Fullpage.png", fullPage: true });

})



test.only("Amazon page element screenshot", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000);
    const Element = await page.locator("//h2[text()='Revamp your home in style'] ");
    await Element.screenshot({ path: 'tests/screenshot/' + "elementpage.png" });


})