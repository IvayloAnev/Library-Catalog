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

test('Verify "All Books" link is visible after user login', async({page}) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="email"]','peter@abv.bg');
    await page.fill('input[name="password"]','123456');
    await page.click('input[type="submit"]');
    const AllBooksLink = await page.$('a[href="/catalog"]');
    const isAllBooksLinkVisible = await AllBooksLink.isVisible();
    expect(isAllBooksLinkVisible).toBe(true);
});

test('Verify "My Books" link is visible after user login', async({page}) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="email"]','peter@abv.bg');
    await page.fill('input[name="password"]','123456');
    await page.click('input[type="submit"]');
    const MyBooksLink = await page.$('a[href="/profile"]');
    const isMyBooksLinkVisible = await MyBooksLink.isVisible();
    expect(isMyBooksLinkVisible).toBe(true);
});

test('Verify "Add Books" link is visible after user login', async({page}) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="email"]','peter@abv.bg');
    await page.fill('input[name="password"]','123456');
    await page.click('input[type="submit"]');
    const AddBooksLink = await page.$('a[href="/create"]');
    const isAddBooksLinkVisible = await AddBooksLink.isVisible();
    expect(isAddBooksLinkVisible).toBe(true);
});

test('Verify "User email" is visible after user login', async({page}) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="email"]','peter@abv.bg');
    await page.fill('input[name="password"]','123456');
    await page.click('input[type="submit"]');
    const UserEmail = await page.waitForSelector('span.user');
    const isUserEmailVisible = await UserEmail.isVisible();
    expect(isUserEmailVisible).toBe(true);
});







test('Verify "Register" button is visible', async({page}) => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');
    const registerButton = await page.$('a[href="/register"]');
    const isRegisterButtonVisible = await registerButton.isVisible();
    expect(isRegisterButtonVisible).toBe(true);

});