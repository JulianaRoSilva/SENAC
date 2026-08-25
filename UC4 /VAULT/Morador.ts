import { Sala } from "./Sala";

const ask = require('readline-sync');

export class Morador {

    private name: string;
    private age: number;
    private sala: Sala;

    constructor(name: string, age: number, sala: Sala){
        this.name = name;
        this.age = age;
        this.sala = sala;

    }

	public getName(): string {
		return this.name;
	}

	public getAge(): number {
		return this.age;
	}

	public setName(value: string) {
		this.name = value;
	}

	public setAge(value: number) {
		this.age = value;
	}

	public setSala(value: Sala) {
		this.sala = value;
	}


}