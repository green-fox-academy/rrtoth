export class Flower {
    waterLevel: number;
    protected _color: string;

    constructor(waterLevel: number, color){
        this.waterLevel = waterLevel;
        this._color = color;
    }
}

let a = new Flower(10, "red")

console.log(a.waterLevel)