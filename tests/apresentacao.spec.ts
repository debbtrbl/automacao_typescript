import { test, expect } from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

// principais tipos de localizadores
test('Localizadores principais', async ({ page }) => {
    // navegar até a página de login
    await page.goto(`${BASE_URL}/login.html`);

    await expect(page.getByRole('button', { name: 'Entrar' })).toBeVisible();

    await expect(page.getByText('Bem-vindo!')).toBeVisible();

    await expect(page.getByLabel('email')).toBeVisible();
    
    await expect(page.getByTestId('botao-entrar')).toBeVisible();

    await expect(page.locator('div.container > div:nth-child(2) > button')).toBeVisible();

    // Clicar em um elemento
    await page.getByRole('button', { name: 'Salvar' }).click();

    // Preencher um input
    await page.getByPlaceholder('Digite sua senha').fill('SenhaSegura123');

    // Marcar um checkbox
    await page.getByRole('checkbox', { name: 'Concordo com os termos' }).check();

    // Preenchendo um campo de texto
    await page.getByLabel('E-mail').fill('aluno@teste.com');

    // Clicando em um botão
    await page.getByRole('button', { name: 'Entrar' }).click();


    // Clica em um botão
    await page.getByRole('button', { name: 'Entrar' }).click();

    // Preenche um campo de texto
    await page.getByLabel('E-mail').fill('usuario@email.com');

    // Seleciona uma opção em um <select>
    await page.getByLabel('Estado').selectOption('PE');

    // Marca uma caixa de seleção
    await page.getByLabel('Aceito os termos').check();

    // Desmarca uma caixa de seleção
    await page.getByLabel('Aceito os termos').uncheck();

    // Pressiona uma tecla
    await page.getByLabel('Buscar').press('Enter');



    // Localizando por papel e nome acessível
    const botao = page.getByRole('button', { name: 'Entrar' });

    // Localizando por texto visível
    const titulo = page.getByText('Bem-vindo ao Sistema');


// Validando se o painel está visível
await expect(page.getByText('Dashboard')).toBeVisible();

// Validando URL atual
await expect(page).toHaveURL(/.*dashboard/);


// Verifica se um elemento está visível
await expect(page.getByText('Login realizado!')).toBeVisible();

// Verifica o texto de um elemento
await expect(page.getByRole('heading')).toHaveText('Página Inicial');

// Verifica se um botão está habilitado
await expect(page.getByRole('button', { name: 'Entrar' })).toBeEnabled();

// Verifica o valor de um campo
await expect(page.getByLabel('E-mail')).toHaveValue('usuario@email.com');

// Verifica a URL atual
await expect(page).toHaveURL(/dashboard/);

});