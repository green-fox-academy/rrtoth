import { Plant } from "./plant"

export class Flower extends Plant {

    constructor(waterLevel: number, color: string, need: number = 5, absorbs: number = 0.75) {
        super(waterLevel, color, need, absorbs)
    }

    type() {
        return " flower"
    }
}