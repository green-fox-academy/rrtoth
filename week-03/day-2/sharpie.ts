// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating one, we need to specify the color and the width
// Every sharpie is created with a default 100 as inkAmount
// We can use() the sharpie objects
// which decreases inkAmount

'use strict';

import * as test from 'tape'
import { userInfo } from 'os';

export class Sharpie {
    color: string;
    width: number;
    inkAmount: number;

    constructor(color: string, width: number, inkAmount: number = 100) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }

    public use() {
        this.inkAmount--;
    }
}

let a = new Sharpie('red', 2, 10)
a.use()
a.use()
a.use()
a.use()

test("Sharpie", t => {
    let actual = a.color
    let expected = "red"

    t.equal(actual, expected)
    t.end()
})
test("Sharpie", t => {
    let actual = a.width
    let expected = 2

    t.equal(actual, expected)
    t.end()
})
test("Sharpie", t => {
    let actual = a.inkAmount
    let expected = 6

    t.equal(actual, expected)
    t.end()
})
