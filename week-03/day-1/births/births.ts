// Create a function that
// - takes the name of a CSV file as a parameter,
//   - every row is in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - returns the year when the most births happened.
//   - if there were multiple years with the same number of births then return any one of them

// You can find such a CSV file in this directory named births.csv
// If you pass "births.csv" to your function, then the result should be either 2006, or 2016.
'use strict';

declare var require: any;

const fs = require('fs');

let abc: string = fs.readFileSync("births.csv", "utf8");
let lines: string[] = abc.split('\n');
let dates: string[] = [];
let years: string[] = [];
let yrs = {};

for (let i = 0; i < lines.length; i++) {
    let parts = lines[i].trim().split(';');
    dates.push(parts[1]);
}

dates.forEach(e => years.push(e.substring(0, 4)));

years.forEach(e => {
    if (yrs.hasOwnProperty(e)) {
        yrs[e] = yrs[e] + 1;
    } else {
        yrs[e] = 1;
    }
})

let keys = Object.keys(yrs);

let values = Object.keys(yrs).map(function (a) {
    return yrs[a];
});

let max: number = 0;

values.forEach(e => {
    if (e >= max) {
        max = e;
    }
})

let maxs: string[] = []

for (let i = 0; i < values.length; i++) {
    if (values[i] == max) {
        maxs.push(keys[i]);
    }
}

console.log("The most births happened in: " + maxs)