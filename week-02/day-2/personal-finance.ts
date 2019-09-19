'use strict';

let list: number[] = [500, 1000, 1250, 175, 800, 120];
let spent: number = 0;
let greatest: number = 0;
let cheapest: number = list[0];

list.forEach(e => spent += e);

console.log("We spent $" + spent)

list.forEach(function (e) {
    if (e > greatest) {
        greatest = e;
    }
});

console.log("Our greatest expense was $" + greatest)

list.forEach(function (e) {
    if (e < cheapest) {
        cheapest = e;
    }
});

console.log("Our cheapest spending was $" + cheapest);

console.log("The average amount of our spendings was $" + Math.round(spent / list.length * 100) / 100)