import { test, expect } from '@playwright/test';
test('grab account links', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
  const list = await page.locator('a.list-group-item').filter({ hasText: 'Forgotten Password' })
  await list.click()
  const toast = await page.locator('#toast')
  await expect(toast).toHaveClass('toast visible')
 
});
