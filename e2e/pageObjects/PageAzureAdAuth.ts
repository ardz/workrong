import { Page } from 'playwright';

export default class PageAzureAdAuth {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    sendLoginCredentials = async (uri: string, email: string, password: string) => {

        let page = this.page;

        await page.goto(uri);
        await page.fill('input[type=email]', email);
        await page.click('input[type=submit]');
        await page.fill('input[type=password]', password);
        await page.click('input[type=submit]');
        await page.click('input[type=submit]');
    };
}