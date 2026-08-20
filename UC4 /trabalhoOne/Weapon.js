"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
class Weapon {
    name;
    damage;
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    setName(value) {
        this.name = value;
    }
    setDamage(value) {
        this.damage = value;
    }
    showInfo() {
        console.log(`
        ========================
        Weapon
        ========================
        Name: ${this.name}
        Damage: ${this.damage}
            
            `);
    }
}
exports.Weapon = Weapon;
