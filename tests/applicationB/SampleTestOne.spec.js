const { test} = require('@playwright/test');

test('sample test google', async({page})=>{

await page.goto('https://www.google.com/');
await page .type("//input[@name='q']",'amazon');
await page.keyboard.press('Enter');

await page.click("//h3[text()='Amazon.in']");
await page.click("//a[text()='Mobiles']");
// await page.click("//span[text()='Redmi']");
// await page.click("//span[contains(text(),'-Super Amoled Display | 33W Charger Included')]");


})