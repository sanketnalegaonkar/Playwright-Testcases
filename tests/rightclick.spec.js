const {test, expect}=require('@playwright/test');
test ('rigth click', async({page})=>{

await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
await page.waitForTimeout(3000);

let rightclick = await page.locator("//span[text()='right click me']");
await rightclick.click({button:'right'})

await page.waitForTimeout(3000);


})

