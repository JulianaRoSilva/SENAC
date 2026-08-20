"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Party = void 0;
const ask = require('readline-sync');
class Party {
    name;
    members;
    constructor(name, members) {
        this.name = name;
        this.members = members;
    }
    getName() {
        return this.name;
    }
    getMembers() {
        return this.members;
    }
    setName(value) {
        this.name = value;
    }
    setMembers(value) {
        this.members = value;
    }
    //metodos auxiliares
    battle() {
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
            `);
        this.continue();
    }
    memberLeft() {
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
    begin() {
        this.clear();
        console.log(`
The adventure begins...
    
Meet the brave warriors who will face
the dangers of the dungeon!        
                `);
    }
    header() {
        console.log(`
=================================
MEMBER OF '${this.name.toUpperCase()}'
=================================\n`);
    }
    meet() {
        console.log('Lets get to know the characteristics of each member:');
    }
    brake() {
        console.log('=================================');
    }
    clear() {
        console.clear();
    }
    continue() {
        ask.question('Press ENTER to continue..');
    }
    // métodos principais
    addMember(character) {
        this.members.push(character);
    }
    removeMember(character) {
        for (let i = 0; i < this.members.length; i++) {
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
    showMembers() {
        let contagem = 1;
        if (this.members.length > 0) {
            this.header();
            for (let member of this.members) {
                console.log(`${contagem}. ${member.getName()} - Level ${member.geLevel()}`);
                contagem++;
            }
            this.brake(); // quebra de linha
            this.continue();
        }
        else {
            console.log(`There aren't member in the ${this.name}`);
            this.continue();
        }
    }
}
exports.Party = Party;
