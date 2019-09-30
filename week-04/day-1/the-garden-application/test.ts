import { Flower } from "./flower"
import { Tree } from "./tree"
import {Garden} from "./garden"

let myFirtGarden = new Garden;

let flower1 = new Flower(3,"red");
let flower2 = new Flower(2,"blue");
let tree1 = new Tree(5,"yellow");
let tree2 = new Tree(5,"green");

myFirtGarden.addPlant(flower1)
myFirtGarden.addPlant(flower2)
myFirtGarden.addPlant(tree1)
myFirtGarden.addPlant(tree2)

myFirtGarden.plantsInfo()
myFirtGarden.waterGarden(40)
myFirtGarden.waterGarden(70)