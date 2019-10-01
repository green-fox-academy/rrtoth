import { StringedInstrument } from "./stringed-instrument"

export class ElectricGuitar extends StringedInstrument {
    constructor(numOfStrings: number = 6, name: string = "Electric Guitar", ) {
        super(numOfStrings, name)
    }

    sound() {
        return "Twang"
    }
}

export class BassGuitar extends StringedInstrument {
    constructor(numOfStrings: number = 4, name: string = "Bass Guitar", ) {
        super(numOfStrings, name)
    }

    sound() {
        return "Duum-duum-duum"
    }
}

export class Violin extends StringedInstrument {
    constructor(numOfStrings: number = 4, name: string = "Violin") {
        super(numOfStrings, name)
    }

    sound() {
        return "Screech"
    }
}