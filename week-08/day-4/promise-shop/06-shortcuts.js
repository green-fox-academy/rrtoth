'use strict';

let promise = Promise.resolve('asd')

promise = Promise.reject(new Error('asdf'))

promise.catch((err) => { console.log(err.message) })