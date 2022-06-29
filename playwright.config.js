const { devices, chromium, firefox, webkit } = require('@playwright/test')

const config = {


    // globalSetup : require.resolve('./global-setup'),
    projects : [

        // {
        //     name : 'applicationA',
        //     use : {
        //         headless : false,
        //         viewport : {
        //             height : 1080,
        //             width : 1920
        //         },
        //         screenshot : 'only-on-failure',
        //         // video : 'retain-on-failure'
        //         video : 'on-first-retry',
        //         launchOptions : {
        //             slowMo : 100,
        //         },
        //         // storageState : './appA.json',

        //     },
        //     timeout: 30*1000,
        //     retries : 1,
        //     testDir : './tests/applicationA',
        // // testMatch : 'project1**.spec.js',
        // // testIgnore : '**Two.spec.js',
        // // grep : /smoke/
        // },
        {
            name : 'applicationB',
            use : {
                headless : false,
                viewport : {
                    height : 1080,
                    width : 1920
                },
                screenshot : 'only-on-failure',
                // video : 'retain-on-failure'
                video : 'on-first-retry',
                launchOptions : {
                    slowMo : 100,
                },

            },
            timeout: 60*1000,
            // retries : 1,
            testDir : './tests/applicationB',
        //  testMatch : 'WindowHandle.js',
        // testIgnore : '**Two.spec.js',
        // grep : /regression/    
        },
    ],

    
    workers : 3,
    reporter : [['list'],['dot'],['json',{outputFile : 'jsonreport.json'}],['html',{open : 'never'}],['allure-playwright',{outputFolder : 'allure-result'}]]

//     // projects : [

//     //     {
//     //         name : 'pixel4',
//     //         use : {
//     //             browsername : 'chromium',
//     //             // channel : 'chrome',
//     //             channel : 'msedge',
//     //             ...devices['Pixel 4']
//     //         }
//     //     },
//     //     {
//     //         name : 'iphone13',
//     //         use : {
//     //             browsername : 'webkit',
//     //             ...devices['iPhone 13']
//     //         }
//     //     },
  
//     //     // {
//     //     //     name : 'chromium',
//     //     //     use : {...devices['Desktop Chrome']}
//     //     // },

//     //        {
//     //            name : 'chrome',
//     //            use : {
//     //                channel : 'chrome',
                
//     //            },
//     //        },
//     //        {
//     //            name : 'msedge',
//     //            use : {
//     //                channel : 'msedge',
//     //                downloadsPath : './Downloads',
//     //             //    acceptDownloads : true
//     //            }
//     //        },
//     //     // {
//     //     //     name : 'firefox',
//     //     //     ues : {...devices['Desktop Firefox']}
//     //     // },
//     //     // {
//     //     //     name : 'webkit',
//     //     //     use : {...devices['Desktop Safari']}
//     //     // },
//     // ],

//     //  use : {
//     //     headless : false,
//     //     viewport : {
//     //         height : 1080,
//     //         width : 1920
//     //     },
//     //     screenshot : 'only-on-failure',
//     //     // video : 'retain-on-failure'
//     //     video : 'on-first-retry',
//     //     launchOptions : {
//     //         slowMo : 100,
//     //     },

//     // },
//     // timeout: 30*1000,
//     // retries : 1,
//     // workers : 3,
//     // testDir : './project1',
//     // // testMatch : '**Two.spec.js',
//     // // testIgnore : '**Two.spec.js',
//     // // grep : /first test/
    
}

module.exports = config;