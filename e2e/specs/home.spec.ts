import {chromium, Browser, Page, BrowserContext} from "playwright";
import PageAzureAdAuth from "../pageObjects/PageAzureAdAuth";
import PageCertificateSearch from "../pageObjects/kaizen/PageCertificateSearch";

let browser: Browser;
let context: BrowserContext;
let page: Page;

// before all specs run
beforeAll(async () => {
    browser = await chromium.launch( { slowMo:1000 });
    context = await browser.newContext();
    page = await context.newPage();
    const loginPage = new PageAzureAdAuth(page);
    await loginPage.sendLoginCredentials("https://yourspa.location",
        "your-email", "your-password");
});
afterAll(async () => {
    await page.close();
    await browser.close();
});

// before and after each test runs
beforeEach(async () => {
});
afterEach(async () => {
});

it("Home page should have the correct title", async () => {
    await page.goto("https://yourspa.location");
    expect(await page.title()).toBe("your app - title");
});

it("User should be able to search for a certificate by batch number", async () => {
    const searchPage = new PageCertificateSearch(page);
    await searchPage.navigateTo();
    await searchPage.searchByBatchNumber("805497047");
    expect(await searchPage.resultsDisplayed(1)).toBe(true);
    await page.screenshot({ path: 'batchNumberSearchResults.png' });
});

it("User should be able to search for a certificate by learner name", async () => {
    const searchPage = new PageCertificateSearch(page);
    await searchPage.navigateTo();
    await searchPage.searchByName("Mister", "Biggles");
    expect(await searchPage.resultsDisplayed(11)).toBe(true);
    await page.screenshot({ path: 'learnerNameSearchResults.png' });
});

it("User should be able to search for a certificate by learner number", async () => {
    const searchPage = new PageCertificateSearch(page);
    await searchPage.navigateTo();
    await searchPage.searchByLearnerNumber("105346928");
    expect(await searchPage.resultsDisplayed(1)).toBe(true);
    await page.screenshot({ path: 'learnerNumberSearchResults.png' });
});
