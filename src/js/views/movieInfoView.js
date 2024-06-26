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

const generateTitleMarkup = (json) => {
    //TODO: TWEAK THIS TO USE WATCHMODE JSON DATA

    console.log(json);
    const TITLE = json.title_results[9].name;
    const YEAR = json.title_results[9].year;

    return `
    <h3>${TITLE}</h3>
    <p>Year: ${YEAR}</p>
    `;
}

const generateInfoMarkup = (json) => {
    //TODO: TWEAK THIS TO USE WATCHMODE JSON DATA

    console.log(json);
    const TITLE = json.title;
    const YEAR = json.year;
    const SCORE = json.critic_score;
    const PLOT = json.plot_overview;

    return `
    <h3>${TITLE}</h3>
    <p>Year: ${YEAR}</p>
    <p>Score: ${SCORE}</p>
    <p>${PLOT}</p>
    `;
}

const generateSourcesMarkup = (json) => {
    //TODO: TWEAK THIS TO USE WATCHMODE JSON DATA

    console.log(json);
    const NAME = json[0].name;
    const FORMAT = json[0].format;
    const PRICE = json[0].price;

    return `
    <h3>${NAME}</h3>
    <p>Format: ${FORMAT}</p>
    <p>Price: ${PRICE}</p>
    `;
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
    let markup = generateTitleMarkup(response);
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
    let markup = generateInfoMarkup(response);
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
    let markup = generateSourcesMarkup(response);
    movieContainer.insertAdjacentHTML('afterbegin', markup);
}


//////////////// assigning event listeners and functions to buttons...
const testSearch = document.getElementById('test-search');
const testData = document.getElementById('test-info');
const movieInfo = document.getElementById('test-sources');
const movieContainer = document.getElementById('movie-info');

testSearch.addEventListener('click', async function() {
    getTitleSearch();
});

testData.addEventListener('click', async function() {
    getMovieInfo();
});

movieInfo.addEventListener('click', async function() {
    getMovieSources();
});

export default new MovieInfoView();