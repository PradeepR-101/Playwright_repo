const {default : test, chromium, devices} = require("@playwright/test");
// import Utilities from "../../Utilities";
const {Utilities} = require("../Utilities");

test.describe('store session1', async()=>{

    test.use({storageState:'./test1.json'});

    test("first test with first case @regression ", async ({browser}) => {

        test.setTimeout(60*1000);
    
        // console.log("devices: ", devices);
        const page = await browser.newPage();
        await page.goto("https://github.com/");
        await page.waitForTimeout(3000);
        console.log(await page.title());
       
    });
    // test("first test with second case @smoke ", async ({browser}) => {
    
    //     // test.setTimeout(60*1000);
    
    //     // console.log("devices: ", devices);
    //     const page = await browser.newPage();
    //     await page.goto("https://github.com/");
    //     await page.waitForTimeout(3000);
    //     console.log(await page.title());
       
    // });
});

test.afterAll(async () => {
        console.log('after all');
        await Utilities.storeSession();
    })
