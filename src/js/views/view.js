'use strict'

import * as controller from '../controller.js';
// import movieInfoView from './movieInfoView.js';

export default class View {
    render(data) {
        if(!data || (Array.isArray(data) && data.length == 0))
            return this.renerError();

        const markup = this._generateMarkup();

        this._clear()
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    update(data) {
        const newMarkup = this._generateMarkup();
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }

    renerError(message = this._errorMessage) {
        const markup = `
            <div class="error">
                <div>
                    <p>!!!error icon goes here!!!</p>
                </div>
                <p>${message}</p>
            </div>
        `;
    }
};

//TRY SENDING THIS TO MOVIEINFOVIEW...
// //assigning event listeners to buttons...
// const clickMe = document.getElementById('click-me');
// const movieContainer = document.getElementById('movie-info-container');

// clickMe.addEventListener('click', async function() {
//     console.log("view.js: Grabbing test data from model...");

//     let response = await controller.testMovie();

//     console.log(`...and here it is:\n${JSON.stringify(response)}`);
//     console.log(response.data.title.titleText.text);

//     let markup = movieInfoView.generateMarkup(response);
//     movieContainer.insertAdjacentHTML(markup);
// });