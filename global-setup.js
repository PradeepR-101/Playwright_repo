const {chromium,test} = require('@playwright/test');

async function storeSession(){

    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://github.com/');
    await page.click("//a[contains(text(),'Sign in')]");
    await page.waitForSelector('#login_field', {timeout:10*1000});
    await page.type('#login_field', 'rpradee666@gmail.com');
    await page.type('#password', 'PradeepRajanna@8310321054')
    await page.click("//input[@name='commit']");
    await page.context().storageState({path: './test1.json'});
    await page.close();
    await browser.close();
}

module.exports = storeSession;