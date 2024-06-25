'use strict'

//TODO: IMPLEMENT TEST DRIVEN DEVELOPMENT

// const http = require('http');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
// const ejs = require('ejs');

const watchModeAPIKey = process.env.WATCHMODE_API_KEY;

// implement ejs
// app.set('view engine', 'ejs');

// serve static assets middleware
app.use(express.static(__dirname));

// serve the application
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});

// get search data
app.get('/search', async (req, res) => {
    let apiData;

    let url = `https://api.watchmode.com/v1/title/345534/details/?apiKey=${watchModeAPIKey}`;

    apiData = await fetch(url, { method: 'Get' })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
        });

    // res.send(apiData);
})

// get title data
app.get('/title', (req, res) => {

})

console.log(`movieFax running on port ${port}`);
app.listen(port);