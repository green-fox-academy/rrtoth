import { Flyable } from "./flyable"
import { ReptileAndBird } from "../zoo/zoo"

export class Bird extends ReptileAndBird implements Flyable {
    constructor(name: string = "genericBird", age: number = 0, gender: string = "m", legs: number = 2, integument: string = "plume") {
        super(name, age, gender, legs, integument)
    }

    takeOff(): void {
        console.log("takeoff test")
    }

    fly(): void {
        console.log("fly test")
    }

    land(): void {
        console.log("land test")
    }
}