export const GOT_USERNAME = 'GOT_USERNAME';

type actionType = {
  type: string
};

export const gotUsername = username => ({ type: GOT_USERNAME, username });
const username = require('username');

export function getUsername() {
  console.log('getting username');
  return (dispatch: (action: actionType) => void) => {
    username().then(name => dispatch(gotUsername(name)))
      .catch(console.error);
  };
}

// export const driverSave = (filePath, code, isNewFile) => (dispatch) => {
//   return writeFile(filePath, code)
//     .then(() => {
//       const file = { filePath, text: code }
//       if (isNewFile) dispatch(saveNewFile(file))
//       dispatch(updateOpenFiles(file))
//       return file
//     })
//     .then(file => dispatch(setActiveFileAndReturnFileAndIndex(file)))
// }
