const { test, expect} = require('@playwright/test');

// test('direct comaprision ', async ({page})=>{

// await page.goto('https://playwright.dev/');

// expect(await page.screenshot({fullPage: true})).toMatchSnapshot();
// // expect(await page.screenshot()).toMatchSnapshot('testfilename.png');
// })

// test('locator based screen comaprision ', async ({page})=>{

//     await page.goto('https://playwright.dev/');
//    expect(await page.locator('.buttons_pzbO').screenshot()).toMatchSnapshot();
//     })

test('dynamci content ',  async ({page}) =>{

 await page.goto('https://letcode.in/');
 expect(await page.screenshot()).toMatchSnapshot();
})

//--update-snapshots  to update the snapshot in command line argument