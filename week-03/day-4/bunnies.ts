'use strict';

let ears: number;

function bunnies(n: number) {
    if (n == 0) {
        return 0;
    } else {
        return 2 + bunnies(n - 1);
    }
}

ears = bunnies(15)

console.log(ears)