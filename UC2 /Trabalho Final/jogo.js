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

// função que vai receber um array de INIMIGOS e retornar o OBJETO do inimigo escolhido
// Utilizar DICA DO SOR para atribuir essa função da hora de escolher o inimigo na batalha
function gerarInimigo(inimigos){
    let index = Math.floor(Math.random() * inimigos.length);
    return inimigos[index];
}

function conbateMenu(){

}

function comecarCombate(){
    
}

function criarPersonagem() {

    let valido = false // variavel para controlar que o usuário digite uma opção de classe Válida
    let jogadorGerado;
    let nome;


    console.clear();

    while(!valido){

        console.clear();

        console.log(`
========================================================================================================================
                                            ⚔️ SHADOWS OF BACKBERRY ⚔️
========================================================================================================================

`);
    nome = ask.question('Choose your character`s name: ');

    console.clear();

    console.log(`
========================================================================================================================
                                            ⚔️ SHADOWS OF BACKBERRY ⚔️
========================================================================================================================

    Confirm name ${nome.toUpperCase()}?

    [1] - Yes
    [0] - Change name

`);
    
    let escolha = Number(ask.question());

    if (escolha == 1) {
        valido = true;
    }   
} 

    console.clear()

    valido = false;
    while(!valido){

    console.clear()

console.log(`
╔══════════════════════╗   ╔══════════════════════╗   ╔══════════════════════╗
║       🧙 MAGE        ║   ║      🗡️  ROGUE        ║   ║      ⚔️  WARRIOR      ║
╠══════════════════════╣   ╠══════════════════════╣   ╠══════════════════════╣
║ Health: 150          ║   ║ Health: 200          ║   ║ Health: 230          ║
║ Defense: 4           ║   ║ Defense: 7           ║   ║ Defense: 5           ║
║ Potions: 5           ║   ║ Potions: 4           ║   ║ Potions: 3           ║
║                      ║   ║                      ║   ║                      ║
║ Damage: 10 - 20      ║   ║ Damage: 5 - 15       ║   ║ Damage: 8 - 15       ║
║                      ║   ║                      ║   ║                      ║
║ Master of magic      ║   ║ Fast and stealthy    ║   ║ Strong and durable   ║
╚══════════════════════╝   ╚══════════════════════╝   ╚══════════════════════╝


========================================================================

        ${nome.toUpperCase()}, CHOOSE YOUR CLASS

                               [1] MAGE
                               [2] ROGUE
                               [3] WARRIOR

========================================================================
`);

        let opcao = Number(ask.question());
    
    
    switch (opcao) {
        case 1:
            jogadorGerado = mago;
            valido = true;
            break;
        case 2:
            jogadorGerado = ladrao;
            valido = true;
            break;
        case 3:
            jogadorGerado = guerreiro;
            valido = true;
            break;
        default:
            console.log('Opcao inválida!')
            ask.question('Pressiona ENTER para escolher novamente! ');
    }
}
    jogadorGerado.nomeJogador = nome;

    console.clear(

    )

    console.log(`

${nome.toUpperCase()}
Class chosen: ${jogadorGerado.nomeClasse.toUpperCase()}
Health: ${jogadorGerado.vida}
Defense: ${jogadorGerado.defesa}
Number of potions: ${jogadorGerado.pocao}
   `)

   ask.question(`Press ENTER to continue...`)
    return jogadorGerado;
}



let personagem = criarPersonagem();

let inimigo;




