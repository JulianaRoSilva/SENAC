import { Character } from "./Character";
const ask = require('readline-sync');


export class Party {

    private name: string;
    private members: Character[];

    constructor(name: string, members: Character[]) {
        this.name = name;
        this.members = members;
    }

    public getName(): string {
        return this.name;
    }

    public getMembers(): Character[] {
        return this.members;
    }

    public setName(value: string) {
        this.name = value;
    }

    public setMembers(value: Character[]) {
        this.members = value;
    }

    //metodos auxiliares

    battle(): void {
        this.clear();
        console.log(`
========================================
           THE BATTLE BEGINS!
========================================

The party has entered the dungeon.
Darkness surrounds them, and danger
lurks around every corner.

Prepare your weapons and spells...
It's time to fight!            
            `)
    this.continue();

    }

    memberLeft(): void {
console.log(`
========================================
          PARTY UPDATE
========================================

The journey continues...

One of our brave adventurers has left
the party.

The group will never be the same.
    `);
    this.continue();

    }

    public begin(): void {
        this.clear();
        console.log(`
The adventure begins...
    
Meet the brave warriors who will face
the dangers of the dungeon!        
                `);
    }

    header(): void {
        console.log(`
=================================
MEMBER OF '${this.name.toUpperCase()}'
=================================\n`);
    }

    meet(): void {
        console.log('Lets get to know the characteristics of each member:');
    }

    public brake(): void {
        console.log('=================================');
    }

    public clear(): void {
        console.clear();
    }

    public continue(): void{
        ask.question('Press ENTER to continue..');

    }

    // métodos principais

    addMember(character: Character): void {
        this.members.push(character);
    }

    removeMember(character: Character): void {

        for (let i: number = 0; i < this.members.length; i++) {
            this.clear();
            if (this.members[i].getName() === character.getName()) {

                console.log(`${this.members[i].getName()} WAS REMOVED!`);
                this.members.splice(i, 1);
                this.continue();

                return;
            }
        }
        console.log('This character not exists in the party!');
        this.continue();
    }

    showMembers(): void {

        let contagem: number = 1;

        if (this.members.length > 0) {
            this.header();
            for (let member of this.members) {
                console.log(`${contagem}. ${member.getName()} - Level ${member.geLevel()}`);
                contagem++;
            }
            this.brake(); // quebra de linha
            this.continue();

        } else {
            console.log(`There aren't member in the ${this.name}`);
            this.continue();
        }
    }


}

