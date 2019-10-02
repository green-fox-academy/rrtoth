'use strict';

import * as test from 'tape'

function fibonacci(index) {
    let array: number[] = [1, 1, 2]
    for (let i = 0; i <= index; i++) {
        array.push(array[array.length - 1] + array[array.length - 2])
    }
    return array[index - 1]
}

test("Fibonacci", t => {
    let actual = fibonacci(7);
    let expected = 13;

    t.equal(actual, expected);
    t.end()
})