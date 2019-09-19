'use strict';

let map = {
    "Eggs": 200,
    "Milk": 200,
    "Fish": 400,
    "Apples": 150,
    "Bread": 50,
    "Chicken": 550,
};

let expensive: number = 0;
let average: number = 0;
let sum: number = 0;
let below: number = 0;

console.log("The price of fish is: $" + map["Fish"]);

let values: number[] = Object.keys(map).map(function (a) {
    return map[a];
});

values.forEach(function (e) {
    if (e > expensive) {
        expensive = e;
    }
});

let keys: string[] = Object.keys(map);

console.log("The most expensive product is " + keys[values.indexOf(expensive)])

values.forEach(function (e) {
    sum += e;
});

console.log("The average price is $" + Math.round(sum / values.length * 100) / 100);

values.forEach(function (e) {
    if (e < 300) {
        below++;
    }
});

console.log("There are " + below + " products with price below $300")

if (keys[values.indexOf(125)] != undefined) {
    console.log("We can buy " + keys[values.indexOf(125)] + " for exactly $125")
} else {
    console.log("There isn't anything that we can buy for exactly $125")
}

let cheapest: number = values[0];

values.forEach(function (e) {
    if (e < cheapest) {
        cheapest = e;
    }
});

console.log("The cheapest product is " + keys[values.indexOf(cheapest)])