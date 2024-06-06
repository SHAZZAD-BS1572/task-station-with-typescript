import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sbueurope.mytask.today/auth/login');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('sumaiya.habib@brainstation-23.com');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('BS1574');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByLabel('Details').getByLabel('icon-button').click();
  await page.getByRole('paragraph').click();
  await page.locator('.jodit-wysiwyg').fill('New test');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('Description added')).toBeVisible();
  await page.getByRole('button', { name: 'Close' }).click();
});