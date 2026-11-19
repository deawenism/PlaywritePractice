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
test('Select years of experience from dropdown', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');
    await page.getByLabel('Years of experience').selectOption('5');
    await expect(page.getByLabel('Years of experience')).toHaveValue('5')
});

test('Fill Datefield', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');
    await page.getByLabel('Date').fill('2026-05-04');
    await expect(page.getByLabel('Date')).toHaveValue('2026-05-04');
});

test('Check checkboxes', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');
    await page.getByRole('checkbox', {name:'Protractor',exact:true}).check();
    await page.getByRole('checkbox', {name:'UFT',exact:true}).check();
    await expect(page.getByRole('checkbox', {name:'Protractor',exact:true})).toBeChecked();
    await expect(page.getByRole('checkbox', {name:'UFT',exact:true})).toBeChecked();
    await expect(page.getByRole('checkbox', {name:'Selenium Webdriver',exact:true})).toBeChecked({checked:false});
});