'use strict';

let map = {
	"978-1-60309-452-8": "A Letter to Jo",
	"978-1-60309-459-7": "Lupus",
	"978-1-60309-444-3": "Red Panda and Moon Bear",
	"978-1-60309-461-0": "The Lab",
};

let pairs = Object.keys(map).map(a => console.log(map[a] + " (ISBN: " + a + ")"));

delete map["978-1-60309-444-3"];

let values: string[] = Object.keys(map).map(function(a){
	return map[a];
});

let keys: string[] = Object.keys(map);

delete map[keys[values.indexOf("The Lab")]];

map["978-1-60309-450-4"] = "They Called Us Enemy";
map["978-1-60309-453-5"] = "Why Did We Trust Him?";

if (map["478-0-61159-424-8"] != undefined) {
	console.log("there's value associated with key 478-0-61159-424-8");
} else {
	console.log("there's no value associated with key 478-0-61159-424-8");
};

console.log(map["978-1-60309-453-5"])