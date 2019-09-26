import { Animal } from "../day-2/animal"

class Farm {
    list: Animal[];
    slots: number = 1;

    constructor(list?: Animal[]) {
        if (list) {
            this.list = list;
        } else {
            this.list = [];
        }
    }

    public add(animal: Animal): void {
        this.list.push(animal);
    }

    public breed() {
        if (this.slots != 0) {
            this.add(new Animal)
            this.slots--;
        }
    }

    public slaughter() {
        let min: number = 10000;

        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].hunger < min) {
                min = this.list[i].hunger
            }
        }

        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].hunger == min) {
                this.list.splice(i, 1)
            }
        }
        this.slots++;
    }
}

let faaarm = new Farm;
let cow = new Animal;


faaarm.breed();
faaarm.add(cow);
cow.play();
faaarm.slaughter();

console.log(faaarm)

// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal