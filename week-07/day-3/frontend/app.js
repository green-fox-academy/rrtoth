'use strict'

const express = require('express');
const path = require('path');
const PORT = 8080;
const app = express();

app.use(express.static('assets'));
app.use(express.json())

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
        res.status(400)
    }

    res.send(double)
});

app.get('/greeter/', (req, res) => {
    let message = {}

    if (req.query.name && req.query.title) {
        let name = req.query.name;
        let title = req.query.title;

        message["welcome_message"] = `Oh, hi there ${name}, my dear ${title}!`;
    } else if (!req.query.name && !req.query.title) {
        message["error"] = "Please provide a name and a title!";
        res.status(400)
    } else if (!req.query.name && req.query.title) {
        message["error"] = "Please provide a name!";
        res.status(400)
    } else if (req.query.name && !req.query.title) {
        message["error"] = "Please provide a title!";
        res.status(400)
    }

    res.send(message)
})

app.get('/appenda', (req, res) => {
    res.status(400)
    res.send()
})

app.get('/appenda/:appenda', (req, res) => {
    res.send({ appended: `${req.params.appenda}a` })
})

const sum = (input) => {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
        sum += i;
    }
    return sum;
}

const fact = (input) => {
    let fact = 1;
    for (let i = 1; i <= input; i++) {
        fact *= i;
    }
    return fact;
}

app.post('/dountil', (req, res) => {
    res.status(400)
    res.send({ result: "Please provide an action!" })
})


app.post('/dountil/:action', (req, res) => {
    if (req.body.until) {
        let until = req.body.until

        if (Number.isInteger(until)) {
            if (req.params.action) {
                if (req.params.action == 'factor') {
                    res.send({ result: fact(until) })
                } else if (req.params.action == 'sum') {
                    res.send({ result: sum(until) })
                } else {
                    res.status(400)
                    res.send({ result: "Please provide a valid action!" })
                }
            }
        } else {
            res.status(400)
            res.send({ result: "Please provide a valid number!" })
        }
    } else {
        res.status(400)
        res.send({ result: "Please provide a number!" })
    }
})

module.exports = app;

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});

