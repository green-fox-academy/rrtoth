'use strict';

let list: number[] = [1, 11, 34, 11, 52, 61, 1, 34];

function unique(a) {
	for (let i = 0; i < a.length; i++){
		for (let j = i + 1; j < a.length; j++){ 
		     if (a[i] == a[j]) {
			a.splice(j, 1);
			j = i + 1;
		} else {		
		};
	}
	}
	console.log(a);
}

unique(list);

// it works!!! I have no idea how, but it works (and there was no copy-paste involved)
