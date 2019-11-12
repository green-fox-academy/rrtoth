'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../main');

test('yondu test #1', (t) => {
    request(app)
        .get('/yondu')
        .query({ 'distance': 100.0, 'time': 10.0 })
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            let yonduResponse = {
                distance: 100.0,
                time: 10.0,
                speed: 10.0
            }

            t.error(err, 'no err')
            t.deepEqual(res.body, yonduResponse, 'correct response')
            t.end()
        });
})

test('yondu test #2', (t) => {
    request(app)
        .get('/yondu')
        .query({ 'distance': 0, 'time': 10.0 })
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
            let yonduResponse = {
                error: "Please enter a valid time and distance"
            }

            t.error(err, 'no err')
            t.deepEqual(res.body, yonduResponse, 'correct response')
            t.end()
        });
})

test('yondu test #3', (t) => {
    request(app)
        .get('/yondu')
        .query({ 'distance': 100.0, 'time': 0 })
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
            let yonduResponse = {
                error: "Please enter a valid time and distance"
            }

            t.error(err, 'no err')
            t.deepEqual(res.body, yonduResponse, 'correct response')
            t.end()
        });
})

test('yondu test #3', (t) => {
    request(app)
        .get('/yondu')
        .query({ 'time': 10.0 })
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
            let yonduResponse = {
                error: "Please enter a valid time and distance"
            }

            t.error(err, 'no err')
            t.deepEqual(res.body, yonduResponse, 'correct response')
            t.end()
        });
})

test('yondu test #4', (t) => {
    request(app)
        .get('/yondu')
        .query({ 'distance': 100.0 })
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
            let yonduResponse = {
                error: "Please enter a valid time and distance"
            }

            t.error(err, 'no err')
            t.deepEqual(res.body, yonduResponse, 'correct response')
            t.end()
        });
})

test('yondu test #5', (t) => {
    request(app)
        .get('/yondu')
        .query({ 'distance': 'asd', 'time': 10.0 })
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
            let yonduResponse = {
                error: "Please enter a valid time and distance"
            }

            t.error(err, 'no err')
            t.deepEqual(res.body, yonduResponse, 'correct response')
            t.end()
        });
})

test('yondu test #6', (t) => {
    request(app)
        .get('/yondu')
        .query({ 'distance': 100.0, 'time': 'asd' })
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
            let yonduResponse = {
                error: "Please enter a valid time and distance"
            }

            t.error(err, 'no err')
            t.deepEqual(res.body, yonduResponse, 'correct response')
            t.end()
        });
})

test('yondu test #7', (t) => {
    request(app)
        .get('/yondu')
        .query({ 'distance': 100.0, 'time': 0 })
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
            let yonduResponse = {
                error: "Please enter a valid time and distance"
            }

            t.error(err, 'no err')
            t.deepEqual(res.body, yonduResponse, 'correct response')
            t.end()
        });
})

test('yondu test #8', (t) => {
    request(app)
        .get('/yondu')
        .query({ 'distance': 0, 'time': 10.0 })
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
            let yonduResponse = {
                error: "Please enter a valid time and distance"
            }

            t.error(err, 'no err')
            t.deepEqual(res.body, yonduResponse, 'correct response')
            t.end()
        });
})