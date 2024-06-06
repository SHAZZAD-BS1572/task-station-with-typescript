import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sbueurope.mytask.today/auth/login');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('sumaiya.habib@brainstation-23.com');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('BS1574');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('div').filter({ hasText: /^task to edit$/ }).getByLabel('Details').getByLabel('icon-button').click();
  await page.getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Completed' }).click();
  await page.locator('#three-dots-menu div').first().click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#done-drop-point').getByLabel('Details').getByLabel('icon-button').click();
  await page.getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'Blocker' }).click();
  await page.locator('#three-dots-menu div').first().click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#blocked-drop-point').getByLabel('Details').getByLabel('icon-button').click();
  await page.getByLabel('more').click();
  await page.getByRole('menuitem', { name: 'TODO' }).click();
  await page.locator('#three-dots-menu div').first().click();
  await page.getByRole('button', { name: 'Close' }).click();
});