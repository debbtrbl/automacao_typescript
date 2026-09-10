import {test, expect, vi} from 'vitest';

// simulando login lento
function loginLento(usuario: string):Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Bem-vindo, ${usuario}!`);
        }, 5000);
    });
};

test('Simular login lento usando fake time', async( )=>{
    // ligando o vitest (q simula o passar do tempo)
    vi.useFakeTimers();
    console.log("Iniciando cenário de teste...");
    // chamando a promisse de usuario sem await ainda
    const promessa =  loginLento("Debb");
    // avançando o tempo em 5 segundos
    vi.advanceTimersByTime(5000);
    // aguardando a promisse ser resolvida
    const resultado = await promessa;
    console.log("Resultado do login: ", resultado);
    // verificando se o resultado é o esperado
    expect(resultado).toBe("Bem-vindo, Debb!");
    
    console.log('Teste realizado com sucesso!');
    // desligando o vitest
    vi.useRealTimers();
});

