'use strict'

let num: number = 1;
let end: number = 6;
let sum: number = 0;

while (num <= end) {
	sum = sum + num;
	num++;
}

console.log("Sum: " + sum + ", Average: " + sum / end);