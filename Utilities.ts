import { chromium } from "@playwright/test";

export class Utilities {

    static async storeSession() {

        const browser = await chromium.launch({headless : true});
        const page = await browser.newPage();
        await page.goto('https://github.com/');
        await page.waitForTimeout(7000);

        if(await page.isVisible("//input[@placeholder='Search or jump to…']")){

        await page.click("summary[aria-label='View profile and more']");
        await page.waitForSelector("//button[contains(text(),'Sign out')]", {timeout : 10*1000})
        await page.click("//button[contains(text(),'Sign out')]");
        await page.waitForSelector("//a[contains(text(),'Sign in')]",{timeout:20*1000})

        }
        await page.click("//a[contains(text(),'Sign in')]");
        await page.waitForSelector('#login_field', {timeout:10*1000});
    await page.type('#login_field', 'rpradee666@gmail.com');
    await page.type('#password', 'PradeepRajanna@8310321054')
    await page.click("//input[@name='commit']");
    await page.context().storageState({path: './test1.json'});
    console.log('I am done with the new session');
    await page.close();
    await browser.close();
        
    };
};