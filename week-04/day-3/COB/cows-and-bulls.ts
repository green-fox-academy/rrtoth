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
let guess1 = fs.readFileSync("current-guess.txt", "utf-8")
let guess2 = guess1.toString().split('')
let guesses = new CAB(guess2[0], guess2[1], guess2[2], guess2[3])

//make a file with the results

let counter = fs.readFileSync("result.txt", "utf-8").toString().split('\n').length;
let result = guess1 + ": " + test.checkCow(guesses) + " Cow, " + test.checkBull(guesses) + " Bull\t||\t" + counter + " guesses so far" + "\n";
guess2.join() == numberToGuess.join() ? fs.appendFileSync("result.txt", guess1 +": YOU WIN", "utf8") : fs.appendFileSync("result.txt", result, "utf8");

//problem to fix: checkBull()