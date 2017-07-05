const Promise = require('bluebird');
const fsp = Promise.promisifyAll(require('fs'));

export const readFile = file => fsp.readFileAsync(file);

export const writeFile = (filePath, content) => fsp.writeFileAsync(filePath, content);

export const makeDirectory = path => fsp.mkdirAsync(path);
