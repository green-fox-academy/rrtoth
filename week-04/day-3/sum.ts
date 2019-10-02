'use strict'

import * as test from 'tape'

class Asd {
    a: number[]

    constructor(a: number[]) {
        this.a = a;
    }

    sum() {
        let sum:number = 0;
        this.a.forEach(e => { sum += e });
        return sum;
    }
}

let test1 = new Asd([])

test('sum1', t => {
    let actual = test1.sum();
    let expected = 0;

    t.equal(actual, expected);
    t.end();
})

let test2 = new Asd([5])

test('sum2', t => {
    let actual = test2.sum();
    let expected = 5;

    t.equal(actual, expected);
    t.end();
})

let test3 = new Asd([1,2,3])

test('sum3', t => {
    let actual = test3.sum();
    let expected = 6;

    t.equal(actual, expected);
    t.end();
})