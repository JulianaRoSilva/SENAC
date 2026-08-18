export class House {

    private name: string;
    private founder: string;
    private points: number;


	constructor($name: string, $founder: string) {
		this.name = $name;
		this.founder = $founder;
        this.points = 0;
	}

    public getName(): string {
        return this.name;
    }

    

}