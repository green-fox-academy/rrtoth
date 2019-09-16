'use strict';

let last: number = 5;
let total: number = 0;

function sum(a){
	for(let i = 0; i <= a; i++){
		total += i;
	}
	return total;
}

console.log(sum(last));

