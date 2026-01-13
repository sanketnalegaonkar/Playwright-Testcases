const{test, expect}=require('@playwright/test');
test('Multiple Tab Handling', async({page})=>{

    const browser = await chromium.launch()

    await page.goto("");
    await page.waitForTimeout(3000);



})