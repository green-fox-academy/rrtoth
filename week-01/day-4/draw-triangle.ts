'use strict'

let lineCount: number = 4;
let star: string = "*";
let stars: string = ""; 

for(let a = 1; a <= lineCount; a++) {
	stars = star + stars;
	console.log(stars);
}