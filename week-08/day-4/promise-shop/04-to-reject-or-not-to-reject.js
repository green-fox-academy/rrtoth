'use strict';

const onReject = (err) => {
    console.log(err.message)
}

let promise = new Promise((res, rej) => {
    res('I FIRED')
    rej(new Error('I DID NOT FIRE'))
}).then(console.log, onReject)