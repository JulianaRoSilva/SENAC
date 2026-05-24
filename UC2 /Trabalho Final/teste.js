let inimigos = [
    {
        nome: 'Ogro',
        vida: 50,
        min: 10,
        max: 35,
        ataqueInimigo: ataqueInimigo
    },
    {
        nome: 'Goblin',
        vida: 50,
        min: 10,
        max: 25,
        ataqueInimigo: ataqueInimigo
    },
    {
        nome: 'Necromancer',
        vida: 50,
        min: 10,
        max: 20,
        ataqueInimigo: ataqueInimigo
    },
    {
        nome: 'Gargula',
        vida: 50,
        min: 10,
        max: 20,
        ataqueInimigo: ataqueInimigo
    },
    {
        nome: 'Cavaleiro do Inferno',
        vida: 50,
        min: 10,
        max: 20,
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

function gerarInimigo(inimigos){
    let index = Math.floor(Math.random() * inimigos.length);
    return inimigos[index];
}

let inimigo = gerarInimigo(inimigos);
console.log(inimigo)

console.log(`O ataque do ${inimigo.nome} foi ${ataqueInimigo(inimigo)}`);