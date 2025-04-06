import { test, expect } from '@playwright/test';

test.describe('Testing', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
        await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
    })

    test('Remove products', async ({ page }) => {
        await page.locator('#add-to-cart-sauce-labs-backpack').click();
        await page.locator('#add-to-cart-sauce-labs-fleece-jacket').click();
        await page.locator('#add-to-cart-sauce-labs-onesie').click();
        await page.locator('.shopping_cart_link').click();
        await page.locator('#checkout').click();
        await expect(page.locator('div.header_secondary_container span.title')).toHaveText('Checkout: Your Information');
    })

    test('Checkout empty products', async ({ page }) => {
        await page.locator('.shopping_cart_link').click();
        await page.locator('#checkout').click();
        await page.locator('#continue').click();
        await expect(page.locator('div.error-message-container h3')).toHaveText('Error: First Name is required');
    })

    test('Checkout empty products with first name', async ({ page }) => {
        await page.locator('.shopping_cart_link').click();
        await page.locator('#checkout').click();
        await page.locator('#first-name').fill('Nikita');
        await page.locator('#continue').click();
        await expect(page.locator('div.error-message-container h3')).toHaveText('Error: Last Name is required');
    })

    test('Checkout empty products with first and last names', async ({ page }) => {
        await page.locator('.shopping_cart_link').click();
        await page.locator('#checkout').click();
        await page.locator('#first-name').fill('Nikita');
        await page.locator('#last-name').fill('Kaluhin');
        await page.locator('#continue').click();
        await expect(page.locator('div.error-message-container h3')).toHaveText('Error: Postal Code is required');
    })
})
