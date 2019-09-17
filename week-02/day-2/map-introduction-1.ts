'use strict';

let map = {};

if (Object.keys(map).length > 0) {
	console.log("not empty");
} else {
	console.log("empty");
};

console.log("---");

map[97] = "a"; 
map[98] = "b";
map[99] = "c";
map[65] = "A";
map[66] = "B";
map[67] = "C";

//is there an easier way to do this?

console.log(Object.keys(map));

console.log("---");

//console.log(Object.values(map)); - should work, doesn't

let values = Object.keys(map).map(function(a){
	return map[a];
});

console.log(values);

console.log("---");

map[68] = "D";

console.log(Object.keys(map).length);

console.log("---");

console.log(map[99]);

console.log("---");

delete map[97];

if(map[100] == undefined) {
	console.log("no associated value with key 100");
} else {
	console.log(map[100] + " value is associated with key 100");
};

console.log("---");

Object.keys(map).forEach(function(key) {
	delete map[key];
});

console.log(map);


