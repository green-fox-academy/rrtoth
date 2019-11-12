'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
    request(app)
        .get('/groot/?message=asd')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            let grootResponse = {
                "received": "asd",
                "translated": "I am Groot!"
            }

            t.error(err, 'no err')
            t.deepEqual(res.body, grootResponse, 'correct response')
            t.end()
        });
});


// Write a test where you check:
// With giving a parameter the status is ok,
// and the given response is the same as expected
// Without giving a parameter the status is not ok,
// and the given error response is the same as expected