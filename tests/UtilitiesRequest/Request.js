const { test, expect } = require ('@playwright/test');

async function makePostCall(gateway,uri,Headers,queryParams,requestPayload,request){

    const response = await request.post(`${gateway}${uri}`,{

        Headers : Headers,
        params : queryParams,
        data : requestPayload,
    });
    expect((await response).status()).toBe(201);
    expect((await response).ok()).toBeTruthy();
    return await response.json();
}

module.exports = {makePostCall};