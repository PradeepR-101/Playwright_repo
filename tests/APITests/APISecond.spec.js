const { test } = require('@playwright/test');
const { fs, readFileSync } = require('fs');
const { json } = require('stream/consumers');

// const jsonObj = JSON.parse(fs,readFileSync('./payload/json','utf-8'));
// const json1 = {
//     firstname : 'pradeep',
//     lastname : 'rajanna'
// };

test('request payload ', async ()=>{

    // jsonObj.firstname = dynamicValue;

    let requestPayload = {};

    requestPayload['name'] = 'lofer',
    requestPayload['job'] = 'waste fellow',
    requestPayload['employers'] = [];

    for(let i=0; i<3 ; i++){

        let employer = {
            empName : 'L&T',
            startDate : '21st june 2022'
        };
        requestPayload['employers'].push(employer);
    }
    console.log(requestPayload);
})