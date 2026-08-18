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
    /**
     * Setter $name
     * @param {string} value
     */
    set $name(value) {
        this.name = value;
    }
    /**
     * Setter $damage
     * @param {number} value
     */
    set $damage(value) {
        this.damage = value;
    }
    /**
     * Setter $manaCost
     * @param {number} value
     */
    set $manaCost(value) {
        this.manaCost = value;
    }
    setDamage(val) {
        if (val) { // se o valor for positivo
            this.damage = val;
        }
    }
    showInformation() {
        return `
        -- Spell informations --
        Name: ${this.name}
        Damage: ${this.damage}
        Mana Cost: ${this.manaCost}
        -- ------------------ --

        `;
    }
    useSpell(mana) {
        if (mana >= this.manaCost) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Spell = Spell;
