"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mage = void 0;
const Character_1 = require("./Character");
class Mage extends Character_1.Character {
    spell;
    mana = 30; // ja incia com 30 de mana
    constructor(name, level, health, spell) {
        super(name, level, health);
        this.spell = spell;
    }
    getMana() {
        return this.mana;
    }
    getSpell() {
        return this.spell;
    }
    setSpell(spell) {
        this.spell = spell;
    }
    castSpell() {
        if (this.mana >= this.spell.getManaCost()) {
            this.mana -= this.spell.getManaCost();
            console.log(`
${this.getName()} Cast Spell of ${this.spell.getName()}! and consumed ${this.spell.getManaCost()} of yout mana!
Damage: ${this.spell.getDamage()}
Mana remaining: ${this.mana}`);
        }
        else {
            console.log(`${this.getName()} doesn't have enough mana!`);
        }
    }
}
exports.Mage = Mage;
