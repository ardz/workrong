import { chromium, Browser, Page } from "playwright";

// before and after all tests run
let browser: Browser;
beforeAll(async () => {
    browser = await chromium.launch();
});
afterAll(async () => {
    await browser.close();
});

// before and after each test
let page: Page;
beforeEach(async () => {
    page = await browser.newPage();
});
afterEach(async () => {
    await page.close();
});

it("Home page should have the correct title", async () => {
    await page.goto("https://www.reddit.com/");
    expect(await page.title()).toBe("reddit: the front page of the internet");
});
