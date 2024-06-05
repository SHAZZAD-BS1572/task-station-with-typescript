import { Page, expect } from "@playwright/test";
import moment from "moment";
let date = "04/05/2024";


export default class EditingPage {
  constructor(public page: Page) { }



  async clickDetail(taskTitle: string) {

    //await this.page.locator('div').filter({ hasText: /^Task_To_Edit$/ }).getByLabel('Details').getByLabel('icon-button').click();

    //await this.page.click("(//h5[normalize-space()='Task_To_Edit'])[1]")
    await this.page.click(`//h5[contains(text(),'${taskTitle}')]/following-sibling::div[@class='MuiStack-root css-l256j9']/span[@aria-label='Details']`);
    await this.page.waitForTimeout(5000)
  }

  async editDetail() {
    await this.page.click("(//div[@id='task-view-modal-project'])[1]")
    await this.page.click("(//li[@role='menuitem'])[1]")
    await this.page.locator('#task-view-modal-projectchipMenu div').first().click();
    await this.page.click("(//div[@id='task-view-modal-project'])[2]");
    await this.page.locator("(//li[normalize-space()='Learning'])[1]").click();
    await this.page.locator('#task-view-modal-projectchipMenu div').first().click();
    await this.page.waitForTimeout(5000)
    await this.page.locator('.jodit-wysiwyg').fill('Test task');
    await this.page.getByRole('button', { name: 'Save' }).click();
    await expect(this.page.locator('div').filter({ hasText: /^Description added$/ }).nth(3)).toBeVisible();
    await this.page.getByRole('tab', { name: 'Work log' }).click();
    await this.page.getByText('15m').click();
    await this.page.getByLabel('Total Time').click();
    await this.page.getByLabel('Total Time').press('ArrowLeft');
    await this.page.getByLabel('Total Time').fill('15m');
    await this.page.fill("//input[@placeholder='DD/MM/YYYY']",date)
    // await this.page.getByRole('button', { name: 'Choose date, selected date is' }).click();
    // await this.page.getByRole('gridcell', { name: '4', exact: true }).click();
    // await this.page.getByRole('button', { name: 'Edit' }).click();
    // await expect(this.page.getByRole('list')).toContainText('15m');
    // await expect(this.page.getByRole('list')).toContainText('2024-06-04');
    // await this.page.getByRole('tab', { name: 'Timeline' }).click();
    // await this.page.getByRole('tab', { name: 'Task Info' }).click();
    // await expect(this.page.getByLabel('Task Info', { exact: true })).toContainText('20m');
    // await this.page.getByRole('button', { name: 'Close' }).click();
    // await expect(this.page.locator('#to_do-drop-point')).toContainText('20m');




  }

  
 

  

}