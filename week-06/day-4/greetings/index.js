const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    req.query.name ? person = req.query.name : person = 'Guest'

    res.render('home', {
        person
    })
})

app.listen(port)