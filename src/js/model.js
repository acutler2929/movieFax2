'use strict'

// import { response } from 'express';
import * as config from './config.js'

const searchUrl = config.IMDB_SEARCH_MOVIE_URL;
const movieUrl = config.IMDB_SELECTED_MOVIE_DATA_URL;

let movieData;

export const state = {
    selectedMovie: {},
    searchItems: {
        query: '',
        results: [],
    },
};

// const createSearchObject = function(data) {
//     const { searchRes } = data.data;
//     return {
//         fieldOne: "search field one",
//         fieldTwo: "search field two",
//         fieldThree: "search field three",
//     };
// };

// const createMovieObject = function(data) {
//     const { movie } = data.data;
//     return {
//         fieldOne: "movie field one",
//         fieldTwo: "movie field two",
//         fieldThree: "movie field three",
//     };
// };

export const loadTitleSearch = () => {
    // perhaps an async function with regenerator runtime?
    // maybe send an AJAX call to the server file?
};

export const loadMovieInfo = () => {
    //use fetch get request to Watchmode, send to server for api key
};

export const loadSourcesInfo = () => {
    // load sources from Watchmode
}

export const loadSearchTest = () => {
    fetch('/search', { method: 'GET' })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
        });
}

export const loadMovieTest = async () => {
    return fetch('./testData.json')
        .then((response) => response.json())
        .then((response) => {
            // movieData = response;
            // console.log('model.js: here is movie data:\n', movieData);
            return response;
        });
    
    // const response = await fetch('./testData.json');
    // movieData = await response.json();
    // console.log(`model.js: here is movieData:\n${movieData}`);
    // return movieData;
}