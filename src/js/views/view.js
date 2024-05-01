'use strict'

import * as controller from '../controller.js';

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

//assigning event listeners to buttons...
const clickMe = document.getElementById('click-me');

clickMe.addEventListener('click',  function() {
    console.log("View.js: Grabbing test data from model...");

    let response = controller.testMovie();

    console.log(`...and here it is:\n${response}`);
});