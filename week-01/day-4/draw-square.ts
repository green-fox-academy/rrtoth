'use strict';

let lineCount: number = 6;
let percent: string = "%";
var percents: string = "%%";
var space: string = " ";
let spaces: string = "";

for (let a = 1; a <= lineCount - 2; a++) {
	spaces += space;
	percents += percent
}

for (let line = 1; line <= lineCount; line++) {
	if (line == 1 || line == lineCount) {
		console.log(percents);
	} else {
		console.log(percent + spaces + percent);
	}
}
