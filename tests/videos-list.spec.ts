import { test, expect } from '@playwright/test';

test('create and delete video list', async ({ page }) => {
	await page.goto('http://localhost:3000/');
	await page.getByPlaceholder('name').click();
	await page.getByPlaceholder('name').fill('test video');
	await page.getByPlaceholder('name').press('Tab');
	await page.getByPlaceholder('description').fill('Test description');
	await page.getByRole('button', { name: 'Add' }).click();
	await page.locator('div').filter({ hasText: /^test videoTest descriptionDelete$/ }).getByRole('button').click();
});
