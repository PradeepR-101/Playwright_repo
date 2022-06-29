const {default : test, chromium, devices} = require("@playwright/test")

// test.use({
//     headless : false,
//     viewport : {
//         height : 800,
//         width : 500
//     }
// })

test("first test first case  ", async ({page}) => {

    // test.setTimeout(60*1000);

    // console.log("devices: ", devices);
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000);
    console.log(await page.title());
   
})

test("first test second case  ", async ({page}) => {

    // console.log("devices: ", devices);
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(3000);
    console.log(await page.title());
   
})

