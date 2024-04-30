'use strict'

import * as model from './model.js';
import introView from './views/introView.js';
import loginView from './views/loginView.js';
import signUpView from './views/signUpView.js';
import searchResultsView from './views/searchResultsView.js';
import movieInfoView from './views/movieInfoView.js';

const controlMovies = {}

const controlSearchResults = {}

const controlLogin = {}

const controlSignup = {}


//assigning event listeners to buttons...
const clickMe = document.getElementById('click-me');

clickMe.addEventListener('click',  function() {
    console.log("Hello from controller.js!!!");
});