import Username from 'username';
import { ipcRenderer } from 'electron';
import { readFile } from '../utils/FileSystemUtils';

export const GOT_USERNAME = 'GOT_USERNAME';
export const OPEN_FILE = 'OPEN_FILE';
export const XMIT_FILE = 'XMIT_FILE';

type actionType = {
  type: string
};

export const gotUsername = username => ({ type: GOT_USERNAME, username });
export const openFile = newEditorState => ({ type: OPEN_FILE, newEditorState });
export const xmitFile = contents => ({ type: XMIT_FILE, contents });


export function getUsername() {
  return (dispatch: (action: actionType) => void) => {
    Username().then(name => dispatch(gotUsername(name)))
      .catch(console.error);
  };
}

export function loadFile(selectedFile, currentOpenFiles, currentEditorValues, selectedFileIndex) {
  return (dispatch: (action: actionType) => void) => {
    const loadedFilePath = selectedFile.filePath;

    // Do not try to load a file already inside the Editor
    if (currentOpenFiles.includes(loadedFilePath)) {
      // ADD CODE TO DISPATCH ACTION TO OPEN THE UPDATED VALUE OF THE FILE
      return;
    }

    console.log(`SELECTED FILE INDEX BEFORE: ${selectedFileIndex} AFTER ${selectedFileIndex + 1}`);
    // Opening a new file, load it into the Editor
    readFile(selectedFile.filePath)
      .then(contents => {
        const allOpenFiles = currentOpenFiles.concat(loadedFilePath);
        const text = contents.toString();
        const newEditorValues = currentEditorValues.concat([text]);
        const newEditorState = {
          contents: newEditorValues,
          currentOpenFiles: allOpenFiles,
          selectedFileIndex: selectedFileIndex + 1
        };
        return dispatch(openFile(newEditorState));
      })
      .catch(console.error);
  };
}

export function reqAndXmitFile(filePath) {
  readFile(filePath)
    .then(contents => {
      const text = contents.toString();
      console.log('got file at: ', filePath, '. First 40 chars: ', text.substring(0, 40));

      return ipcRenderer.send('xmit-file', text);
    })
    .catch(console.error);
}
