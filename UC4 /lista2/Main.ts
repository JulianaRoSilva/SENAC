import { Spell } from "./Spell";
import { Wizard } from "./Wizard";
import { House } from "./House";

const house1: House = new House('Lufa Lufa', 'Diane');

const spellFire: Spell = new Spell('Fire', 15, 5);
const spellWird: Spell = new Spell('Wird', 5, 3);



const w: Wizard = new Wizard('Juliana', house1 , 30);

w.showLearnSpells();

w.learnSpell(spellFire);
w.learnSpell(spellWird);

w.getSpell();

// w.showLearnSpells();