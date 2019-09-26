import { Sharpie } from "../day-2/sharpie";

class SharpieSet {
    sharpies: Sharpie[];

    constructor(allSharpies?: Sharpie[]) {
        if (allSharpies) {
            this.sharpies = allSharpies;
        } else {
            this.sharpies = [];
        }
    }

    public addd(sharpie: Sharpie): void {
        this.sharpies.push(sharpie);
    }

    public countUsable(): number {
        let counter: number = 0;

        for (let i = 0; i < this.sharpies.length; i++) {
            if (this.sharpies[i].inkAmount > 0) {
                counter++;
            }
        }
        return counter;
    }

    public recycle(): void {
        for (let i = 0; i < this.sharpies.length; i++) {
            if (this.sharpies[i].inkAmount == 0) {
                this.sharpies.splice(i, 1);
            }
        }
    }
}

let test1 = new Sharpie('blue', 20, 0);
let test2 = new Sharpie('red', 20);
let test3 = new Sharpie('green', 20);
let test4 = new Sharpie('black', 20);

let asd = new SharpieSet();

asd.addd(test1);
asd.addd(test2);
asd.addd(test3);
asd.addd(test4);

console.log(asd.countUsable());

asd.recycle();

console.log(asd)