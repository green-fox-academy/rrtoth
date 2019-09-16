'use strict';

let animals: string[] = ["koal", "pand", "zebr"];
let newAnimals: string[] = [];

animals.forEach(function (item) {
	newAnimals.push(item + "a");
});

console.log(newAnimals);

//why do I get the feeling at almost all exercises that they could probably be solved in an easier way?
