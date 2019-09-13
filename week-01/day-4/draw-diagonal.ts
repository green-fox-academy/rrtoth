'use strict';

let lineCount: number = 6;
let percent: string = "%";
var percents: string = "%%";
var space: string = " ";
let spaces1: string = "";
let spaces2: string = "";

for (let a = 1; a <= lineCount - 2; a++) {
	percents += percent;
}

for (let line = 1; line <= lineCount; line++) {
	if (line == 1 || line == lineCount) {
		console.log(percents);
	} else {
		for (let b = lineCount - line - 1; b > 0; b--) {
				spaces2 += space;
			}
		console.log(percent + spaces1 + percent + spaces2 + percent);
		spaces1 += space;
		spaces2 = "";
		}
}

