import { Spell } from "./Spell";
import { House } from "./House";
const ask = require('readline-sync');

export class Wizard {

    private name: string;
    private house: House; // classe house
    private mana: number;
    private speells: Spell[] = [];


    constructor($name: string, $house: House, $mana: number) {
        this.name = $name;
        this.house = $house;
        this.mana = $mana;
    }

    public getSpell(): void {
        console.log(this.speells);
    }

    // métodos

    // recarrega mana do personagem
    public rechargeMana(): void {
        this.mana = 30;
        ask.question('You racher your mana in 30! Press ENTER to continue...');
    }
    

    // aprende uma nova magia e joga no array de magias
    public learnSpell(maginaRecebida: Spell): void {
        this.speells.push(maginaRecebida);
        ask.question(`
        You learned a new spell named ${maginaRecebida.getName()}! 
        
        PRESS ENTER TO CONTINUE`);
    }

    // verificar se sabe certa magia
    public knowMagic(searchSpell: Spell): void {

        for(const spell of this.speells){

            if(searchSpell.getName() == spell.getName()){
                console.log(`${this.name} knows spell ${searchSpell.getName()}`);
            } else {
                console.log(`${this.name} dont leaned a spell ${searchSpell.getName()}`);
            }
        }
    }


    // mostra todas as magias aprendidas
    public showLearnSpells(): void {

        if (this.speells.length > 0) {

            console.log(`Spells learned: `);
            // laço para percorrer cada posiçao do array de magias para trazer todas elas no console
            for (const spell of this.speells) {
                console.log(`
            -- ---------------------- --
            Name: ${spell.getName()}
            House: ${this.house.getName()}
            Damage: ${spell.getDamage()}
            Mana Cost: ${spell.getManaCost()}
            -- ---------------------- --
                `);
            }

            ask.question('PRESS ENTER TO CONTINUE..');

        } else {
            ask.question(`You haven't learned any spells!`);
        }
    }


}