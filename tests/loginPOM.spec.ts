import {expect, test} from '@playwright/test';
import {LoginPage} from '../pages/loginPage';

test.describe('login com page object model', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('login adm com credenciais válidas', async () => {
        await loginPage.login('admin@system.com', 'AdminPassword123');
        await expect(loginPage.statusMessage).toBeVisible();
        await expect(loginPage.statusMessage).toContainText(/Login bem-sucedido/i);
        await expect(page).toHaveURL(/painel\.html/);
    });
});
