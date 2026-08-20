"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spell = void 0;
class Spell {
    name;
    damage;
    manaCost;
    constructor(name, damage, manaCost) {
        this.name = name.toUpperCase();
        this.damage = damage;
        this.manaCost = manaCost;
    }
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getManaCost() {
        return this.manaCost;
    }
    setName(value) {
        this.name = value;
    }
    setManaCost(value) {
        this.manaCost = value;
    }
    setDamage(val) {
        if (val) { // se o valor for positivo
            this.damage = val;
        }
    }
    showInformation() {
        console.log(`
        ========================
        Weapon
        ========================
        Name: ${this.name}
        Damage: ${this.damage}
        Mana Cost: ${this.manaCost}
        `);
    }
}
exports.Spell = Spell;
