'use strict'

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