import { devices, type PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testMatch: [
    "/Tests/loginTest.spec.ts",
    "/Tests/editingTest.spec.ts"
  
  ],

  use: {
    
    baseURL: "https://sbueurope.mytask.today/",
    headless: false,
    bypassCSP:false,
    viewport: { width: 1536, height: 730 },
    screenshot: "on",
    video: "on",
  },

  projects:[
    // {name:"safari",
    //   use:{...devices["Desktop Safari"],
    //     headless:false
    //   }
    // },

    {
      name:"chrome",
      use:{
        ...devices["Desktop Chrome"],
      viewport: { width: 1536, height: 730 },

      }
    },

    // {name:"firefox",
    //   use:{...devices["Desktop Firefox"],
    //   viewport: { width: 1536, height: 730 },
        
    //   }
    // },
    

  ],

  
  // retries: 3,
  reporter: [
    ["allure-playwright"],
    ["dot"],
    [
      "json",
      {
        outputFile: "jsonReport/jsonReport.json",
      },
    ],
    [
      "html",
      {
        outputFile: "htmlReport/htmlReport.html",
        open: "never",
      },
    ],
  ],
};

export default config;