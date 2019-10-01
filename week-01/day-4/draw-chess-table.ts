'use strict';

let lineCount: number = 8;
let a: string = " ";
let b: string = "%";

for (let i = 0; i < lineCount; i++) {
	if (i % 2 == 0) {
		a = "%"
		for (let j = 1; j < lineCount; j++) {
			if (j % 2 == 0) {
				a += "%";
			} else {
				a = a + " ";
			}
		}
	} else {
		a = " "
		for (let j = 1; j <= lineCount; j++) {
			if (j % 2 == 0) {
				a += " ";
			} else {
				a = a + "%";
			}
		}
	}
	console.log(a);
}