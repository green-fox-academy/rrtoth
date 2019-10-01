export interface Flyable {
    land(): void;
    fly(): void;
    takeOff(): void;
}

export abstract class Vehicle {
    numOfDoors: number;
    speed: number;
    numOfSeats: number;
    type: string;

    constructor(doors?: number, speed?: number, seats?: number, type?: string) {
        this.numOfDoors = doors;
        this.speed = speed;
        this.numOfSeats = seats;
        this.type = type;
    }
}