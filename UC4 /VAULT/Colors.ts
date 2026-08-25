// Classe auxiliar para poder manipular as cores no console de maneira mais organizada e limpa

export class Colors {

    // atributo static para que nao precise criar objeto pra acessar os metodos 
    private static fim: string = '\x1b[0m'; 

    static green(text: string): string {
         return `\x1b[92m${text}${this.fim}`
    }

    static red(text: string): string {
        return `\x1b[91m${text}${this.fim}`
    }  
}