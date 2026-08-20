import { Warrior } from "./Warrior";
import { Mage } from "./Mage";
import { Party } from "./Party";
import { Spell } from "./Spell";
import { Weapon } from "./Weapon";
const ask = require('readline-sync');

// criação armas
const weapon1: Weapon = new Weapon('Arco', 20);
const weapon2: Weapon = new Weapon('Sword', 15);

// criação poções
const spellFire: Spell = new Spell('Fire', 15, 5);
const spellWater: Spell = new Spell('Water', 10, 2);

// dois guerreiros
const guerreiro1: Warrior = new Warrior('Aelric', 3, 100, 30 , weapon1);
const guerreiro2: Warrior = new Warrior('Arthos', 4, 100, 30, weapon2);

// dois magos
const mago1: Mage = new Mage('Louren', 2, 90, spellFire);
const mago2: Mage = new Mage('Eldrin', 2, 90, spellWater);

// criação da party. É possível colocar ou não já os guerreiros na hora de criar a party;
const party: Party = new Party('Blades of Destiny', []);

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