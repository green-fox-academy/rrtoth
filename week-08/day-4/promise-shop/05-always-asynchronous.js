'use strict';

let promise = new Promise((res, rej) => {
    res('PROMISE VALUE');
}).then(console.log)

console.log('MAIN PROGRAM')