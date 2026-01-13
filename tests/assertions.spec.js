const {test , expect} = require('@playwright/test');

test ('Assertions in playwright', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register');
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    const logo = await page.locator("//div[@class='header-logo']");
    await expect(logo).toBeVisible();

    const searchbox = await page.locator("//input[@id='small-searchterms']");
    await expect(searchbox).toBeEnabled();

    const Male_Radio_Button = await page.locator("#gender-male");
    await Male_Radio_Button.click();
    await expect(Male_Radio_Button).toBeChecked();

    const newsLetter_Checkbox = await page.locator("//input[@type='checkbox']");
    await expect(newsLetter_Checkbox).toBeChecked();

    

})