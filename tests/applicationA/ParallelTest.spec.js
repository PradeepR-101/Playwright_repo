const { test } = require('@playwright/test');

// test.describe.configure({mode : 'serial'});
test.describe.configure({mode : 'parallel'});

test('test1 parallel ', async ({page})=>{

    await page.goto('https://www.amazon.com/');
})

test('test2 parallel', async ({page})=>{

    await page.goto('https://www.google.com/');
})

test('test3 parallel', async ({page})=>{
 
    await page.goto('https://playwright.dev/');
})
