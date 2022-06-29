const { test, expect } = require('@playwright/test');
// const {csv}  = require('convert-csv-to-json');
const {csv} = require('csvtojson');

test('read data from csv file ', async ({page})=>{

    const testData = await csv().fromFile('./CsvTestData.csv');
    console.log('test data', testData);

    for(const obj of testData){

        await page.goto(obj.url);
        await page.waitForTimeout(2000);
        expect(await page.title()).toBe(obj.title);

    }
})