const {test, expect} = require('@playwright/test');

test('Verify "All Books" link is visible', async({page}) => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isLinkAvaivable = await allBooksLink.isVisible();
    expect(isLinkAvaivable).toBe(true);
});

test('Verify "Login" button is visible', async({page}) => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');
    const loginButton = await page.$('a[href="/login"]');
    const isLoginButtonVisible = await loginButton.isVisible();
    expect(isLoginButtonVisible).toBe(true);
});