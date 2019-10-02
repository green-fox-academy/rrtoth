'use strict'

declare var require: any;
const fs = require('fs');

class CAB {
    a: number;
    b: number;
    c: number;
    d: number;

    constructor(a: number, b: number, c: number, d: number) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    checkCow(other: CAB) {
        let numOfCow = 0;
        let tempArray = [this.a, this.b, this.c, this.d];
        let newArray = [other.a, other.b, other.c, other.d];

        //tempArray.forEach(e => { e == newArray.indexOf(e) ? numOfCow++ : null })

        for (let i = 0; i < 4; i++) {
            tempArray[i] == newArray[i] ? numOfCow++ : null;
        }
        return numOfCow;
    }

    checkBull(other: CAB) {
        let numOfBull = 0;
        let tempArray = [this.a, this.b, this.c, this.d];
        let newArray = [other.a, other.b, other.c, other.d];

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                tempArray[j] == newArray[i] ? numOfBull++ : null;
            }
        }
        return numOfBull - this.checkCow(other);
    }
}

// get the number to guess
let numberToGuess = fs.readFileSync("index.txt", "utf-8").toString().split('')
let test = new CAB(numberToGuess[0], numberToGuess[1], numberToGuess[2], numberToGuess[3])

//get the guesses
let guess = fs.readFileSync("current-guess.txt", "utf-8").toString().split('')
let guesses = new CAB(guess[0], guess[1], guess[2], guess[3])

//make a file with the results
let result = guess.toString() + ": " + test.checkCow(guesses) + " Cow, " + test.checkBull(guesses) + " Bull\n";
fs.appendFileSync("result.txt", result, "utf8");
