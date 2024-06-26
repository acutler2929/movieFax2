'use strict'

import * as controller from '../controller.js';
import View from './view.js';

class MovieInfoView extends View{
    _parentElement = null;
    _errorMessage = 'ERROR';
    _message = '';

    generateMarkup(object) {

        const TITLE = object.data.title.titleText.text;
        const RATING = object.data.title.ratingsSummary.aggregateRating;

        return `
        <h3>${TITLE}</h3>
        <p>Rating: ${RATING}</p>
        `;
    }
};

const generateMarkup = (object) => {
    //TODO: TWEAK THIS TO USE WATCHMODE JSON DATA

    console.log(object);
    const TITLE = object.data.title.titleText.text;
    const RATING = object.data.title.ratingsSummary.aggregateRating;

    return `
    <h3>${TITLE}</h3>
    <p>Rating: ${RATING}</p>
    `;
}
const getSearchTest = async () => {
    // //first, we clear previous data from the movie info container:
    // (function clearInfoContainer() {
    //     movieContainer.innerHTML = '';
    // })();

    // // grab test data from the model through the controller
    // let response = await controller.testMovie();
    
    // // OR grab data from WatchMode API...
    
    // // insert the returned model data into markup
    // let markup = generateMarkup(response);
    // movieContainer.insertAdjacentHTML('afterbegin', markup);
}

const getTitleSearch = async () => {
    //TODO: COMBINE GETTITLESEARCH AND GETMOVIEINFO

    //first, we clear previous data from the movie info container:
    (function clearInfoContainer() {
        movieContainer.innerHTML = '';
    })();

    // grab test data from the model through the controller
    let response = await controller.titleSearch();
    
    // OR grab data from WatchMode API...
    
    // insert the returned model data into markup
    let markup = generateMarkup(response);
    movieContainer.insertAdjacentHTML('afterbegin', markup);
}

const getMovieInfo = async () => {
    //TODO: COMBINE GETTITLESEARCH AND GETMOVIEINFO

    //first, we clear previous data from the movie info container:
    (function clearInfoContainer() {
        movieContainer.innerHTML = '';
    })();

    // grab test data from the model through the controller
    let response = controller.movieInfo();
    
    // OR grab data from WatchMode API...
    
    // insert the returned model data into markup
    let markup = generateMarkup(response);
    movieContainer.insertAdjacentHTML('afterbegin', markup);
}

const getMovieSources = async () => {
    //first, we clear previous data from the movie info container:
    (function clearInfoContainer() {
        movieContainer.innerHTML = '';
    })();

    // grab test data from the model through the controller
    let response = controller.movieSources();
    
    // OR grab data from WatchMode API...
    
    // insert the returned model data into markup
    let markup = generateMarkup(response);
    movieContainer.insertAdjacentHTML('afterbegin', markup);
}


//////////////// assigning event listeners and functions to buttons...
const testSearch = document.getElementById('click-search');
const testData = document.getElementById('click-data');
const movieInfo = document.getElementById('click-api');
const movieContainer = document.getElementById('movie-info');

testSearch.addEventListener('click', async function() {
    getSearchTest();  
});

testData.addEventListener('click', async function() {
    getDataTest();  
});

movieInfo.addEventListener('click', async function() {
    getAPITest();  
});

export default new MovieInfoView();