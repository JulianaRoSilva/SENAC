// Arquivo com funções auxiliares para usar em todo o trabalho
const ask = require('readline-sync')

export function clear(): void {
    console.clear();
}

export function stop(): void {
    ask.question('Press ENTER to continue...');
}

// cores
export function green(text: string): string {
         return `\x1b[92m${text}\x1b[0m`
}

export function red(text: string): string {
        return `\x1b[91m${text}\x1b[0m`
}  

