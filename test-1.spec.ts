import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sbueurope.mytask.today/auth/login');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('sumaiya.habib@brainstation-23.com');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('BS1574');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Report' }).click();
  await page.getByPlaceholder('MM/DD/YYYY').first().click();
  await page.getByLabel('Choose date, selected date is Jun 2,').click();
  await page.getByRole('gridcell', { name: '1', exact: true }).click();
  await page.getByPlaceholder('MM/DD/YYYY').nth(1).click();
  await page.getByLabel('Choose date, selected date is Jun 8,').click();
  await page.getByRole('gridcell', { name: '7', exact: true }).click();
});