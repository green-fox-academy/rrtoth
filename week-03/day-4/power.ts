'use strict';

let power: number;

function toTheNPower(base: number, n: number): number {
    if (n == 0) {
        return 1;
    } else {
        return base * toTheNPower(base, n - 1);
    }
}

power = toTheNPower(2, 8);

console.log(power);