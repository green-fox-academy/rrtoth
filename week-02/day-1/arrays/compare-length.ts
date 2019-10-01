'use strict';

let firstList: number[] = [1, 2, 3];
let secondList: number[] = [3, 5,];

if (firstList.length < secondList.length) {
	console.log("p2 is longer");
} else if (firstList.length == secondList.length) {
	console.log("they are the same length")
} else {
	console.log("p1 is longer");
}