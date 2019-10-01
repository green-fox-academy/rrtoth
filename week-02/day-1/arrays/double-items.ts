'use strict';

let drinks: string[] = ['Gin', 'Whiskey', 'Wine', 'Beer'];
let doubleIt: string[] = [];

drinks.forEach(e => { doubleIt.push(e + e) });

console.log(doubleIt);