'use strict'

import * as model from './model.js';
import introView from './views/introView.js';
import loginView from './views/loginView.js';
import signUpView from './views/signUpView.js';
import searchResultsView from './views/searchResultsView.js';
import movieInfoView from './views/movieInfoView.js';

// const controlMovies = function () {
//     try {
//         //do stuff
//     } catch (err) {
//         console.error(err);
//     }
// };

// const controlSearchResults = function () {
//     try {
//         //do stuff
//     } catch (err) {
//         console.error(err);
//     }
// };

export const titleSearch = () => {
    return model.loadTitleSearch();
}

export const movieInfo = () => {
    return model.loadMovieInfo();
}

export const movieSources = () => {
    return model.loadSourcesInfo();
}

// const controlLogin = function () {
//     try {
//         //do stuff
//     } catch (err) {
//         console.error(err);
//     }
// };

// const controlSignup = function () {
//     try {
//         //do stuff
//     } catch (err) {
//         console.error(err);
//     }
// };


