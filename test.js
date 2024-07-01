'use strict'

import * as controller from './src/js/controller.js';
import * as model from './src/js/model.js';
import introView from './src/js/views/introView.js';
import loginView from './src/js/views/loginView.js';
import signUpView from './src/js/views/signUpView.js';
import searchResultsView from './src/js/views/searchResultsView.js';
import * as movieInfoView from './src/js/views/movieInfoView.js';

var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
