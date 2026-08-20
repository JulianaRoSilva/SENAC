"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    name;
    lever;
    health;
    constructor(name, lever, health) {
        this.name = name;
        this.lever = lever;
        this.health = health;
    }
    getName() {
        return this.name;
    }
    geLevel() {
        return this.lever;
    }
    getHealth() {
        return this.health;
    }
    setName(value) {
        this.name = value;
    }
    setLevel(value) {
        this.lever = value;
    }
    setHealth(value) {
        this.health = value;
    }
    //mostrar infos character
    showInfo() {
        console.log(`
========================
${this.name}
========================
Name: ${this.name}
Level: ${this.lever}
Health: ${this.health}
	`);
    }
    takeDamage(amout) {
        if (this.health > 0) {
            this.health -= amout;
            console.log(`${this.name} suffered damage from ${amout}!`);
            if (this.health < 0) {
                this.health = 0;
                console.log(`${this.name} die!`);
            }
        }
    }
}
exports.Character = Character;
