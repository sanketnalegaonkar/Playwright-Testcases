const {test, expect}= require('@playwright/test');

test('make my trip', async ({page})=>{

    await page.goto('https://www.makemytrip.com/');
    await page.waitForTimeout(3000);

    await page.locator("//span[@data-cy='defaultFromValue']").click();
    





})

