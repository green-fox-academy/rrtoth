'use strict';

let numList: number[] = [1, 2, 3, 8, 5, 6];
let a: number[] = numList.map(function(b) {
				return b / 2;
});

numList.splice(3, 1, a[3]);

console.log(numList[3]);

//not sure that this is what I had to do, but it works, and it is done with the things we're supposed to practice

//also, I probably should give more meaningful names to variables
