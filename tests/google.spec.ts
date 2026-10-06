import { test, expect } from '@playwright/test';

  const baseURL = 'https://www.google.com';

test('realizar uma pesquisa no Google', async ({ page }) => {

  // acessar a página do Google
  await page.goto(baseURL);

  // localizador
  const busca = page.getByRole('combobox', { name: 'Pesquisar' });

  // ação
  await busca.fill('Playwright');
  await busca.press('Enter');

  // sincronização e espera automática do Playwright

  // assert
  await expect(page).toHaveTitle(/Playwright/);
});



