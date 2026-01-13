const{test,expect}= require('@playwright/test');

test('Handle Date Picker', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);

   const year = "2020";
   const month ="March";
   const date = "15";

   const datepicker = await page.locator("//")

    
})