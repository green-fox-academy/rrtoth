'use strict'

const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.json())

app.get('/yondu/', (req, res) => {
    let response = {}

    if (req.query.distance && req.query.time) {
        let distance = parseFloat(req.query.distance);
        let time = parseFloat(req.query.time);
        let speed = 0;

        if (distance > 0 && time > 0) {
            speed = distance / time;

            response = {
                "distance": distance,
                "time": time,
                "speed": speed
            }

            res.status(200)
        } else {
            response['error'] = "Please enter a valid time and distance"
            res.status(400)
        }
    } else {
        res.status(400)
        response['error'] = "Please enter a valid time and distance"
    }

    res.send(response)
})






module.exports = app;

app.listen(PORT, () => {
    console.log(`The server is up and running on ${PORT}`);
});