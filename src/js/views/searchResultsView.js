'use strict'

import * as controller from '../controller.js';
import View from './view.js';

class SearchResultsView extends View{
    _parentElement = null;
    _errorMessage = 'ERROR';
    _message = '';

    _generateMarkup = (json) => {  
        // console.log(json);
        const TITLE = json.name;
        const YEAR = json.year;
        const WATCHMODE_ID = json.id;
        
        return `
            <li class="nav-item">
              <span class="nav-link active movie-title" style="cursor:pointer" aria-current="page">
                <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#movie1"></use></svg>
                ${TITLE}, ${YEAR}
              </span>
            </li>
        `;
    }

    _getTitleSearch = async () => {
        // clearing previous data from the movie info container:
        (function clearInfoContainer() {
            searchList.innerHTML = '';
        })();
        
        // grab test data from the model through the controller
        // TODO: CAN'T ACCESS TITLESEARCH BEFORE INITIALIZATION
        let titleData = await controller.titleSearch();
        
        // OR grab data from WatchMode API...
        // then use forEach to populate search results:
        titleData.title_results.forEach(function (titleData) {
            
            // insert the returned model data into markup
            let markup = this._generateMarkup(titleData);
            searchList.insertAdjacentHTML('afterbegin', markup);
        });
    }
};


// const generateTitleMarkup = (json) => {    
//     // console.log(json);
//     const TITLE = json.name;
//     const YEAR = json.year;
//     const WATCHMODE_ID = json.id;
    
//     return `
//         <li class="nav-item">
//           <span class="nav-link active movie-title" style="cursor:pointer" aria-current="page">
//             <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#movie1"></use></svg>
//             ${TITLE}, ${YEAR}
//           </span>
//         </li>
//     `;
// }


// function hello(event){
//     let element = event.target;
//     if(element.tagName == 'SPAN' && element.classList.contains("movie-title")){
//         console.log("Hello!");
//     }
// }


// export const getTitleSearch = async () => {
//     //first, we clear previous data from the movie info container:
//     (function clearInfoContainer() {
//         searchList.innerHTML = '';
//     })();
    
//     // grab test data from the model through the controller
//     // TODO: CAN'T ACCESS TITLESEARCH BEFORE INITIALIZATION
//     let titleData = await controller.titleSearch();
    
//     // OR grab data from WatchMode API...
//     // then use forEach to populate search results:
//     titleData.title_results.forEach(function (titleData) {
        
//         // insert the returned model data into markup
//         let markup = generateTitleMarkup(titleData);
//         searchList.insertAdjacentHTML('afterbegin', markup);
//     });
// }

///////////////////// adding event listeners to search
// const searchButton = document.getElementById('search-button');
// const searchList = document.getElementById('search-list');
// const movieTitle = document.getElementById('movie-title');

// searchButton.addEventListener('click', function() {
//     getTitleSearch();
// });

// document.addEventListener( "click", hello );
// movieTitle.addEventListener('click', hello());

export default new SearchResultsView();