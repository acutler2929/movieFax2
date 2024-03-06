'use strict'

import View from './view.js';

class IntroView extends View{
    _parentElement = null;
    _errorMessage = 'ERROR';
    _message = '';

    _generateMarkup() {
        return `
        <h3>MARKUP!!!</h3>
        `;
    }
};

export default new IntroView();