'use strict';

let last: number = 5;
let total: number = 1;

function factorio(a){
	for(let i = 1; i <= a; i++){
		total = total * i;
	}
	return total;
}

console.log(factorio(last));

