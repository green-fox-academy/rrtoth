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


//gets current timestamp
var date = new Date(1572521058623);
// var timestamp = date.getTime()

// var cdate = date.getDate();
// var month = date.getMonth();
// var year = date.getFullYear();

9007199254740991

console.log(date)

//gets date MM
const printCurrentDate = (timestamp) => {
    let date = new Date(timestamp);

    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
}
console.log(printCurrentDate(date))

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