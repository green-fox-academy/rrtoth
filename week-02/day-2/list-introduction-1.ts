'use strict';

let list: string[] = [];

console.log(list.length);

console.log("---");

list.push("William");

if (list.length > 0){
	console.log("not empty");
} else {
	console.log("empty");
};

list.push("John");

list.push("Amanda");

console.log("---");

console.log(list.length);

console.log("---");

console.log(list[2]);

console.log("---");

list.forEach(value => console.log(value));

console.log("---");

list.forEach(value => console.log(list.indexOf(value) + 1 + ". " + value));

console.log("---");

list.splice(1, 1);

list.reverse().forEach(value => console.log(value));

console.log("---");

list.splice(0, 2);

console.log(list);

