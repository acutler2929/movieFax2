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

// TODO: SEND TO SERVER AND CALL WATCHMODE API
export const loadTitleSearch = () => {
    // loads test data for now...
    return fetch('./testDataSearch.json')
        .then((response) => response.json())
        .then((response) => {
            return response;
        });
};

// TODO: SEND TO SERVER AND CALL WATCHMODE API
export const loadMovieInfo = () => {
    // loads test data for now...
    return fetch('./testDataDetails.json')
        .then((response) => response.json())
        .then((response) => {
            return response;
        });
};

// TODO: SEND TO SERVER AND CALL WATCHMODE API
export const loadSourcesInfo = () => {
    // loads test data for now...
    return fetch('./testDataSources.json')
        .then((response) => response.json())
        .then((response) => {
            return response;
        });
}