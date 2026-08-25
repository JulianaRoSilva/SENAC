"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = clear;
exports.stop = stop;
exports.green = green;
exports.red = red;
// Arquivo com funções auxiliares para usar em todo o trabalho
const ask = require('readline-sync');
function clear() {
    console.clear();
}
function stop() {
    ask.question('Press ENTER to continue...');
}
// cores
function green(text) {
    return `\x1b[92m${text}\x1b[0m`;
}
function red(text) {
    return `\x1b[91m${text}\x1b[0m`;
}
