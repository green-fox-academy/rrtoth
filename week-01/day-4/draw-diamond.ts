'use strict'

let lineCount: number = 7;
let lnC1: number = lineCount / 2 - .5;
let lnC2: number = lineCount / 2 + .5;
let star: string = "*";
let stars: string = "*";
let space: string = " ";
let spaces: string = "";

for (let a = 0; a < lnC2; a++) {
	spaces = "";

	for (let b = lnC2 - a; b > 0; b--) {
		spaces += space;
	}

	console.log(spaces + stars);
	stars += (star + star);
}

spaces = "  ";

for (let a = 1; a <= lnC1; a++) {
	stars = "*";

	for (let b = lnC1 - a; b > 0; b--) {
		stars += (star + star);
	}

	console.log(spaces + stars);
	spaces += space;
}