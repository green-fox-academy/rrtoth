'use strict';

let promise = new Promise((fulfill, reject) => {
    setTimeout(() => {
        fulfill('FULFILLED!')
    }, 300);
}).then((res) => {
    console.log(res)
})
