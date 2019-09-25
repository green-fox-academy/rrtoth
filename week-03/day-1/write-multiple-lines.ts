// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.

'use strict';

declare var require: any;
//aks for global solution

const fs = require('fs');

//I don't think it's possible for the program to be unable to write the file, it will just create a new one


let path: string = "my-file.txt"
let word: string = "apple";
let number: number = 5;

function asdf(path, word) {
    return fs.appendFileSync(path, word + "\n", "utf8");
}

while (number-1 > 0) {
    asdf(path, word)
    number--;
}
fs.appendFileSync(path, word, "utf8")