import { Page } from "@playwright/test";

export default class LoginPage {
  constructor(public page: Page) {}

  async enterEmail(email: string) {
    await this.page.locator("//input[@name='email']").type(email);
  }

  async enterPassword(password: string) {
    await this.page.locator("//input[@name='password']").type(password);
  }

  async clickinBtn() {
    await this.page.click("(//button[normalize-space()='Login'])[1]");
  }

  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickinBtn();
    
  }
}

////h5[normalize-space()='Task station KT session']/ancestor::*[@id='done-drop-point']