import {test, expect} from 'vitest';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// POST /posts
test('Método POST', async () => {
    const res = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Novo post da deb',
            body: 'meu conteúdo',
            userId: 1
        })
    });
    expect(res.status).toBe(201); // testa se o status da resposta é 201 (Created)

    // testando se o retorno da API é um objeto JSON com as propriedades esperadas
    const dados = await res.json();
    expect(dados.title).toBe('Novo post da deb');
    expect(dados.body).toBe('meu conteúdo');
});

// PUT /posts/{id}
test('Método PUT', async () => {
    const id = 1; // id do post que será atualizado
    const res = await fetch(`${BASE_URL}/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Novo post ALTERADO da deb',
            body: 'meu conteúdo FOI ALTERADO',
            userId: 1
        })
    });
    expect(res.status).toBe(200); // testa se o status da resposta é 200 (OK)

    // testando se o retorno da API é um objeto JSON com as propriedades esperadas
    const dados = await res.json();
    expect(dados.title).toBe('Novo post ALTERADO da deb');
    expect(dados.body).toBe('meu conteúdo FOI ALTERADO');
});

// PATCH /posts/{id}
test('Método PATCH', async () => {
    const id = 1; // id do post que será atualizado
    const res = await fetch(`${BASE_URL}/posts/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            body: 'AGORA APENAS meu conteúdo FOI ALTERADO',
        })
    });
    expect(res.status).toBe(200); // testa se o status da resposta é 200 (OK)

    // testando se o retorno da API é um objeto JSON com as propriedades esperadas
    const dados = await res.json();
    expect(dados.body).toBe('AGORA APENAS meu conteúdo FOI ALTERADO');
});

// DELETE /posts/{id}
test('Método DELETE', async () => {
    const id = 1; // id do post que será deletado
    const res = await fetch(`${BASE_URL}/posts/${id}`, {
        method: 'DELETE'
    });
    expect(res.status).toBe(200); // testa se o status da resposta é 200 (OK)
});