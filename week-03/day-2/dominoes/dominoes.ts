import { Domino } from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes: any[] = initializeDominoes()

/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

let a: number[][] = [];

dominoes.forEach(e => { a.push(e.values) });

let b: number[][] = [];
b.push(a[0]);

for (let j = 0; j < 5; j++) {
    for (let i = 1; i < 6; i++) {
        if (a[i][0] == b[j][1]) {
            b.push(a[i]);
        }
    }
}

console.log(b)

console.log("\nPrintable interface exercise")
for (let domino of dominoes) {
    domino.printAllFields();
}