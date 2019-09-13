'use strict'

let lineCount: number = 4;
let a: number = 0;
let str: string = "*";
let b: number = 5;
let spce: string = " ";

function repeat(str,a) {
	return (new Array(a)).join(str);
}

function pyramid(spce,b) {
	return (new Array(b)).join(spce);
}

while (a <= (lineCount * 2))  {
	console.log(repeat(spce,b) + repeat(str,a));
	a++;
	a++;
	b--;
}

//it probably can be done some different way, because I'm sure this isn't how we were supposed to this exercise, but I have no idea how, and this works, so why change it?

 
