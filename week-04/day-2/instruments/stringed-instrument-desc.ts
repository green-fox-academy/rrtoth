import { StringedInstrument } from "./stringed-instrument"

export class ElectricGuitar extends StringedInstrument {
    constructor(numOfStrings: number = 6) {
        super(numOfStrings, "Electric Guitar")
    }

    sound() {
        return "Twang"
    }
}

export class BassGuitar extends StringedInstrument {
    constructor(numOfStrings: number = 4) {
        super(numOfStrings, "Bass Guitar")
    }

    sound() {
        return "Duum-duum-duum"
    }
}

export class Violin extends StringedInstrument {
    constructor(numOfStrings: number = 4) {
        super(numOfStrings, "Violin")
    }

    sound() {
        return "Screech"
    }
}