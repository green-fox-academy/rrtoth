'use strict';

declare var require: any;

const fs = require('fs');

let abc: string = fs.readFileSync("reversed-order.txt", "utf8");
let lines: string[] = abc.trim().split('\r\n');
let asd: string[] = [];
let full: string = "";

for (let i = lines.length; i > 0; i--) {
    asd.push(lines[i]);
}

for (let j = 1; j < asd.length; j++) {
    full += asd[j] + "\n";
}

fs.writeFileSync("order.txt", full.trim(), "utf8");