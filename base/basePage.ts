import { test as baseTest } from '@playwright/test';
import LoginPage from "../Pages/loginPage";
import EditingPage from "../Pages/editingPage";

type pages = {
    loginPage: LoginPage;
    editingPage: EditingPage; 
}

const testPages = baseTest.extend<pages>({
    
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    editingPage: async ({ page }, use) => {
        await use(new EditingPage(page))
    },
   
})

export const test = testPages;

export const expect = testPages.expect;