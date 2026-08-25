// Arquivo com funções auxiliares para usar em todo o trabalho
const ask = require('readline-sync')

export function clear(): void {
    console.clear();
}

export function stop(): void {
    ask.question('Press ENTER to continue...');
}