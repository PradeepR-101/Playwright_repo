const { test} = require('@playwright/test');

test('sample test palywright', async({page})=>{

await page.goto('https://playwright.dev/');
})