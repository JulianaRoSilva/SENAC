const ask = require('readline-sync');

// CRIAÇÃO DAS CLASSES EM OBJETOS
let mago = {
    nomeClasse: 'Mago',
    vida: 150,
    defesa: 4,
    pocao: 5,
    ataque: ataqueMago
}

let ladrao = {
    nomeClasse: 'Ladrao',
    vida: 200,
    defesa: 7,
    pocao: 4,
    ataque: ataqueLadrao
}

let guerreiro = {
    nomeClasse: 'Guerreiro',
    vida: 230,
    defesa: 5,
    pocao: 3,
    ataque: ataqueGuerreiro
}

// CRIAÇÃO DE ARRAY QUE CONTEM OS INIMIGOS DO RPG
let inimigos = [
    {
        nome: 'Ogro',
        vida: 60,
        min: 7,
        max: 12,
        ataqueInimigo: ataqueInimigo
    },
    {
        nome: 'Goblin',
        vida: 50,
        min: 8,
        max: 10,
        ataqueInimigo: ataqueInimigo
    },
    {
        nome: 'Necromancer',
        vida: 60,
        min: 8,
        max: 14,
        ataqueInimigo: ataqueInimigo
    },
    {
        nome: 'Gargula',
        vida: 35,
        min: 20,
        max: 25,
        ataqueInimigo: ataqueInimigo
    },
    {
        nome: 'Cavaleiro do Inferno',
        vida: 50,
        min: 10,
        max: 15,
        ataqueInimigo: ataqueInimigo
    }
]

// ---------- FUNÇÕES ------------

/** FUNÇÕES DE ATAQUE DOS INIMIGOS
 * Função vai receber um objeto do array de inimigos para calcular o DANO recebido pelo personagem
 */

function ataqueInimigo(inimigo) {
    return Math.floor(Math.random() * (inimigo.max - inimigo.min + 1)) + inimigo.min;
}

/** FUNÇÕES DE ATAQUE DAS CLASSES
 * Função nao precisa de parametro de entrada pois vai ser atribuido direto no objeto da classe dos personagens escolhidos
 */

function ataqueMago() { // Dano entre 10 e 20
    let dano = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    console.log(`Dano causado pelo MAGO: ${dano}`);
    return dano;
}

function ataqueLadrao() { // Dano entre 5 e 15
    let dano = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
    console.log(`Dano causado pelo LADRAO: ${dano}`);
    return dano;
}

function ataqueGuerreiro() { // Dano entre 8 e 15
    let dano = Math.floor(Math.random() * (15 - 8 + 1)) + 8;
    console.log(`Dano causado pelo GUERREIRO: ${dano}`);
    return dano;
}

function ataque(personagem, inimigo){
    let danoPersonagem = personagem.ataque();

    inimigo.vida - danoPersonagem;
}

function usarPocao(personagem){
    personagem.vida + 30;
    personagem.pocao--;
}

function conbateMenu(){

}

function comecarCombate(){
    
}

function criarPersonagem() {

    let nome = ask.question('Digite o nome do seu personagem:')

    console.clear()

    console.log(`
        Escolha uma classe: 
        1 - Mago
        2 - Ladrao
        3 - Guerreiro

        `)

        let opcao = Number(ask.question());

    switch (opcao) {
        case 1:
            personagem = mago;
            break;
        case 2:
            personagem = ladrao;
            break;
        case 3:
            personagem = guerreiro;
            break;
        default:
            console.log('Opcao inválida!')
    }

    return personagem;
}

// função que vai receber um array de INIMIGOS e retornar o OBJETO do inimigo escolhido
// Utilizar DICA DO SOR para atribuir essa função da hora de escolher o inimigo na batalha
function gerarInimigo(inimigos){
    let index = Math.floor(Math.random() * inimigos.length);
    return inimigos[index];
}




