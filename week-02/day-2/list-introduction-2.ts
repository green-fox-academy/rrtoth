'use strict';

let listA: string[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];
let listB: string[] = [];

listB = listB.concat(listA);

console.log(listB);

console.log("---");

if (listA.indexOf("Durian") >= 0) {
	console.log("ListA contains Durian.");
} else {
	console.log("ListA doesn't contain Durian.");
};

console.log("---");

listB.splice(listB.indexOf("Durian"), 1);

console.log(listB);

console.log("---");

listA.splice(4, 0, "Kiwifruit");

console.log(listA);

console.log("---");

if (listA.length > listB.length) {
	console.log("ListA is longer.");
} else if (listA.length = listB.length) {
	console.log("ListA and ListB are the same size.")
} else {
	console.log("ListB is longer.");
};

console.log("---");

console.log(listA.indexOf("Avocado"));

console.log("---");

console.log(listB.indexOf("Durian"));
//listB doesn't contain Durian

console.log("---");

listB = listB.concat("Passion Fruit", "Pomelo");

console.log(listA);

console.log("---");

console.log(listA[2]);

console.log("---");

console.log("ListA is: " + listA + "\n" + "ListB is: " + listB);
