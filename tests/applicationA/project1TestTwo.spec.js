const {default : test, chromium, devices} = require("@playwright/test");
const {Utilities} = require("../Utilities");

test.use({storageState : './test1.json'})

test("first test first case @smoke ", async ({page}) => {

    await page.goto('https://github.com/');

    // test.setTimeout(60*1000);

    // console.log("devices: ", devices);
    // await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000);
    console.log(await page.title());
})

// test.afterAll(async () => {
//     console.log('after all');
//     await Utilities.storeSession();
// })