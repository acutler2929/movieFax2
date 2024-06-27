'use strict'

import * as controller from '../controller.js';
import View from './view.js';

class SearchResultsView extends View{
    _parentElement = null;
    _errorMessage = 'ERROR';
    _message = '';

    _generateMarkup() {
        return `
        <h3>MARKUP!!!</h3>
        `;
    }
};


const generateTitleMarkup = (json) => {    
    console.log(json);
    const TITLE = json.name;
    const YEAR = json.year;
    
    return `
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">
            <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#movie1"></use></svg>
            ${TITLE}, ${YEAR}
          </a>
        </li>
    `;
}

const getTitleSearch = async () => {
    //first, we clear previous data from the movie info container:
    (function clearInfoContainer() {
        searchList.innerHTML = '';
    })();

    // grab test data from the model through the controller
    let titleData = await controller.titleSearch();
    
    // OR grab data from WatchMode API...
    // then use forEach to populate search results:
    titleData.title_results.forEach(function (titleData) {

        // insert the returned model data into markup
        let markup = generateTitleMarkup(titleData);
        searchList.insertAdjacentHTML('afterbegin', markup);
    });
}

///////////////////// adding event listeners to search
const searchButton = document.getElementById('search-button');
const searchList = document.getElementById('search-list');

searchButton.addEventListener('click', async function() {
    getTitleSearch();
});

export default new SearchResultsView();