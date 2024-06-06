import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sbueurope.mytask.today/auth/login');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('sumaiya.habib@brainstation-23.com');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('BS1574');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByLabel('Details').getByLabel('icon-button').click();
  await page.getByRole('tab', { name: 'Work log' }).click();
  await page.getByText('15m').click();
  await page.getByLabel('Choose date, selected date is Jun 4,').click();
  await page.getByRole('gridcell', { name: '6', exact: true }).click();
  await page.getByLabel('Total Time').click();
  await page.getByLabel('Total Time').fill('1h');
  await page.getByLabel('Remarks').click();
  await page.getByLabel('Remarks').fill('test');
  await page.getByRole('button', { name: 'Edit' }).click();
  await expect(page.getByText('Log Edited')).toBeVisible();
  await expect(page.getByRole('list')).toContainText('5m');
  await page.getByText('-06-05').click();
  await expect(page.getByRole('list')).toContainText('2024-06-05');
  await page.getByRole('button', { name: 'Close' }).click();
});