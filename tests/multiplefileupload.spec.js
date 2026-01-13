const{test,expect}=require('@playwright/test');
test('Multiple File Upload', async({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.waitForTimeout(3000);

    await page.locator("//input[@name='filesToUpload']").
    setInputFiles(["tests/Upload Files/JavaScript Notes .docx","tests/Upload Files/Js Playwright Syllabus.txt",
        "tests/Upload Files/Sanket_Nalegaonkar_QA_Automation_SDET_Playwright.pdf"
    ]);

    await page.waitForTimeout(4000);



})