const Promise = require('bluebird');
const fsp = Promise.promisifyAll(require('fs'));

export const readFile = file => fsp.readFileAsync(file);

export const writeFile = file => fsp.writeFileAsync(file);

export const makeDirectory = path => fsp.mkdirAsync(path);
