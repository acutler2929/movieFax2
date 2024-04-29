'use strict'

import { TIMEOUT_SEC } from './config.js';

const timeout = function(sec) {
    // TODO: return an error message after ten seconds of loading
}

export const APIHandler = async function(url) {
    const response = await axios.get(url);
    return response;
}