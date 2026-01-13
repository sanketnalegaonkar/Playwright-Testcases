const { test, expect } = require('@playwright/test');

test('test1@sanity', async ({ page }) => {

    console.log("test 1");
    
})

test('test2@smoke', async ({ page }) => {

    console.log("test 2");
    
})

test('test3@sanity', async ({ page }) => {

    console.log("test 3");
    
})

test('test4@sanity@reg', async ({ page }) => {

    console.log("test 4");
    
})

test('test5@reg', async ({ page }) => {

    console.log("test 5");
    
})