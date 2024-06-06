import { expect, test } from "../base/basePage";
import * as data from "../testData/loginData.json";
test.beforeEach("Task Edit", async ({ page, baseURL, loginPage,editingPage }) => {
  await page.goto(`${baseURL}auth/login`);
  await loginPage.login(data.email, data.password);
  });
test.describe("Task Station automation", async () => {  
    test("Task Edit", async ({ page, baseURL, loginPage,editingPage }) => {
      // await page.goto(`${baseURL}auth/login`);
      // await loginPage.login(data.email, data.password);
      await editingPage.clickDetail(data.taskTitle)
      await editingPage.editDetail(data.project,data.tag,data.description,data.oldTime,data.date,data.editiedTime,data.remark)


    });

    test("Todo to Complete ", async ({ page, baseURL, loginPage,editingPage }) => {
      // await page.goto(`${baseURL}auth/login`);
      // await loginPage.login(data.email, data.password);
      await editingPage.clickDetail(data.taskTitle)
      await editingPage.todoToComplete()
    });

    test("Complete To Blocker ", async ({ page, baseURL, loginPage,editingPage }) => {
      // await page.goto(`${baseURL}auth/login`);
      // await loginPage.login(data.email, data.password);
      await editingPage.clickDetail(data.taskTitle)
      await editingPage.completeToBlocker()
    });

    test("Blocker To Todo", async ({ page, baseURL, loginPage,editingPage }) => {
      // await page.goto(`${baseURL}auth/login`);
      // await loginPage.login(data.email, data.password);
      await editingPage.clickDetail(data.taskTitle)
      await editingPage.blockerToTodo()
    });
    
  });