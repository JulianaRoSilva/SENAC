"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = clear;
exports.stop = stop;
// Arquivo com funções auxiliares para usar em todo o trabalho
const ask = require('readline-sync');
function clear() {
    console.clear();
}
function stop() {
    ask.question('Press ENTER to continue...');
}
