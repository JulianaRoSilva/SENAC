export class Character {

    private name: string;
    private lever: number;
    private health: number;


	constructor(name: string, lever: number, health: number) {
		this.name = name;
		this.lever = lever;
		this.health = health;
	}
    
	public getName(): string {
		return this.name;
	}

	public geLevel(): number {
		return this.lever;
	}

	public getHealth(): number {
		return this.health;
	}

	public setName(value: string) {
		this.name = value;
	}

	public setLevel(value: number) {
		this.lever = value;
	}

	public setHealth(value: number) {
		this.health = value;
	}

	//mostrar infos character
    public showInfo(): void {
		console.log(`
========================
${this.name}
========================
Name: ${this.name}
Level: ${this.lever}
Health: ${this.health}
	`)
    }

    public takeDamage(amout: number): void {
        
        if(this.health > 0){
            this.health -= amout
			console.log(`${this.name} suffered damage from ${amout}!`);

            if(this.health < 0) {
                this.health = 0
				console.log(`${this.name} die!`);

            }
        }
    }
}