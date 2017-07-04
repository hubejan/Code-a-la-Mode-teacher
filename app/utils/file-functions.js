const Promise = require('bluebird');

// turns off forgotten return warning in Bluebird
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

const fs = Promise.promisifyAll(require('fs'));

// this function accesses the file system
// it returns a promise

const getAllFiles = (dir) => {
  return fs.readdirAsync(dir)
  .then(fileNamesArr => {
    const fileStatPromises = fileNamesArr.map(fileName => {
      return fs.statAsync(`${dir}/${fileName}`)
      .then(stats => {
        const file = {};
        file.filePath = `${dir}/${fileName}`;
        file.isDirectory = !stats.isFile();
        if (stats.isDirectory() === true) {
          return getAllFiles(file.filePath)
          .then(fileNamesSubArr => {
            file.files = fileNamesSubArr;
            return file;
          })
          .catch(error => console.error(error));
        }
        return file;
      });
    });
    return Promise.all(fileStatPromises);
  });
};

const getFileName = (filePath) => filePath.replace(/^.*[\\\/]/, '');

module.exports = {
  getAllFiles,
  getFileName
};
