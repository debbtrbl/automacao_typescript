// formas de tipar

// forma 1
let idade:number;

// forma 2
const nome = 'Seu Zé';

// forma 3 (n recomendado por ser redundante)
const sobrenome:string = 'Silva';

// tipagem especial

type usuario = {'nick':string, 'age':number};

// chamando o type criado
let jogador:usuario = {nick:'Ricardo', age:18};
let jogadorVelho:usuario = {nick:'Toin', age:76};

// criando função
function verificarIdade(user:usuario){
    if (user.age >= 21){
        console.log(`Acesso liberado! O jogador ${user.nick} tem ${user.age}.`);
    } else {
        console.log(`Acesso negado! O jogador ${user.nick} tem ${user.age}.`);
    }
}

// chamando e usando função
verificarIdade(jogador);
verificarIdade(jogadorVelho);