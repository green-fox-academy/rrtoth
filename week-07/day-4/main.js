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

app.get('/hello', (req, res) => {
    res.send("Hello World!");
});

app.get('/posts', (req, res) => {
    conn.query('SELECT * FROM posts\
                LEFT JOIN users\
                    ON users.pID;', (err, rows) => {
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
        if (err) {
            console.log(err.toString());
        }
        res.send('ok')
    })
})

app.post('/posts/:id/:action', (req, res) => {
    let id = parseInt(req.params.id.toString())

    if (req.params.action) {
        let action = req.params.action

        conn.query(`SELECT * FROM posts WHERE pId = ${id}`, (err, result) => {
            if (err) {
                console.log(err);
            }

            let score = parseInt((result[0].pId).toString())
            console.log(score)
            if (action == 'upvote' || action == 'downvote') {
                if (action == 'upvote') {
                    conn.query(`UPDATE posts SET score = ${score + 1} WHERE pId = ${id}`, (err, result) => {
                        if (err) {
                            console.log(err.toString());
                        }
                        conn.query('SELECT * FROM posts', (err, result) => {
                            if (err) throw err;
                            res.send(result)
                        })
                    })
                } else if (action == 'downvote') {
                    conn.query(`UPDATE posts SET score = ${score - 1} WHERE pId = ${id}`, (err, result) => {
                        if (err) {
                            console.log(err.toString());
                        }
                        conn.query('SELECT * FROM posts', (err, result) => {
                            if (err) throw err;
                            res.send(result)
                        })
                    })
                }
                // conn.query(`SELECT * FROM posts WHERE pId = ${id}`, (err, result) => {
                //     if (err) {
                //         console.log(err);
                //     }
                //     let vote = parseInt((result[0].vote).toString())
                //     conn.query(`UPDATE users SET vote = ${vote + 1} WHERE oID`)
                // })
            } else {
                res.send('wrong action')
            }
        })
    }
})

app.listen(PORT);