'use strict'

//TODO: IMPLEMENT TEST DRIVEN DEVELOPMENT

// const http = require('http');
const express = require('express');
const fetch = require('node-fetch');
const port = process.env.PORT || 3000;
const app = express();
// const ejs = require('ejs');

//////////// handling config variables
require('dotenv').config();
const watchModeAPIKey = process.env.WATCHMODE_API_KEY;

// implement ejs
// app.set('view engine', 'ejs');

// serve static assets middleware
app.use(express.static(__dirname));

// serve the application
// app.get('/', (req, res) => {
//     res.sendFile('index.html', {root: __dirname});
// });

// get search data
app.get('/search', async (req, res) => {
    const url = `https://api.watchmode.com/v1/title/345534/details/?apiKey=${watchModeAPIKey}`;

    const apiData = await fetch(url, { method: 'Get' })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
        });

    res.send(apiData);
})

// get title data
app.get('/title', (req, res) => {

})

////////////// TEST THIS FINALLY WORKS!!!
// const fs = require('fs');

// // const searchurl = `https://api.watchmode.com/v1/search/?apiKey=${watchModeAPIKey}&search_field=name&search_value=Star%20Wars`;
// // const titleurl = `https://api.watchmode.com/v1/title/1359293/details/?apiKey=${watchModeAPIKey}`;
// const sourcesurl = `https://api.watchmode.com/v1/title/1359293/details/?apiKey=${watchModeAPIKey}`;


// fetch(sourcesurl, { method: 'Get' })
//     .then((res) => res.json())
//     .then((json) => {
//         console.log(json);

//         let jsonData = JSON.stringify(json, null, 4);

//         fs.writeFile('testDataSources.json', jsonData, err => {
//             if (err) {
//                 console.error(err);
//             } else {
//                 console.log('File written successfully.');
//             }
//         });
//     });
//////////////// TEST

console.log(`movieFax running on port ${port}`);
app.listen(port);