const { test, expect } = require('@playwright/test');
const { fs } = require('fs');
const {readFileSync} = require('fs');
const path = require('path');

const testData = JSON.parse(fs.readFileSync('./jsondatavalidationtest.json','utf-8'));

//  [{

//     URL : 'https://www.google.com/',
//     title : 'Google'
// },
// {
//     URL : 'https://playwright.dev/',
//     title : 'Fast and reliable end-to-end testing for modern web apps | Playwright'
// }];
console.log('testdata  ',testData);

for ( const obj of testData){

    test(`json data param ${obj.URL} `, async ({page})=>{

        await page.goto(obj.URL);
        await page.waitForTimeout(2000);
        expect(await page.title()).toBe(obj.title);
        });
};

