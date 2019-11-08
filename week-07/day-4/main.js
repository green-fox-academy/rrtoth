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
    multipleStatements: true
});

conn.connect((err) => {
    err ? (console.log(err), res.status(500)) : console.log('Connected!');
});

//hi
app.get('/hello', (req, res) => {
    res.send("Hello World!");
});

//see all posts
app.get('/posts', (req, res) => {
    conn.query('SELECT * FROM posts;', (err, rows) => {
        err ? (console.log(err), res.status(500)) : (res.set('Content-Type: application/json'), res.send(rows));
    });
});

//get a specific bost by ID
app.get('/post/:id', (req, res) => {
    let id = req.params.id;

    conn.query(`SELECT * FROM posts WHERE pId = ${id}`, (err, row) => {
        err ? (console.log(err), res.status(500)) : (res.set('Content-Type: application/json'), res.send(row));
    })
})

//post a new post
app.post('/posts', (req, res) => {
    let title = req.body.title;
    let url = req.body.url;
    let date = Math.floor(Date.now() / 1000);

    let post = `INSERT INTO posts (title, url, timestamp, score, oID) 
                    VALUES ("${title}", "${url}", ${date}, 0, 0);
                SELECT * FROM posts 
                    ORDER BY pId DESC 
                    LIMIT 1;`;

    conn.query(post, (err, row) => {
        err ? (console.log(err), res.status(500)) : (res.set('Content-Type: application/json'), res.send(row[1]));
    })
})

//up- and downvote posts
app.put('/posts/:id/:action', (req, res) => {
    let id = req.params.id;
    let action = req.params.action;

    if (action == 'upvote' || action == 'downvote') {
        let newScore = "";
        action == 'upvote' ? newScore = 'score + 1' : newScore = 'score - 1';

        let post = `UPDATE posts 
                        SET score = ${newScore}
                        WHERE pId = ${id};
                    SELECT * FROM posts 
                        WHERE pId = ${id};`

        conn.query(post, (err, row) => {
            err ? (console.log(err), res.status(500)) : (res.set('Content-Type: application/json'), res.send(row[1]));
        })
    } else {
        res.send('wrong action')
    }
})

app.listen(PORT);