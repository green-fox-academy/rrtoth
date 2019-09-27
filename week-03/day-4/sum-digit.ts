'use strict';

let digits: number;

function sumDigits(n: number): number {
    if (n / 10 <= 0) {
        return 0;
    } else {
        return n % 10 + sumDigits(Math.floor(n / 10));
    }
}

digits = sumDigits(12345);

console.log(digits);