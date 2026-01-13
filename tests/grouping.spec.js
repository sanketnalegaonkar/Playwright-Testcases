const { test, expect } = require('@playwright/test');


test.describe("Intake record page", () => {
    test('test1', async ({ page }) => {

        console.log("test 1");

    })

    test('test2', async ({ page }) => {

        console.log("test 2");

    })

})
//-----------------------------------------------------------

test.describe.only("Patient Enroll Form Page", () => {
    test('test3', async ({ page }) => {
        console.log("test 3");

    })

    test('test4', async ({ page }) => {

        console.log("test 4");

    })


})
