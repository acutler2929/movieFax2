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
    const TITLE = object.data.title.titleText.text;
    const RATING = object.data.title.ratingsSummary.aggregateRating;

    return `
    <h3>${TITLE}</h3>
    <p>Rating: ${RATING}</p>
    `;
}

//assigning event listeners to buttons...
const clickMe = document.getElementById('click-me');
const movieContainer = document.getElementById('movie-info-container');

clickMe.addEventListener('click', async function() {
    // console.log("view.js: Grabbing test data from model...");

    let response = await controller.testMovie();

    // console.log(`...and here it is:\n${JSON.stringify(response)}`);

    let markup = generateMarkup(response);
    movieContainer.insertAdjacentHTML('afterbegin', markup);
});

export default new MovieInfoView();