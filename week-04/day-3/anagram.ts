'use strict'

import * as test from "tape"

function anagram(a: string, b: string) {
    let tempArray: string[] = a.split('');
    let temp: string = "";

    for (let i = a.length - 1; i >= 0; i--) {
        temp += tempArray[i];
    }
    return temp == b ? true : false;
}

let a = "qwerty"
let b = "ytrewq"

test("anagram", t => {
    let actual = anagram(a, b);
    let expected = true;

    t.equal(actual, expected)
    t.end()
})
