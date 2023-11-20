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

test('Login with valid credentials', async({page})=>{
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="email"]','peter@abv.bg');
    await page.fill('input[name="password"]','123456');
    await page.click('input[type="submit"]');
    await page.$('a[href="/catalog"]');
    expect(page.url()).toBe('http://localhost:3000/catalog');
});

test('Submit the Login Form with Empty Input Fields', async({page})=>{
    await page.goto('http://localhost:3000/login');
    await page.click('input[type="submit"]');
    await page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })
    await page.$('a[href="/login"]');
    expect(page.url()).toBe('http://localhost:3000/login');
});

test('Submit the Login Form with Empty Email Input Field', async({page})=>{
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="password"]','123456');
    await page.click('input[type="submit"]');
    await page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })
    await page.$('a[href="/login"]');
    expect(page.url()).toBe('http://localhost:3000/login');
});

test('Submit the Login Form with Empty Password Input Field', async({page})=>{
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="email"]','peter@abv.bg');
    await page.click('input[type="submit"]');
    await page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })
    await page.$('a[href="/login"]');
    expect(page.url()).toBe('http://localhost:3000/login');
});

test('Verify "Register" button is visible', async({page}) => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');
    const registerButton = await page.$('a[href="/register"]');
    const isRegisterButtonVisible = await registerButton.isVisible();
    expect(isRegisterButtonVisible).toBe(true);

});

test('Register with valid credentials', async({page})=>{
    await page.goto('http://localhost:3000/register');
    await page.fill('input[name="email"]','onni@abv.bg');
    await page.fill('input[name="password"]','123456');
    await page.fill('input[name="confirm-pass"]','123456');
    await page.click('input[type="submit"]');
    await page.$('a[href="/catalog"]');
    expect(page.url()).toBe('http://localhost:3000/catalog');
});

test('Submit the Register Form with Empty Input Fields', async({page})=>{
    await page.goto('http://localhost:3000/register');
    await page.click('input[type="submit"]');
    await page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })
    await page.$('a[href="/register"]');
    expect(page.url()).toBe('http://localhost:3000/register');
});

test('Submit the Register Form with Empty Email Field', async({page})=>{
    await page.goto('http://localhost:3000/register');
    await page.fill('input[name="email"]','');
    await page.fill('input[name="password"]','123456');
    await page.fill('input[name="confirm-pass"]','123456');
    await page.click('input[type="submit"]');
    await page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })
    await page.$('a[href="/register"]');
    expect(page.url()).toBe('http://localhost:3000/register');
});

test('Submit the Register Form an empty password input field and valid email input fields', async({page})=>{
    await page.goto('http://localhost:3000/register');
    await page.fill('input[name="email"]','petar@abv.bg');
    await page.fill('input[name="password"]','');
    await page.fill('input[name="confirm-pass"]','123456');
    await page.click('input[type="submit"]');
    await page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })
    await page.$('a[href="/register"]');
    expect(page.url()).toBe('http://localhost:3000/register');
});

test('Submit the Register Form with an empty confirm password input field and valid email input field and valid password input field', async({page})=>{
    await page.goto('http://localhost:3000/register');
    await page.fill('input[name="email"]','petar@abv.bg');
    await page.fill('input[name="password"]','123456');
    await page.fill('input[name="confirm-pass"]','');
    await page.click('input[type="submit"]');
    await page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })
    await page.$('a[href="/register"]');
    expect(page.url()).toBe('http://localhost:3000/register');
});

test('Submit the Register Formvalid email, but different passwords in the two password input fields', async({page})=>{
    await page.goto('http://localhost:3000/register');
    await page.fill('input[name="email"]','petar@abv.bg');
    await page.fill('input[name="password"]','123456');
    await page.fill('input[name="confirm-pass"]','12345');
    await page.click('input[type="submit"]');
    await page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    })
    await page.$('a[href="/register"]');
    expect(page.url()).toBe('http://localhost:3000/register');
});

test('Add book with correct data', async({page}) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="email"]','peter@abv.bg');
    await page.fill('input[name="password"]','123456');
    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL('http://localhost:3000/catalog')
    ]);
    await page.click('a[href="/create"]');
    await page.waitForSelector('#create-form');
    await page.fill('#title', 'Test Book');
    await page.fill('#description', 'This is a test book description');
    await page.fill('#image', 'https://example.com/book-image.jpg');
    await page.selectOption('#type', 'Fiction');
    await page.click('#create-form input[type="submit"]');
    await page.waitForURL('http://localhost:3000/catalog');
    expect(page.url()).toBe('http://localhost:3000/catalog');
});

test.only('Add book with empty title field', async({page}) => {
    await page.goto('http://localhost:3000/login');
    await page.fill('input[name="email"]','peter@abv.bg');
    await page.fill('input[name="password"]','123456');
    await Promise.all([
        page.click('input[type="submit"]'),
        page.waitForURL('http://localhost:3000/catalog')
    ]);
    await page.click('a[href="/create"]');
    await page.waitForSelector('#create-form');
    await page.fill('#title', '');
    await page.fill('#description', 'This is a test book description');
    await page.fill('#image', 'https://example.com/book-image.jpg');
    await page.selectOption('#type', 'Fiction');
    await page.click('#create-form input[type="submit"]');
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('All fields are required!');
        await dialog.accept();
    });
    await page.$('a[href="/create"]');
    expect(page.url()).toBe('http://localhost:3000/create')
});

//npx playwright test tests/ui.test.js