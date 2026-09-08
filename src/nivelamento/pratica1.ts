// tipo produto

type produto = {'nome':string, 'preco':number};

// chamando o type criado
let produto1:produto = {nome:'Notebook', preco:2500};
let produto2:produto = {nome:'Fone de ouvido', preco:70};

// criando função ternaria
function verificarFrete(item:produto){
    const res = item.preco >= 100 ? `Frete grátis! ${item.nome} - R$ ${item.preco},00.` : `Frete R$ 10! ${item.nome} - R$ ${item.preco},00.`
    console.log(res)
}

// chamando e usando função
verificarFrete(produto1);
verificarFrete(produto2);