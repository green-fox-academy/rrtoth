import { Instrument } from "./instrument"

export abstract class StringedInstrument extends Instrument {
    numberOfStrings: number;

    constructor(numberOfStrings: number, name?: string, ) {
        super(name);
        this.numberOfStrings = numberOfStrings;
    }

    sound() { }

    play() {
        console.log(this.name + ", a " + this.numberOfStrings + "-stringed instrument that goes " + this.sound())
    }
}