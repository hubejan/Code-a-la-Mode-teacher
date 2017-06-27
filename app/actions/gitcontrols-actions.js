import { readFile } from '../utils/FileSystemUtils';

const Git = require('nodegit');

// export const GOT_USERNAME = 'GOT_USERNAME';
// export const OPEN_FILE = 'OPEN_FILE';

type actionType = {
  type: string
};

// export const gotUsername = username => ({ type: GOT_USERNAME, username });
// export const openFile = contents => ({ type: OPEN_FILE, contents });

// export function getUsername() {
//   return (dispatch: (action: actionType) => void) => {
//     Username().then(name => dispatch(gotUsername(name)))
//       .catch(console.error);
//   };
// }
// export function loadFile(selectedFile) {
//   console.log('loadFile selecteeFile: ', selectedFile);
//   return (dispatch: (action: actionType) => void) => {
//     readFile(selectedFile.filePath).then(contents => {
//       const text = contents.toString();
//       console.log('read file, contents are: ', text);
//       return dispatch(openFile(text));
//     })
//       .catch(console.error);
//   };
// }

export function cloneRemoteRepository(repositoryLink: string) {
  Git.Clone(repositoryLink, 'testRepo')
    .then(repository => {
      console.log(`This should be a Repository object ${repository}`);
    })
    .catch(error => {
      console.error(error);
    });
}
