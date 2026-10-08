import { test, expect } from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

// Desafio prático: localizadores acessar página de painel
//
// Etapa de beforeEach para acessar a página de login
//
// 1. Acessar a página de login.
// 2. Logar na tela de login com usuário e senha válidos de administrador.
// 3. Acessar a página de painel.
//
// CT 1: localizar e clicar no filtro de usuários e identificar algum usuário
// na lista de usuários.
//
// CT 2: localizar e clicar no filtro de produtos e identificar algum produto
// na lista de produtos e ver o campo de pesquisa de produtos e o seletor de categorias.
//
// CT 3: localizar e clicar no filtro de lojas e identificar o título do nome
// da loja na lista de lojas e localizar as informações da loja.

test.describe('Acessar página de painel do administrador', () => {

  test.beforeEach(async ({ page }) => {
    // acessar pagina de login
    await page.goto(`${BASE_URL}/login.html`);

    // logar com usuário e senha válidos de administrador
    const emailInput = page.getByTestId('email-input').or(page.locator('#email'));
    await emailInput.fill('admin@system.com');
    const passwordInput = page.getByTestId('password-input').or(page.locator('#password'));
    await passwordInput.fill('AdminPassword123');
    // verificar se botao está ativado
    const botaoEntrar = page.getByRole('button', { name: /entrar/i });
    await expect(botaoEntrar).toBeEnabled();
    // clicar no botao de login
    await botaoEntrar.click();
    // validar redirecionamento
    await expect(page).toHaveURL(/painel\.html/);
  });

    test('CT 1: localizar e clicar no filtro de usuários e identificar algum usuário na lista de usuários', async ({ page }) => {  
        // localiza botao Usuarios e clica nele
        const botaoUsuarios = page.getByRole('button', { name: /usuários/i });
        await expect(botaoUsuarios).toBeVisible();
        await botaoUsuarios.click();

        // localiza um usuario padrao na lista e clica nele
        const botaoUsuarioPadrao = page.getByRole('button').filter({ hasText: /usuário padrão/i });
        await expect(botaoUsuarioPadrao).toBeVisible();
        await botaoUsuarioPadrao.click();

        // validar se o nome do usuario padrao está visível na tela
        const nomeUsuarioPadrao = page.getByTestId('name');
        await expect(nomeUsuarioPadrao).toBeVisible();
    });

    test('CT 2: localizar e clicar no filtro de produtos e identificar algum produto na lista de produtos e ver o campo de pesquisa de produtos e o seletor de categorias', async ({ page }) => {
        // localiza botao Produtos e clica nele
        const botaoProdutos = page.getByRole('button', { name: /produtos/i });
        await expect(botaoProdutos).toBeVisible();
        await botaoProdutos.click();

        // localiza um produto padrao na lista e clica nele
        const botaoProdutoMouse = page.getByRole('button').filter({ hasText: /Mouse Óptico Atlas/i });
        await expect(botaoProdutoMouse).toBeVisible();
        await botaoProdutoMouse.click();

        // validar se o campo de pesquisa de produtos está visível na tela
        const campoPesquisaProdutos = page.getByTestId('productSearch');
        await expect(campoPesquisaProdutos).toBeVisible();

        // validar se o seletor de categorias está visível na tela
        const seletorCategorias = page.getByTestId('productCategoryFilter');
        await expect(seletorCategorias).toBeVisible();
    });

    test('CT 3: localizar e clicar no filtro de lojas e identificar o título do nome da loja na lista de lojas e localizar as informações da loja', async ({ page }) => {
        // localiza botao Lojas e clica nele
        const botaoLojas = page.getByRole('button', { name: /lojas/i });
        await expect(botaoLojas).toBeVisible();
        await botaoLojas.click();

        // localiza uma loja padrao na lista e clica nela
        const botaoVitrineTech = page.getByRole('button').filter({ hasText: /vitrine tech/i });
        await expect(botaoVitrineTech).toBeVisible();
        await botaoVitrineTech.click();

        // validar se o título do nome da loja está visível na tela
        const tituloNomeLoja = page.getByTestId('storeName');
        await expect(tituloNomeLoja).toBeVisible(); 

    });

});
