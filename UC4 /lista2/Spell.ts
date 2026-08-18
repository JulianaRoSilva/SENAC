export class Spell {

    private name: string;
    private damage: number;
    private manaCost: number;


	constructor(name: string, damage: number, manaCost: number) {
		this.name = name.toUpperCase();
		this.damage = damage;
		this.manaCost = manaCost;
	}

	public getName(): string {
		return this.name;
	}

	public getDamage(): number {
		return this.damage;
	}

	public getManaCost(): number {
		return this.manaCost;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $damage
     * @param {number} value
     */
	public set $damage(value: number) {
		this.damage = value;
	}

    /**
     * Setter $manaCost
     * @param {number} value
     */
	public set $manaCost(value: number) {
		this.manaCost = value;
	}


    public setDamage(val: number): void {
        if(val){ // se o valor for positivo
            this.damage = val;
        }
    }

    public showInformation(): string {
        return `
        -- Spell informations --
        Name: ${this.name}
        Damage: ${this.damage}
        Mana Cost: ${this.manaCost}
        -- ------------------ --

        `
    }

    public useSpell(mana: number): boolean {
        if(mana >= this.manaCost ){
            return true;
        } else {
            return false;
        }
    }


    


}