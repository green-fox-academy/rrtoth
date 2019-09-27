'use strict';

let ears: number;

function bunnies(a: number): number {
    if (a == 0) {
        return 0;
    } else {
        if (a % 2 == 0) {
            return 3 + bunnies(a - 1);
        } else {
            return 2 + bunnies(a - 1);
        }
    }
}

ears = bunnies(8);

console.log(ears)