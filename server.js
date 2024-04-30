'use strict'

//TODO: IMPLEMENT TEST DRIVEN DEVELOPMENT

// const http = require('http');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
// const ejs = require('ejs');

const imdbAPIKey = process.env.IMDB_API_KEY;
const watchModeAPIKey = process.env.WATCHMODE_API_KEY;

// implement ejs
// app.set('view engine', 'ejs');

// serve static assets middleware
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

// http.createServer(app).listen(port);

// var server = http.createServer(function(req, res) {
    //     res.end(ejs.render('HELLO!!'));
    // });
    
console.log(`movieFax running on port ${port}`);
app.listen(port);