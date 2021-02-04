import { chromium, Browser } from "playwright";
import { BrowserContext } from "playwright";

let browser: Browser;
let context: BrowserContext;

// before all specs run
beforeAll(async () => {
    browser = await chromium.launch({ headless:false });
    context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://stkaizendev.z16.web.core.windows.net");
    await page.fill('input[type=email]', '');
    await page.click('input[type=submit]');
    await page.fill('input[type=password]', '');
    await page.click('input[type=submit]');
    await page.click('input[type=submit]');
    await page.close();
});
afterAll(async () => {
    await browser.close();
});

// before and after each test runs
beforeEach(async () => {
    // page = await browser.newPage();
});
afterEach(async () => {
    // await page.close();
});

it("Home page should have the correct title", async () => {
    const page = await context.newPage();
    await page.goto("https://stkaizendev.z16.web.core.windows.net");
    expect(await page.title()).toBe("NCFE - Kaizen");
});

it("User should be able to search for a certificate by batch number", async () => {
    const page = await context.newPage();
    await page.goto("")
});

it("User should be able to search for a certificate by learner name", async () => {
    const page = await context.newPage();
    await page.goto("")
});

it("User should be able to search for a certificate by learner number", async () => {
    const page = await context.newPage();
    await page.goto("")
});