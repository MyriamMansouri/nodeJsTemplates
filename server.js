const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req,res) => {
    res.render('home.hbs', {
        pageTitle: 'Myriam Mansouri'
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})