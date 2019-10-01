'use strict'

let buzz: number = 1;

while (buzz <= 100) {
	if (buzz % 3 == 0 && buzz % 5 == 0) {
		console.log("FizzBuzz");
	} else if (buzz % 3 == 0) {
		console.log("Fizz");
	} else if (buzz % 5 == 0) {
		console.log("Buzz");
	} else {
		console.log(buzz);
	}
	buzz++;
}