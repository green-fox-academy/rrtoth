// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
'use strict';

declare var require: any;
//aks for global solution

const fs = require('fs');

let file: string = "";

try {
    file = fs.readFileSync("my-file.txt", "utf8")
    let lines: string[] = file.trim().split('\n');
    console.log("The file has " + lines.length + " line(s).")
}
catch (error) {
    console.log("Unable to read file: my-file.txt \n The file has 0 lines.");
}