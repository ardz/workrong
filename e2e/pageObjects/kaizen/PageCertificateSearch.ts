import { Page } from 'playwright';

export default class PageCertificateSearch {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    navigateTo = async () => {
        await this.page.goto("https://yourspa.location/somepage");
    }

    private clickSearchSelector = async (searchType: string) => {

        // activate the control first
        let control = await this.page.$("//*[contains(@class, 'MuiSelect-root')]");
        // @ts-ignore
        await control.click();

        switch (searchType){
            case "BatchNumber":
                let batchNumber = await this.page.waitForSelector("//li[@data-value='BatchNumber']");
                await batchNumber.click();
                break;
            case "LearnerName":
                let learnerName = await this.page.waitForSelector("//li[@data-value='LearnerName']");
                await learnerName.click();
                break;
            case "LearnerNumber":
                let learnerNumber = await this.page.waitForSelector("//li[@data-value='LearnerNumber']")
                await learnerNumber.click();
                break;
        }
    };

    private sendSearch = async () => {
        await this.page.keyboard.press('Enter');
        await this.page.waitForSelector('tbody');
    }

    resultsDisplayed = async (minimumExpectedResults: number): Promise<boolean> => {

        const results = await this.page.$$("tr");

        return results.length >= minimumExpectedResults;
    }

    searchByBatchNumber = async (batchNumber: string) => {

        await this.clickSearchSelector('BatchNumber');
        await this.page.fill('input[placeholder=search]', batchNumber);
        await this.sendSearch();
    };

    searchByName = async (forename: string, surname: string) => {

        await this.clickSearchSelector('LearnerName');
        await this.page.fill('input[placeholder=forename]', forename);
        await this.page.fill('input[placeholder=surname]', surname);
        await this.sendSearch();
    };

    searchByLearnerNumber = async (learnerNumber: string) => {

        await this.clickSearchSelector('LearnerNumber');
        await this.page.fill('input[placeholder=search]', learnerNumber);
        await this.sendSearch();
    };
}