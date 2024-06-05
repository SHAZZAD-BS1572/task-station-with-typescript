import test from "@playwright/test";
import moment from "moment";

test("Calendar demo using fill function", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );
  let date = "1995-02-08";

  await page.fill("//input[@id='birthday']", date);
  await page.waitForTimeout(3000);
});

 
//Write on console[document.getElementById("birthday").value]
