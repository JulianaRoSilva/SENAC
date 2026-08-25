import { clear } from "node:console";
import { Colors } from "./Colors";
import { Morador } from "./Morador";
import { stop } from "./Auxiliares";

export class Sala {
    
    private name: string;
    private qtdMax: number;
    private members: Morador[] = [];
    
    private contador = 1;


	constructor(name: string, qtdMax: number) {
		this.name = name;
		this.qtdMax = qtdMax;
	}


	public getName(): string {
		return this.name;
	}

	public getQtdMax(): number {
		return this.qtdMax;
	}

	public setName(value: string) {
		this.name = value;
	}

	public insertMember(morador: Morador): void {
		if(this.members.length < this.qtdMax){
			this.members.push(morador);
		} else {
			console.log('Essa sala já possui a quantidade maxima de moradores alocados!');
			stop();
		}

	}

    public showInfo(): void {
	
	clear();

    console.log(Colors.green(`========== ROOM ${this.name.toUpperCase()} ============`));
	console.log(`Quantity max: ${this.qtdMax}`);
    console.log(`Available positions: ${this.qtdMax - this.members.length}`);
    console.log(Colors.green(`==========    MEMBERS    ============`));
        
        for(let member of this.members){
            console.log(this.contador + ' - ' + member.getName())
            this.contador++
        }
    }
}