'use strict';

let divisor: number;

function gCD(number1: number, number2: number): number {
    if (!number2) {
        return number1;
    }
    return gCD(number2, number1 % number2)
}

divisor = gCD(174, 126);

console.log(divisor);
