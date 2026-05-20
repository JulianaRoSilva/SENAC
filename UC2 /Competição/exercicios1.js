const ask = require('readline-sync');

let produtos = [];

function cadastrarProduto(nome, preco, precoFab, qtdEstoque){
    produtos.push([produtos.length + 1, nome, preco, precoFab, qtdEstoque]);
}

function buscarProdutoPorId(id){
    for(let i = 0; i < produtos.length; i++){

        if (id === produtos[i][0]){
            return `
            id: ${produtos[i][0]}
            Produto: ${produtos[i][1]}
            Preco: ${produtos[i][2]}
            Preco Fabricacao: ${produtos[i][3]}
            Quantidade em estoque: ${produtos[i][4]}
            `
        }
    } return 'Produto não encontrado!'
}

function buscarProdutoPorNome(nome){
    let findProd = [];

    for(let i = 0; i < produtos.length; i++){
        if (nome === produtos[i][1]){
        findProd.push(produtos[i])
        }
    } 
    return `Produtos encontrados com o nome ${nome}: ${JSON.stringify(findProd)}`
}





let nome = ask.question('nome: ')
let preco = ask.question('preco: ')
let precogab = ask.question('preco gab: ')
let qtdEstoque = ask.question('qtd est: ')

cadastrarProduto(nome, preco, precogab, qtdEstoque);

console.log(produtos);

let nome1 = ask.question('nome2: ')
let preco1 = ask.question('preco: ')
let precogab1 = ask.question('precofab: ')
let qtdEstoque1 = ask.question('qtd estoque: ')

cadastrarProduto(nome1, preco1, precogab1, qtdEstoque1);

let buscaNome = ask.question('Buscar produto por nome: ')

console.log(buscarProdutoPorNome(buscaNome));