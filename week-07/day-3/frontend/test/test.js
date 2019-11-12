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

test('greeter test #1', (t) => {
    request(app)
        .get('/greeter')
        .query({ name: 'asd', title: 'dsa' })
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            let greeterResponse = { welcome_message: 'Oh, hi there asd, my dear dsa!' };

            t.error(err, 'no err')
            t.deepEqual(res.body, greeterResponse, 'correct response')
            t.end()
        });
})

test('greeter test #2', (t) => {
    request(app)
        .get('/greeter')
        .query({ name: 'asd' })
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
            let greeterResponse = { error: 'Please provide a title!' };

            t.error(err, 'no err')
            t.deepEqual(res.body, greeterResponse, 'correct response')
            t.end()
        });
})

test('greeter test #3', (t) => {
    request(app)
        .get('/greeter')
        .query({ title: 'dsa' })
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
            let greeterResponse = { error: 'Please provide a name!' };

            t.error(err, 'no err')
            t.deepEqual(res.body, greeterResponse, 'correct response')
            t.end()
        });
})

test('greeter test #4', (t) => {
    request(app)
        .get('/greeter')
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
            let greeterResponse = { error: 'Please provide a name and a title!' };

            t.error(err, 'no err')
            t.deepEqual(res.body, greeterResponse, 'correct response')
            t.end()
        });
})

test('appenda test #1', (t) => {
    request(app)
        .get('/appenda')
        .expect(400)
        .end((err, res) => {
            t.error(err, 'no err')
            t.deepEqual(res.body, {}, 'correct response')
            t.end()
        });
})

test('appenda test #2', (t) => {
    request(app)
        .get('/appenda/kuty')
        .expect(200)
        .end((err, res) => {
            let appendaResponse = { appended: 'kutya' }
            t.error(err, 'no err')
            t.deepEqual(res.body, appendaResponse, 'correct response')
            t.end()
        });
})
