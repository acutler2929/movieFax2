'use strict'

import * as config from './config.js'

const searchUrl = config.IMDB_SEARCH_MOVIE_URL;
const movieUrl = config.IMDB_SELECTED_MOVIE_DATA_URL;

export const state = {
    movie: {},
    search: {
        query: '',
        results: [],
    },
};

const createSearchObject = function(data) {
    const { searchRes } = data.data;
    return {
        fieldOne: '???',
        fieldTwo: '???',
        fieldThree: '???',
    };
};

const createMovieObject = function(data) {
    const { movie } = data.data;
    return {
        fieldOne: '???',
        fieldTwo: '???',
        fieldThree: '???',
    };
};

export const loadSearchResults = {
    // perhaps an async function with regenerator runtime?
    // maybe send an AJAX call to the server file?
};

export const loadMovieInfo = {
    // perhaps an async function with regenerator runtime?
    // maybe send and AJAX call to the server file?
};