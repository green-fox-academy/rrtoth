'use strict';

let numList: number[] = [3, 4, 5, 6, 7];

// 1st solution
console.log(numList.reverse());

// 2nd solution
let newList: number[] = [];
let j: number = numList.length;

for(let i = 0; i < numList.length; i++) {
	j--;	
	newList[i] = numList[j];
}
console.log(newList);