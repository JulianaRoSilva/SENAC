import { Character } from "./Character";
import { Spell } from "./Spell";

export class Mage extends Character {

    private spell: Spell;
    private mana: number = 30; // ja incia com 30 de mana


	constructor(name: string, level: number, health: number, spell: Spell) {
        super(name, level, health)
		this.spell = spell;
	}

    getMana(): number {
        return this.mana;
    }

    getSpell(): Spell {
        return this.spell
    }

    setSpell(spell: Spell): void {
        this.spell = spell;
    }

    castSpell(): void{
        if(this.mana >= this.spell.getManaCost()){
             
            this.mana -= this.spell.getManaCost(); 

            console.log(`
${this.getName()} Cast Spell of ${this.spell.getName()}! and consumed ${this.spell.getManaCost()} of yout mana!
Damage: ${this.spell.getDamage()}
Mana remaining: ${this.mana}`);
        } else {
            console.log(`${this.getName()} doesn't have enough mana!`);
        }
    }
}