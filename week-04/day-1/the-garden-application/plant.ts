export class Plant {
    color: string;
    waterLevel: number;
    need: number;
    absorbs: number;

    constructor(waterLevel: number, color: string,need: number, absorbs: number) {
        this.color = color;
        this.waterLevel = waterLevel;
        this.need = need;
        this.absorbs = absorbs;
    }

    type() {
        return " plant"
    }

    needsOrNot() {
        if (this.waterLevel < this.need) {
            console.log("The " + this.color + this.type() + " needs water.")
        } else {
            console.log("The " + this.color + this.type() + " doesn't need water.")
        }
    }
}