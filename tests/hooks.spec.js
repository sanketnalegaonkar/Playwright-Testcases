const { test, expect } = require('@playwright/test');

test.beforeAll(async () => {


    console.log("This is beforeAll ")
})

test.beforeEach(async () => {


    console.log("This is beforeEach ")
})

test.afterAll(async () => {


    console.log("This is afterAlll ")
})

test.afterEach(async () => {


    console.log("This is afterEach ")
})

//-----------------------------------------------------------

test.describe("Intake record page", () => {
    test('test1', async ({ page }) => {

        console.log("test 1");

    })

    test('test2', async ({ page }) => {

        console.log("test 2");

    })

})
//-----------------------------------------------------------

test.describe("Patient Enroll Form Page", () => {
    test('test3', async ({ page }) => {
        console.log("test 3");

    })

    test('test4', async ({ page }) => {

        console.log("test 4");

    })


})