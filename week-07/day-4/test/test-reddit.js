'use strict'

const test = require('tape');
const request = require('supertest');
const app = require('../main');

test('hello endpoint', (t) => {
    request(app)
        .get('/hello')
        .expect(200)
        .expect('Content-Type', 'text/html; charset=utf-8')
        .end((err, res) => {
            t.error(err, 'no err')
            t.equal(res.text, "Hello World!", 'correct response')
            t.end()
        });
});

test('posts endpoint / get', (t) => {
    request(app)
        .get('/posts')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            let postsResponse = [{ "pId": 1, "title": "test", "url": "test", "timestamp": 12345, "score": 13, "oId": 2 }, { "pId": 2, "title": "test", "url": "test", "timestamp": 12345, "score": 8, "oId": 1 }, { "pId": 3, "title": "zvzk", "url": "ubzkjv", "timestamp": 2345678, "score": 0, "oId": 0 }, { "pId": 4, "title": "vzvgkjbh", "url": "ttrfuvti", "timestamp": 123456789, "score": 0, "oId": 0 }]
            t.error(err, 'no err')
            t.deepEqual(res.body, postsResponse, 'correct response')
            t.end()
        });
});

test('posts endpoint / post', (t) => {
    request(app)
        .post('/posts')
        .send({
            "title": "asd",
            "url": "das"
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
            let postsResponse = [{ "pId": 28, "title": "asd", "url": "das", "timestamp": Math.floor(Date.now() / 1000), "score": 0, "oId": 0 }]
            t.error(err, 'no err')
            t.deepEqual(res.body, postsResponse, 'correct response')
            t.end()
        });
});