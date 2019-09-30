import { Plant } from "./plant"

export class Tree extends Plant {
    constructor(waterLevel?: number, color?: string, need: number = 10, absorbs: number = 0.4) {
        super(waterLevel, color, need, absorbs)
    }

    type() {
        return " tree"
    }
}