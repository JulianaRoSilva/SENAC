import { Character } from "./Character";
import { Weapon } from "./Weapon";

export class Warrior extends Character {

    private strength: number
    private weapon: Weapon

    constructor(name: string, level: number, health: number, strength: number, weapon: Weapon){
        super(name, level, health);
        this.strength = strength;
        this.weapon = weapon;
    }

    getStrength(): number {
        return this.strength;
    }

    getWeapon(): Weapon {
        return this.weapon
    }

    setStrength(val: number): void {
        this.strength = val;
    }

    setWeapon(weapon: Weapon): void {
        this.weapon = weapon;
    }

    public atack(): void {
        console.log(`
${this.getName()} atacked with ${this.weapon.getName()}!
Damage: ${this.weapon.getDamage()}
`)

    }
}