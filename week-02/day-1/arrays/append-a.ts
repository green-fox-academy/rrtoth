'use strict';

let animals: string[] = ["koal", "pand", "zebr"];
let newAnimals: string[] = [];

animals.forEach(e => { newAnimals.push(e + "a") });

console.log(newAnimals);