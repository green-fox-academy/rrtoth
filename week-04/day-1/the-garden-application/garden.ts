import { Flower } from "./flower"
import { Tree } from "./tree"

export class Garden {
    private _flowers: Flower[];
    private _trees: Tree[];

    constructor() {
        this._flowers = [];
        this._trees = [];
    }

    addFlower(flower: Flower) {
        this._flowers.push(flower)
    }

    addTree(tree: Tree) {
        this._trees.push(tree)
    }

    waterGarden(waterAmount: number) {
        let needToBeWatered = 0;

        for (let i = 0; i < this._trees.length; i++) {
            if (this._trees[i].waterLevel < 10) {
                needToBeWatered++;
            }
        }

        for (let i = 0; i < this._flowers.length; i++) {
            if (this._flowers[i].waterLevel < 5) {
                needToBeWatered++;
            }
        }

        for (let i = 0; i < this._flowers.length; i++) {
            if (this._flowers[i].waterLevel < 5) {
                this._flowers[i].waterLevel += waterAmount / needToBeWatered * 0.75;
            }
        }

        for (let i = 0; i < this._trees.length; i++) {
            if (this._trees[i].waterLevel < 10) {
                this._trees[i].waterLevel += waterAmount / needToBeWatered * 0.4;
            }
        }
    }
}

