import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/loginPage';
import {ctsLogin} from '../data/login.data';

test.describe('autenticação de múltiplos perfis POM', () => {
    for(const cenarios of ctsLogin){
    test(`login com perfil: ${cenarios.perfil}`, async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(cenarios.email, cenarios.senha);
            if(cenarios.esperaSucesso){
                await expect(page).toHaveURL(cenarios.urlEsperada);
            } else {
                await expect(loginPage.errorMessage).toBeVisible();
                await expect(page).toHaveURL(cenarios.urlEsperada);
            }
    })
 }});

