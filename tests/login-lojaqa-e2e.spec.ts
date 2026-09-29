import {test, expect} from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

test.describe('Ato 1: Validar carregamento e visibilidade de elementos', async ()=>{
    test('Validar título e carregamento da página', async ({page})=>{
        // navegar ate a pagina de login
        await page.goto(`${BASE_URL}/login.html`);
        // validar titulo
        await expect(page).toHaveTitle(/LojaQA | Entrar/i);
    });

    test('Verificar exibição dos campos do form de login', async ({page})=>{
        // navegar ate a pagina de login
        await page.goto(`${BASE_URL}/login.html`);
        //validar campos
        await expect(page.locator('#email')).toBeVisible();
        await expect(page.locator('#password')).toBeVisible();
        await expect(page.locator('#loginBtn')).toBeVisible();
        // verificar se botao está desativado
        await expect(page.locator('#loginBtn')).toBeDisabled();
    });
});
