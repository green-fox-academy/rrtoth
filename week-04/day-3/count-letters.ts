'use strict';

import * as test from 'tape'

function letterCounter(str: string) {
    let temp = {};
    for (let i = 0; i < str.length; i++) {
        if (temp.hasOwnProperty(str.charAt(i))) {
            temp[str.charAt(i)] += 1;
        } else {
            temp[str.charAt(i)] = 1;
        }
    }
    return temp
}

let a: string = "ggvuzgb";


test('counter', t => {
    let actual = letterCounter(a);
    let expected = {
        g: 3,
        v: 1,
        u: 1,
        z: 1,
        b: 1,
    }

    t.deepEqual(actual, expected);
    t.end();
})

//aks about deepEqual