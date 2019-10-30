'use strict'

const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling/', (req, res) => {
    let double = {}

    if (req.query.input) {
        let input = req.query.input;

        double["received"] = input;
        double["result"] = input * 2;
    } else {
        double["error"] = "Please provide an input!"
    }

    res.send(double)
});


app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});