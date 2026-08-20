"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Warrior_1 = require("./Warrior");
const Mage_1 = require("./Mage");
const Party_1 = require("./Party");
const Spell_1 = require("./Spell");
const Weapon_1 = require("./Weapon");
const ask = require('readline-sync');
// criação armas
const weapon1 = new Weapon_1.Weapon('Arco', 20);
const weapon2 = new Weapon_1.Weapon('Sword', 15);
// criação poções
const spellFire = new Spell_1.Spell('Fire', 15, 5);
const spellWater = new Spell_1.Spell('Water', 10, 2);
// dois guerreiros
const guerreiro1 = new Warrior_1.Warrior('Aelric', 3, 100, 30, weapon1);
const guerreiro2 = new Warrior_1.Warrior('Arthos', 4, 100, 30, weapon2);
// dois magos
const mago1 = new Mage_1.Mage('Louren', 2, 90, spellFire);
const mago2 = new Mage_1.Mage('Eldrin', 2, 90, spellWater);
// criação da party. É possível colocar ou não já os guerreiros na hora de criar a party;
const party = new Party_1.Party('Blades of Destiny', []);
// Adição dos personagens dentro do objeto party
party.addMember(guerreiro1);
party.addMember(guerreiro2);
party.addMember(mago1);
party.addMember(mago2);
// inicio de mostrar as informações no terminal
party.begin();
party.showMembers();
party.meet();
//apresentação dos personagens
console.clear();
guerreiro1.showInfo();
guerreiro2.showInfo();
mago1.showInfo();
mago2.showInfo();
party.continue();
// ataques!!
party.battle();
party.clear();
guerreiro1.atack();
guerreiro2.atack();
mago2.castSpell();
mago2.castSpell();
party.continue();
//alterações
console.clear();
console.log(`The Mage ${mago1.getName()} leveled up and is now at level 10! ${mago1.setLevel(10)}! New infos of Mage`);
mago1.showInfo();
party.continue();
party.clear();
party.memberLeft();
party.removeMember(mago2);
party.clear();
console.log("Remaining members: ");
party.showMembers();
