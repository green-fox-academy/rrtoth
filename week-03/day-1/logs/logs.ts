// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

'use strict';

declare var require: any;

const fs = require('fs');

let abc: string = fs.readFileSync("logs.txt", "utf8");
let lines: string[] = abc.split('\n');
let adresses: string[] = [];
let request: string[] = [];
let get: string[] = [];

for (let i = 0; i < lines.length; i++) {
    adresses.push(lines[i].substring(27, 38));
}

console.log(adresses)

for (let i = 0; i < lines.length; i++) {
    request.push(lines[i].substring(41, 45).trim());
}

get = request.filter(e => e == "GET")

console.log("The get/push ratio is: "+ (get.length / (request.length - get.length)).toFixed(2))