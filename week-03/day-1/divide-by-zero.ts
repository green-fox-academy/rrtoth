// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

'use strict';

let num: number = 0;

function divide(a) {
    if (a == 0) {
        throw 'FAIL';
    }
    console.log(10 / a);
}

divide(num);