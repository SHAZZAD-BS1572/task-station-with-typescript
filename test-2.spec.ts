import test from "@playwright/test";
import moment from "moment";

test("Calendar Demo Using moment", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );

  await selectStartDate(6, "May 2023");

  await page.waitForTimeout(3000);

  await selectEndDate(6, "December 2024");

  await page.waitForTimeout(5000);

  async function selectStartDate(date: number, dateToSelect: string) {
    await page.click("//input[@placeholder='Start date']");

    const mmyy = page.locator(
      "div[class='datepicker-days'] th[class='datepicker-switch']"
    );
    const prev = page.locator("div[class='datepicker-days'] th[class='prev']");
    const next = page.locator("div[class='datepicker-days'] th[class='next']");

    const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore(moment()); 
    console.log(thisMonth);

    while ((await mmyy.textContent()) !== dateToSelect) {
      if (thisMonth) {
        await prev.click();
      } else {
        await next.click();
      }
      
    }
    await page.click(
      `(//td[contains(@class,'day')][normalize-space()='${date}'])[1]`
    );
  }

  async function selectEndDate(date: number, dateToSelect: string) {
    await page.click("//input[@placeholder='End date']");

    const mmyy = page.locator(
      "div[class='datepicker-days'] th[class='datepicker-switch']"
    );
    const prev = page.locator("div[class='datepicker-days'] th[class='prev']");
    const next = page.locator("div[class='datepicker-days'] th[class='next']");

    const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore(moment()); 
    console.log(thisMonth);

    while ((await mmyy.textContent()) !== dateToSelect) {
      if (thisMonth) {
        await prev.click();
      } else {
        await next.click();
      }
    
    }
    await page.click(
      `(//td[contains(@class,'day')][normalize-space()='${date}'])[1]`
    );
  }
});


