// Create a method that decrypts duplicated-chars.txt
'use strict';

declare var require: any;
//aks for global solution

const fs = require('fs');

let abc: string = fs.readFileSync("duplicated-chars.txt", "utf8");
let letters: string[] = abc.split('');
let half: string[] = [];
let words: string = "";

for (let i = 0; i < letters.length; i++) {
    half.push(letters[i]);
    i++;
}

half.forEach(e => { words = words + e });

fs.writeFileSync("chars.txt", words, "utf8");

