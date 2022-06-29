const { test } = require('@playwright/test');

// test('single window handle ', async ({context,page}) =>{

// await page.goto('https://letcode.in/windows');

// const [newPage] = await Promise.all([
// context.waitForEvent('page'),
// await page.click('#home')
// ]);

// await newPage.waitForLoadState('load',{timeout : 30*1000});
// console.log('number of pages ', (await page.context().pages()).length);

// await page.click('#testing');
// // await page.waitForTimeout(5000);
// await newPage.click("//a[text()='Product']");
// // await page.waitForTimeout(5000);

// let pages = await page.context().pages();
// pages.forEach( localpage =>{

//     console.log('title of the page ',localpage.title());
//     console.log('title of the page ',localpage.url());
// })

// await page.bringToFront();
// // await page.waitForTimeout(5000);
// await newPage.bringToFront();
// // await page.waitForTimeout(5000);

// await page.close();
// // await context.close();
// // await newPage.close();

// // await page.waitForTimeout(2000);
// });

test('multi window handle ', async ({context,page}) =>{

    await page.goto('https://letcode.in/windows');
    
    const [newPages] = await Promise.all([
    context.waitForEvent('page'),
    await page.click('#multi')
    ]);
    
    await newPages.waitForLoadState('load',{timeout : 30*1000});
    console.log('number of pages ', (await page.context().pages()).length);
    
    await page.click('#testing');
    // await page.waitForTimeout(5000);
    
    
    let allPages = await page.context().pages();

    for(let newPage of allPages){

        if(newPage.url().includes('alert')){

            await newPage.waitForTimeout(3000);
            await newPage.bringToFront();
            await newPage.on('dialog', async dialog =>{
                await page.waitForTimeout(5000);
                await dialog.accept();
            })
            await newPage.waitForTimeout(3000);
            await newPage.click('#accept');
            
            break;
        }
    }
    
    });