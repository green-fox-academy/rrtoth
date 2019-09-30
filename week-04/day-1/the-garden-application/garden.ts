import { Plant } from "./plant";

export class Garden {
    private _plants: Plant[]

    constructor() {
        this._plants = [];
    }

    addPlant(plant: Plant) {
        this._plants.push(plant)
    }

    plantsInfo() {
        for (let i = 0; i < this._plants.length; i++) {
            this._plants[i].needsOrNot();

        }
    }

    waterGarden(waterAmount: number) {
        console.log("\nWatering with " + waterAmount)
        let needToBeWatered = 0;

        this._plants.forEach(e => { e.waterLevel < e.need ? needToBeWatered++ : null });

        this._plants.forEach(e => { e.waterLevel < e.need ? e.waterLevel += waterAmount / needToBeWatered * e.absorbs : null });

        this.plantsInfo()
    }
}