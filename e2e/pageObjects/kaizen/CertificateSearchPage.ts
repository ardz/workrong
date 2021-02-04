import {Page, BrowserContext} from 'playwright';

export default class CertificateSearchPage {
    page: Page;
    context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    searchByBatchNumber = async (batchNumber: string) => {
        await this.page.waitForSelector("");
        await this.page.click("");
        await this.page.waitForNavigation({waitUntil: `domcontentloaded`});
    };

    searchByName = async (forename: string, surname: string) => {
        await this.page.waitForSelector("");
        await this.page.click("");
        await this.page.waitForNavigation({waitUntil: `domcontentloaded`});
    };

    searchByCertificateNumber = async (certificateNumber: string) => {
        await this.page.waitForSelector("");
        await this.page.click("");
        await this.page.waitForNavigation({waitUntil: `domcontentloaded`});
    };
}