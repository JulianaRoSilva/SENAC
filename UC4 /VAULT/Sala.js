"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sala = void 0;
const node_console_1 = require("node:console");
const Colors_1 = require("./Colors");
const Auxiliares_1 = require("./Auxiliares");
class Sala {
    name;
    qtdMax;
    members = [];
    contador = 1;
    constructor(name, qtdMax) {
        this.name = name;
        this.qtdMax = qtdMax;
    }
    getName() {
        return this.name;
    }
    getQtdMax() {
        return this.qtdMax;
    }
    setName(value) {
        this.name = value;
    }
    insertMember(morador) {
        if (this.members.length < this.qtdMax) {
            this.members.push(morador);
        }
        else {
            console.log('Essa sala já possui a quantidade maxima de moradores alocados!');
            (0, Auxiliares_1.stop)();
        }
    }
    showInfo() {
        (0, node_console_1.clear)();
        console.log(Colors_1.Colors.green(`========== ROOM ${this.name.toUpperCase()} ============`));
        console.log(`Quantity max: ${this.qtdMax}`);
        console.log(`Available positions: ${this.qtdMax - this.members.length}`);
        console.log(Colors_1.Colors.green(`==========    MEMBERS    ============`));
        for (let member of this.members) {
            console.log(this.contador + ' - ' + member.getName());
            this.contador++;
        }
    }
}
exports.Sala = Sala;
