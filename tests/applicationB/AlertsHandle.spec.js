const { default : test } = require('@playwright/test');

test('prompt alert  ', async({page})=>{

await page.goto('https://letcode.in/alert');

await page.on('dialog', async dialog => {

    await page.waitForTimeout(2000);
    console.log('message : ', await dialog.message());
    console.log('default value : ', await dialog.defaultValue());
    // await dialog.accept();
    // await dialog.dismiss();
    await dialog.accept('simple text');
});

// await page.click('#accept');
// await page.click('#confirm');
await page.click('#prompt');
await page.waitForTimeout(3000);
});