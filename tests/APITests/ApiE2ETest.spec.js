const { test, expect }  = require('@playwright/test');
const { makePostCall } = require('../UtilitiesRequest/Request');

test('POST : Create user ', async({request})=>{

    let requestPayload = {
            name: "pradeep",
            job: "tester"
    };

    let headers = {
        'accept' : 'application/json',
        'Content-Type' : 'application/json',
        // 'authorization' : 'bearer jdjskksj'
    };

    const response = await makePostCall('https://reqres.in/','api/users',headers,{},requestPayload,request);
    console.log('response ',response);
    
    // let queryParams = {};

    //   const response = await request.post('https://reqres.in/api/users',{
    //   headers : headers,
    //   data : requestPayload,
    //   params : queryParams
    //   });

      // expect(response.status()).toBe(201);
      // expect(response.ok()).toBeTruthy();
      // console.log(await response.json());

      //when request hava different key names and response have different keys
      // actualData = {
      //   name : (await response.json()).name,
      //   job : (await response.json()).job
      // };

      // when you have to compare limited set of keys
    //  let keySet = Object.keys(requestPayload);
    //  for(let key of keySet){

    //   console.log('keys to compare ',key);
    //   console.log((await response.json())[key]);
    //   expect((await response.json())[key]).toEqual(requestPayload[key]);
    //   expect(actualData[key]).toEqual(requestPayload[key]);
    //  }
 
    //   console.log(actualData);
    //   //when you want to compare object to object
    //   expect(actualData).toMatchObject(requestPayload);
})