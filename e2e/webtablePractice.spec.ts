import { test, expect } from '@playwright/test';
test('click checkboxes', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/webtable');
    const nameRaw = "Meera.Rao"
    const name = "'" + nameRaw + "'"
    
    //find the tabledata with text use preceding sibling to grab all proceding sibling nodes :: to filter out specifically the td with the checkbox
    
    const checkbox = await page.locator("//td[text()=" + name + "]/preceding-sibling::td/input[@type='checkbox']").click()
    const output = await page.locator('#selected-output')
    await expect(output).toContainText(nameRaw)
});
