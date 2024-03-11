'use strict'

//TODO: IMPLEMENT TEST DRIVEN DEVELOPMENT

const http = require('http');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

// implement ejs
app.set('view engine', 'ejs');

// serve static assets middleware
app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
});

http.createServer(app).listen(port);
console.log(`movieFax running on port ${port}`);