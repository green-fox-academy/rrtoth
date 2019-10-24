const express = require('express')
const app = express()
const port = 3000;

app.set('view engine', 'ejs');

const todos = [
    'get up',
    'survive',
    'go back to bed',
]

app.get('/', (req, res) => res.render('todos', { todos: todos }))

app.listen(port)
