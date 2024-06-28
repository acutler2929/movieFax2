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



const generateInfoMarkup = (json) => {
    // console.log(json);
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
    // console.log(json);
    const NAME = json[0].name;
    const FORMAT = json[0].format;
    const PRICE = json[0].price;

    return `
    <h3>${NAME}</h3>
    <p>Format: ${FORMAT}</p>
    <p>Price: ${PRICE}</p>
    `;
}

export const getMovieInfo = async (movieData) => {
    //first, we clear previous data from the movie info container:
    // (function clearInfoContainer() {
    //     movieContainer.innerHTML = '';
    // })();

    // grab test data from the model through the controller
    // let movieData = await controller.movieInfo();
    
    // OR grab data from WatchMode API...
    
    // insert the returned model data into markup
    let markup = generateInfoMarkup(movieData);
    movieContainer.insertAdjacentHTML('afterbegin', markup);
}

export const getMovieSources = async (sourcesData) => {
    //first, we clear previous data from the movie info container:
    // (function clearInfoContainer() {
    //     movieContainer.innerHTML = '';
    // })();

    // grab test data from the model through the controller
    // let sourcesData = await controller.movieSources();
    
    // OR grab data from WatchMode API...
    
    // insert the returned model data into markup
    let markup = generateSourcesMarkup(sourcesData);
    movieContainer.insertAdjacentHTML('afterbegin', markup);
}


//////////////// assigning event listeners and functions to buttons...
const testData = document.getElementById('test-info');
const movieInfo = document.getElementById('test-sources');
const movieContainer = document.getElementById('movie-info');

// testData.addEventListener('click', async function() {
//     getMovieInfo();
// });

// movieInfo.addEventListener('click', async function() {
//     getMovieSources();
// });

// export default new MovieInfoView();