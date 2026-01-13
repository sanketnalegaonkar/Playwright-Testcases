const{test,expect} =require('@playwright/test');

test('Orange HRM Application Login Page',async({page})=> {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(4000);

    await page.locator("//input[@name='username']").fill("Admin");
    await page.waitForTimeout(4000);

    await page.locator("//input[@name='password']").fill("admin123");
    await page.waitForTimeout(4000);

    await page.locator("//button[@type='submit']").click();
    await page.waitForTimeout(4000);












}



)