import { Animal } from "./animal"

export abstract class ReptileAndBird extends Animal {
    constructor(name: string, age: number, gender: string, legs: number, integument: string) {
        super(name, age, gender, legs, integument)
    }

    breed() {
        return "laying eggs."
    }
}

export class Reptile extends ReptileAndBird {
    constructor(name: string = "Reptile", age: number = 0, gender: string = "m", legs: number = 4, integument: string = "scale") {
        super(name, age, gender, legs, integument)
    }
}

export class Bird extends ReptileAndBird {
    constructor(name: string = "Bird", age: number = 0, gender: string = "m", legs: number = 2, integument: string = "plume") {
        super(name, age, gender, legs, integument)
    }
}

export class Mammal extends Animal {
    constructor(name: string = "Mammal", age: number = 0, gender: string = "m", legs: number = 4, integument: string = "fur") {
        super(name, age, gender, legs, integument)
    }

    breed() {
        return "pushing miniature versions out."
    }
}