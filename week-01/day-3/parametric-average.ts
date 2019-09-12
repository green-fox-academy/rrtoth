'use strict'

//what the hell is "parametric average"? doesn't matter. I think I don't want to know it

let num: number = 1;
let end: number = 6;
let sum: number = 0;

//nevermind, I found out

while (num <= end) {
	sum = sum + num;
	num++;
}	

console.log("Sum: " + sum + ", Average: " + sum / end);

