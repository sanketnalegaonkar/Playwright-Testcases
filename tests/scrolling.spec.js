const{test,expect} = require('@playwright/test');

test('Scroll page', async({page})=> {

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.waitForTimeout(3000);

    await page.evaluate(()=> {

        window.scrollBy(0,500);
    }
    
    
    )



})