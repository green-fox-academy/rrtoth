'use strict';

let a: number = 3 + 10;
// make it bigger by 10

console.log(a);

let b: number = 100 - 7;
// make it smaller by 7

console.log(b);

let c: number = 44 * 2;
// double c's value

console.log(c);

let d: number = 125 / 5;
// divide d's value by 5

console.log(d);

let e: number = 8 ** 3;
// what's the cube of e's value?

console.log(e);

let f1: number = 123;
let f2: number = 345;
let bigger: boolean = f1>f2;

console.log(bigger);
// tell if f1 is bigger than f2 (as a boolean)

let g1: number = 350;
let g2: number = 200;
let double: boolean = (2 * g2) > g1;

console.log(double);
// tell if the double of g2 is bigger than g1 (pras a boolean)

let h: number = 1357988018575474;
let divisor: boolean = h % 11 == 0;

console.log(divisor);
// tell if 11 is a divisor of h (as a boolean)

let i1: number = 10;
let i2: number = 3;
let higher: boolean = i1 > i2 ** 2;
let smaller: boolean = i1 < i2 ** 3;

console.log(higher && smaller);
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)

let j: number = 1521;
let div3: boolean = j % 3 == 0;
let div5: boolean = j % 5 == 0;

console.log(div3 && div5);
// tell if j is divisible by 3 or 5 (as a boolean)

/*console.log(k);
I have no idea why the previous line has "k" and not "j" but I thought I would leave this here
*/