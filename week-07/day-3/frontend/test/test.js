'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../app');

test('doubling test #1', (t) => {
    request(app)
        .get('/doubling')
        .query({ "input": 10 })
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            let doublingResponse = { 'received': '10', 'result': 20 }
            t.error(err, 'no err')
            t.deepEqual(res.body, doublingResponse, 'correct response')
            t.end()
        });
})

test('doubling test #2', (t) => {
    request(app)
        .get('/doubling')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
            let doublingResponse = { "error": "Please provide an input!" }
            t.error(err, 'no err')
            t.deepEqual(res.body, doublingResponse, 'correct response')
            t.end()
        });
})
