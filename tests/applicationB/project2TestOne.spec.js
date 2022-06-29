const { test, expect } = require("@playwright/test");
const {Utilities} = require("../Utilities");

test.use({storageState: './test1/json'});
test("second test @regression", async ({page}) => {

    test.setTimeout(60*1000);

await page.goto("https://github.com/");
await page.waitForTimeout(3000);
console.log(await page.title());
// expect(true).toBeFalsy();

})