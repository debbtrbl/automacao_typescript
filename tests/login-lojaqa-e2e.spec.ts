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

test.describe('Ato 2: Validar o Caminho feliz', async ()=>{
    test('Validar acesso e redirecionamento ao painel', async ({page})=>{
        // navegar ate a pagina de login
        await page.goto(`${BASE_URL}/login.html`);
        // preencher os campos do form utilizando o fill()
        await page.fill('#email', 'admin@system.com');
        await page.fill('#password', 'AdminPassword123');
        // verificar se botao está ativado
        await expect(page.locator('#loginBtn')).toBeEnabled();
        // clicar no botao de login
        await page.click('#loginBtn');
        // validar redirecionamento
        await expect(page).toHaveURL(/painel\.html/);
    });
});

test.describe('ATO 2 - Caminho Feliz', ()=>{
  test('validar acesso e redicionar ao painel',async({page})=>{
    //navegar ate pagina de login
    await page.goto(`${BASE_URL}/login.html`)
    // preencher campoos utilizando o fill()
    await page.fill('#email','debbtrbl@gmail.com');
    await page.fill('#password','deb12345');
    //Validar botao ativo
    await expect(page.locator('#loginBtn')).toBeEnabled();
    // Acao de clique no btn
    await page.click('#loginBtn');
    //validar o redirecioamento para a pagina /painel
    await expect(page).toHaveURL(/painel\.html/);
  });

  test('Verificar se botão está desativado quando o email está incorreto',async({page})=>{
    //navegar ate pagina de login
    await page.goto(`${BASE_URL}/login.html`)
    // preencher campoos utilizando o fill()
    await page.fill('#email','email_invalido');
    await page.fill('#password','deb12345');
    //Validar botao desativado
    await expect(page.locator('#loginBtn')).toBeDisabled();
  });
});

test.describe('ATO 3 - Validar titulo e carregamento da pagina de cadastro', ()=>{
  test('Validar titulo e carregamento da pagina de cadastro', async ({ page }) => {
    //navegar ate pagina de cadastro
    await page.goto(`${BASE_URL}/login.html`)
    await page.getByRole('link', { name: 'Criar conta' }).click(); 
    //validar titulo
    await expect(page).toHaveTitle(/QA System - Cadastro/i);
  });

  test('Verificar exibicao dos campos do form de cadastro', async ({ page }) => {
    //navegar ate pagina de cadastro
    await page.goto(`${BASE_URL}/login.html`)
    await page.getByRole('link', { name: 'Criar conta' }).click(); 
    //validar campos
    await expect(page.locator('#reg-name')).toBeVisible();
    await expect(page.locator('#reg-email')).toBeVisible();
    await expect(page.locator('#reg-password')).toBeVisible();
    await expect(page.locator('#reg-role')).toBeVisible();
    await expect(page.locator('#registerBtn')).toBeVisible();
    //verificar se btn esta desativado
    await expect(page.locator('#registerBtn')).toBeDisabled();

})
});

test.describe('ATO 4 - Validar cadastro de usuario', ()=>{
  test('Validar cadastro de usuario', async ({ page }) => {
    //navegar ate pagina de cadastro  
  await page.goto(`${BASE_URL}/login.html`)
    await page.getByRole('link', { name: 'Criar conta' }).click(); 

  // preencher campos utilizando o fill()
  await page.fill('#reg-name', 'Jose Bezerra Teste da Debora');
  await page.fill('#reg-email', 'josebezerradebora@gmail.com');
  await page.fill('#reg-password', 'jose12345');
  await page.selectOption('#reg-role', 'user');
  // Validar botão ativo
  await expect(page.locator('#registerBtn')).toBeEnabled();
  // Clique no botão
  await page.click('#registerBtn');
  // Validar redirecionamento para a página de login
  await expect(page).toHaveURL(/login\.html/);
});
});

// email: debbtrbl@gmail.com
// senha: deb12345
