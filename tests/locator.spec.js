const{test, expect} = require('@playwright/test');

test('locators', async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(3000);

    const logo = await page.getByAltText("company-branding");

    await expect(logo).toBeVisible();
    await page.waitForTimeout(3000);

    await page.getByPlaceholder("Username").fill('admin');
    await page.waitForTimeout(3000);

    await page.getByPlaceholder("Password").fill('admin123');
    await page.waitForTimeout(3000);

    await page.getByRole('button',{type:'submit'}).click();
   // await page.waitForTimeout(3000);

   const username = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();

   await expect (await page.getByText(username)).toBeVisible();
   console.log(username);
   await page.waitForTimeout(3000);



})