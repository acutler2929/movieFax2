'use strict'

import * as model from './model.js';
import introView from './views/introView.js';
import loginView from './views/loginView.js';
import signUpView from './views/signUpView.js';
import searchResultsView from './views/searchResultsView.js';
import * as movieInfoView from './views/movieInfoView.js';

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

export const searchMovieData = () => {
    let movieData = {};
    let sources = {};
    let details = {};

    movieData = model.prepareMovieData();
    details = movieData.movieDetails;
    sources = movieData.sourcesData;

    movieInfoView.getMovieInfo(details);
    movieInfoView.getMovieSources(sources);
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

const init = () => {
    
    const titleSearch = (event) => {
        console.log(event)
        let element = event.target;

        // TODO: maybe use parentElement???
        if(element.tagName == 'BUTTON' && element.id == 'search-button'){
            console.log("You clicked search!");
        }
    }

    // assign event handlers
    document.addEventListener('click', titleSearch);
}

init();
