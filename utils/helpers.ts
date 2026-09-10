// funcao delay de tempo p retornar promises

export function aguardar(ms: number): Promise <void>{
    return new Promise(resolve => setTimeout(resolve, ms));
};