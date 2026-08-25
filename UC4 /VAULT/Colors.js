"use strict";
// Classe auxiliar para poder manipular as cores no console de maneira mais organizada e limpa
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = void 0;
class Colors {
    // atributo static para que nao precise criar objeto pra acessar os metodos 
    static fim = '\x1b[0m';
    static green(text) {
        return `\x1b[92m${text}${this.fim}`;
    }
    static red(text) {
        return `\x1b[91m${text}${this.fim}`;
    }
}
exports.Colors = Colors;
