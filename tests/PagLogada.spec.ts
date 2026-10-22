import { test, expect } from '../fixtures/auth.fixture';

test.describe('Acesso à área protegida - painel.html', () => {
    test('Deve acessar painel com usuário logado', async ({loggedPage}) => {
        // validar se usuario está na pagina de painel 
        await expect(loggedPage).toHaveURL(/painel\.html/);
        // verificar titulo da pagina
        const h1Painel = await loggedPage.locator('#panelTitle');
        await expect(h1Painel).toBeVisible();
        // verificar bt de logout
        const btLogout = await loggedPage.locator('#logoutButton');
        await expect(btLogout).toBeVisible();
    })
});
