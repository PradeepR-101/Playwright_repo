const { test, expect } = require("@playwright/test");

// test.use({
//     headless : false,
//     viewport : {
//         height : 500,
//         width : 300
//     },
//     screenshot : 'off'
// })

test("second test", async ({page}) => {

await page.goto("https://www.amazon.com/");
await page.waitForTimeout(3000);
console.log(await page.title());
// expect(true).toBeFalsy();

})