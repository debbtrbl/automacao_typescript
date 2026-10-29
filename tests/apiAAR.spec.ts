import {test, expect, request} from "@playwright/test";
const APIUrl = 'https://api-qa-fap2026.onrender.com/api';

test.describe("Testes de API no padrão AAR, c/ geração de massa p/ UI",()=>{
    let authToken: string;
    let createProdID: string;
    const uniqueProdName = `Teclado Exemplo ${Date.now()}`;

    // arrange (setup login lojista)
    test.beforeAll(async ({request})=>{
        // logando
        const loginRes = await request.post(`${APIUrl}/login`,
            {
                data:{
                    "email":"lojista@system.com",
                    "senha": "SellerPass123"
                }
            }
        );
        expect(loginRes.status()).toBe(200);
        const loginData = await loginRes.json();
        authToken = loginData.token;
        expect(authToken).toBeDefined();

        // criando produto como lojista
        const produtRes = await request.post(`${APIUrl}/seller/products`, {
            headers:{
                Authorization:`Bearer ${authToken}`
            },
            data:{
                "name": uniqueProdName,
                "description": "Massa de teste gerada no setup arrange (debb)",
                "category":"Periéricos",
                "price":10.0,
                "stock":200,
                "image": "https://exemplo.com/imagens/teclado.jpg"

            }
        });
        expect(produtRes.status()).toBe(201);
        const productData = await produtRes.json();
        createProdID = productData.product._id;
        expect(createProdID).toBeDefined();
    });

    test("Validar produto recém-criado", async ({request})=>{
        expect(createProdID).toBeDefined();
 
        // fazendo uma pesquisa pelo nome
        const res = await request.get(`${APIUrl}/products?search=${uniqueProdName}`);
        expect(res.status()).toBe(200);
        const prodData = await res.json();

        // verificando se retornou um array
        expect(Array.isArray(prodData)).toBeTruthy();
        // procurando o produto na lista
        const targetProd = prodData.find((p:any)=>p._id === createProdID);
        expect(targetProd).toBeDefined();
        expect(targetProd.name).toBe(uniqueProdName);
        expect(targetProd.stock).toBe(200);
        expect(targetProd.price).toBe(10.0)
    });

});
