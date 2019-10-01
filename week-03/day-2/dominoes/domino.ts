import { Printable } from "../../../week-04/day-2/printable/printable"

export class Domino implements Printable {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }

    printAllFields() {
        console.log(this.values)
    }
}