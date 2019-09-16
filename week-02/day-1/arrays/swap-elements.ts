'use strict';

let abc: string[] = ["Arthur", "Boe", "Chloe"];
let temp: string = abc[2];

abc.splice(2, 1, abc[0]);
abc.splice(0, 1, temp);

console.log(abc);


//prob there's an easier way to do this
