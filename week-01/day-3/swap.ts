'use strict'

let a: number = 123;
let b: number = 526;

let temp1 = a;
let temp2 = b;

a = temp2;
b = temp1;

console.log(a);
console.log(b);