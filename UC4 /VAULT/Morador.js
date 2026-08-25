"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Morador = void 0;
const ask = require('readline-sync');
class Morador {
    name;
    age;
    sala;
    constructor(name, age, sala) {
        this.name = name;
        this.age = age;
        this.sala = sala;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(value) {
        this.name = value;
    }
    setAge(value) {
        this.age = value;
    }
    setSala(value) {
        this.sala = value;
    }
}
exports.Morador = Morador;
