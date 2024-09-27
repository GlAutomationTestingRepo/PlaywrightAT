import { test as base, Page} from '@playwright/test'; 
import { PageManager}from '../AplicationLogic/Pages/PageManager'
import { LoginPage } from '../AplicationLogic/Pages/LoginPage';
import { LoginCredentials} from '../Utils/Enums';

export type TestOptions = {
    domain: string
};

export const test = base.extend<TestOptions & {page:Page,pageManager:PageManager}> ({
    domain: ['', {option: true}], 

    page: async ({browser}, use) => {
        const page = await browser.newPage();
        await page.goto('https://marmelab.com/react-admin-demo/#/login');
        await new LoginPage(page).LogIn(LoginCredentials.Login,LoginCredentials.Password);
        await use(page);
    },

    pageManager: async ({page}, use) => {
        const pageManager = new PageManager(page); 
        await use(pageManager); 
    }, 
}); 