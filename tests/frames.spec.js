const { test, expect } = require('@playwright/test');
test('Handling Iframe', async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");
    await page.waitForTimeout(3000);

    let all_frames = await page.frames()
    console.log("Number of Frames are:  ", all_frames.length);


    //Handle frame with url
    let frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' });
    await frame3.fill("//input[@name='mytext3']", 'Hi Team Automation');

   //Handle frame with Name and FrameLocator

   let frame1 = await page.frameLocator("//frame[@src='frame_1.html']");
   await frame1.locator("//input[@name='mytext1']").fill("Hi This is Sanket");

   await page.waitForTimeout(3000);

   






})