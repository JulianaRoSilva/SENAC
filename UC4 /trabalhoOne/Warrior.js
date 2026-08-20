"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
const Character_1 = require("./Character");
class Warrior extends Character_1.Character {
    strength;
    weapon;
    constructor(name, level, health, strength, weapon) {
        super(name, level, health);
        this.strength = strength;
        this.weapon = weapon;
    }
    getStrength() {
        return this.strength;
    }
    getWeapon() {
        return this.weapon;
    }
    setStrength(val) {
        this.strength = val;
    }
    setWeapon(weapon) {
        this.weapon = weapon;
    }
    atack() {
        console.log(`
${this.getName()} atacked with ${this.weapon.getName()}!
Damage: ${this.weapon.getDamage()}
`);
    }
}
exports.Warrior = Warrior;
