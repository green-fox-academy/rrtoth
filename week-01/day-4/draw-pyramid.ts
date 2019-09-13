'use strict'

let lineCount: number = 4;
let star: string = "*";
let stars: string = "*"; 
let space: string = " ";
let spaces: string = "";

for(let a = 0; a < lineCount; a++) {
	spaces = "";
	for (let b = lineCount - a; b > 0; b--) {
		spaces += space;
	}
	console.log(spaces + stars);
	stars += (star + star);
}


