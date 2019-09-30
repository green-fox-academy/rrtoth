export class Tree {
    waterLevel: number;
    protected _color: string;
    
    constructor(waterLevel: number, color: string) {
        this._waterLevel = waterLevel;
        this._color = color;
    }

}