"use strict"

import * as test from 'tape';


class Apple {
    getApple() {
        return "apples"
    }
}

let a = new Apple

test('I need some apples', t => {
    let actual = a.getApple();
    let expected = "apples";

    t.equal(actual, expected);
    t.end();
})