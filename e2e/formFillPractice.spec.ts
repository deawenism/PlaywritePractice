import { test, expect } from '@playwright/test';
test('Fill first and last name', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');
    await page.getByLabel('First name').fill('testfirst');
    await expect(page.getByLabel('First name')).toHaveValue('testfirst');

    await page.getByLabel('Last name').fill('testlast');
    await expect(page.getByLabel('Last name')).toHaveValue('testlast');

});
test('Pick Gender radio group', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');
    await page.getByRole('radio', {name:'Male',exact:true}).check();
    await expect(page.getByRole('radio', {name:'Female',exact:true})).toBeChecked({checked:false});

});