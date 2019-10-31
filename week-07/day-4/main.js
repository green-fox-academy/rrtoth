const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;
const env = require('dotenv').config();

app.use(express.json());

let conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

//gets date 10/31/2019 12:24:18 PM format
// const printCurrentDate = (timestamp) => {
//     let date = new Date(timestamp);
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//     let daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//     return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${daysOfTheWeek[date.getDay()]} ${date.toLocaleTimeString()}`
// }

app.get('/posts', (req, res) => {
    conn.query('SELECT * FROM posts;', (err, rows) => {
        if (err) {
            console.log(err.toString());
        }
        res.send(rows);
    });
});

app.post('/posts/:post', (req, res) => {
    let input = req.body.input
    let date = new Date(timestamp)
    let post = `INSERT INTO posts(title, url, timestamp, score, oID) VALUES (${input.title}, ${input.url}, ${date}, 0, 0);`

    conn.query(post, (err, result) => {
        if (err) throw err;
    })
})

app.post('/posts/:id/:action', (req, res) => {
    let action = req.params.action
    let id = parseInt(req.params.id)

    if (action) {
        let score

        conn.query(`SELECT pId FROM posts WHERE pId = ${id}`, (err, result) => {
            if (err) throw err;
            score = result.pId;
            res.send('ok')
        })

        if (action == 'upvote') {
            conn.query(`UPDATE posts SET score = ${score + 1} WHERE pId = ${id}`, (err, result) => {
                if (err) throw err;
                // conn.query('SELECT * FROM posts', (err, result) => {
                //     if (err) throw err;
                //     res.send(result)
                // })
                res.send('success')
            })
        } else if (action == 'downvote') {
            conn.query(`UPDATE posts SET score = ${score - 1} WHERE pId = ${id}`, (err, result) => {
                res.send('success')
            })
        } else {
            res.send({ error: 'wrong action' })
        }
    }
})

app.listen(PORT);