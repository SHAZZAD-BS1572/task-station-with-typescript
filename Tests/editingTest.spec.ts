import { expect, test } from "../base/basePage";
import * as data from "../testData/loginData.json";

test.describe("Page object test demo", async () => {  
    test("Login test_02", async ({ page, baseURL, loginPage,editingPage }) => {
      await page.goto(`${baseURL}auth/login`);
      await loginPage.login(data.email, data.password);
      await editingPage.clickDetail(data.taskTitle)
      await page.waitForTimeout(3000)
      await editingPage.editDetail()
      await page.waitForTimeout(3000)


    });
   
  });