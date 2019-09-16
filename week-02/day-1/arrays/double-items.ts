'use strict';

let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];
let doubleIt: string[] = [];

drinks.forEach(function (double) {
	doubleIt.push(double + double);
});

console.log(doubleIt);
