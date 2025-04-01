import { test, expect } from '@playwright/test';

test.describe('Tasks for interview', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('');
        await expect(page.locator('p.MuiTypography-root.MuiTypography-body1.css-1spjdrf')).toHaveText('Create your own unique playlist');
    })

// Task1: Search Functionality

    test('Task1: Search functionality testing', async ({ page }) => {
        // Locate the search input field using its class and type "Rainy Mood".
        await page.locator('.MuiInputBase-input').fill('Rainy Mood'); 
        // Verify that "Rainy Mood" is present in the search results.
        await expect(page.locator('div.MuiGrid-root.MuiGrid-container.css-adtkzx')).toContainText('Rainy Mood');
        // Verify that "Summer Breeze" is NOT present in the search results.
        await expect(page.locator('div.MuiGrid-root.MuiGrid-container.css-adtkzx')).not.toContainText('Summer Breeze');
    })

// Task2: Add Track Using "+" Button

    test('Task2: Adding tracks testing', async ({ page }) => {
        // Click the first "+" button (assumed to belong to "Summer Breeze")
        await page.locator('.MuiButton-colorPrimary').first().click();
        // Verify that "Summer Breeze" has been added to the playlist.
        await expect(page.locator('div#playlist')).toContainText('Summer Breeze');
        // Click the second "+" button (assumed to belong to "Autumn Leaves")
        await page.locator('.MuiButton-colorPrimary').nth(1).click();
        // Verify that "Autumn Leaves" has been added to the playlist.
        await expect(page.locator('div#playlist')).toContainText('Autumn Leaves');
        // Click the third "+" button (assumed to belong to "Winter Winds")
        await page.locator('.MuiButton-colorPrimary').nth(2).click();
        // Verify that "Winter Winds" has been added to the playlist.
        await expect(page.locator('div#playlist')).toContainText('Winter Winds');
    })

// Task3: Verify Total Duration of the Playlist in Seconds

    test('Task3: Verify total duration of songs', async ({ page }) => {
        // Define a dictionary of track durations (in seconds)
        const trackDurations: Record<string, number> = {
            'Summer Breeze': 3 * 60 + 35,
            'Autumn Leaves': 3 * 60 + 0,
            'Winter Winds': 4 * 60 + 0,
        };
        // Extract track names into an array
        const tracksToAdd = Object.keys(trackDurations);
        // Initialize total expected duration
        let expectedTotal = 0;

        // Loop through each track and add it to the playlist
        for (const track of tracksToAdd) {
            // Locate and click the "+" button for the given track with using xpath
            await page.locator(`text=${track}`).locator('xpath=following::button[1]').click();
            // Sum up the duration of each added track
            expectedTotal += trackDurations[track];
        }
        // Retrieve the displayed playlist duration
        const displayedDuration = await page.locator('#playlist-duration').innerText();
        // Validate that the displayed duration matches the expected total
        expect(Number(displayedDuration)).toBe(expectedTotal);
    })
})