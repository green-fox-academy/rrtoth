const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
const env = require('dotenv').config();

app.use(express.json());
/*
let conn = mysql.createConnection ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});*/

//gets date 10/31/2019 12:24:18 PM format
const printCurrentDate = (timestamp) => {
    let date = new Date(timestamp);
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${daysOfTheWeek[date.getDay()]} ${date.toLocaleTimeString()}`
}


/*
app.get('/', function (req, res) {
    conn.query(`SELECT * FROM ${database};`, (err, rows) => {
        console.log(rows);
        if (err) {
            console.log(err.toString());
        }
        res.send(rows);
    });
});

app.listen(PORT);
*/