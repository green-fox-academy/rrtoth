'use strict'

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
    let response = {}

    if (req.query.message) {
        response = {
            "received": req.query.message,
            "translated": "I am Groot!"
        }
        res.status(200)
    } else {
        response = {
            "error": "I am Groot!"
        }
        res.status(400)
    }

    res.send(response)
});

module.exports = app;