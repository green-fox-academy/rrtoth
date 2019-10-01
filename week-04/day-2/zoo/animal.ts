export abstract class Animal {
    name: string;
    age: number;
    gender: string;
    numOfLegs: number;
    integument: string;

    constructor(name: string, age: number, gender: string, legs: number, integument: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.numOfLegs = legs;
        this.integument = integument;
    }

    getName() {
        return this.name
    }

    abstract breed(): string
}