import {test} from "@playwright/test";

test('mon premier test playwrigh', async ({page})=>{
await page.goto( 'https://app.develop.env.val-neo.com/record/a69d5703-c12c-11ef-81df-001dd8e81d90/identity')
})
