const { test, expect } = require('@playwright/test');
// https://www.npmjs.com/package/convert-excel-to-json
const excelToJson = require('convert-excel-to-json');

const testData = excelToJson({
    sourceFile: 'SOME-EXCEL-FILE.xlsx',
    header : {
        rows :1
    },
    sheets : [{
        name : Sheet1,
        columnToKey : {
            A : 'url',
            B : 'title'
        }
    }]
});

console.log('testdata  ',testData);

for ( const obj of testData.Sheet1){

    test(`json data param ${obj.url} `, async ({page})=>{

        await page.goto(obj.url);
        await page.waitForTimeout(2000);
        expect(await page.title()).toBe(obj.title);
        });
};

