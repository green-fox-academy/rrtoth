'use strict'

let lineCount: number = 4;
let a: number = 0;
let str: string = "*";
let b: number = 6;
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

while (a > 0)  {
    console.log(repeat(spce,b) + repeat(str,a));
	a--;
    a--;
    b++;	
}

