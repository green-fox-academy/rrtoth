import { Vehicle, Flyable } from "./flyable"

export class Helicopter extends Vehicle implements Flyable {
    constructor(doors: number = 4, speed?: number, seats: number = 6, type?: string) {
        super(doors, speed, seats, type)
    }

    takeOff(): void{
        console.log("takeoff test")
    }
    
    fly(): void{
        console.log("fly test")
    }

    land(): void{
        console.log("land test")
    }
}