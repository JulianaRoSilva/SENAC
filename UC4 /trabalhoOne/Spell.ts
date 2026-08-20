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

	public setName(value: string) {
		this.name = value;
	}

	public setManaCost(value: number) {
		this.manaCost = value;
	}

    public setDamage(val: number): void {
        if(val){ // se o valor for positivo
            this.damage = val;
        }
    }

    public showInformation(): void {
        console.log(`
        ========================
        Weapon
        ========================
        Name: ${this.name}
        Damage: ${this.damage}
        Mana Cost: ${this.manaCost}
        `); 
    }
}