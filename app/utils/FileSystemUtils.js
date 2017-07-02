const fs = require('fs');
const Promise = require('bluebird');
const fsp = Promise.promisifyAll(require('fs'));

export const readFile = file => fsp.readFileAsync(file);

