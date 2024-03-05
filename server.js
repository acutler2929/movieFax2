'use strict'

const http = require('http');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
});

http.createServer(app).listen(port);