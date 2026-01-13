const{test, expect}=require('@playwright/test');
test('single file upload', async ({page})=> {

    await page.goto("https://automationtesting.co.uk/fileupload.html");
    await page.waitForTimeout(3000);

    await page.locator("//input[@name='fileToUpload']").setInputFiles("tests/Upload Files/Sanket_Nalegaonkar_QA_Automation_SDET_Playwright.pdf");
    await page.waitForTimeout(3000);

    await page.locator("//input[@name='submit']").click();


})