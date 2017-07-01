import Username from 'username';
import { readFile } from '../utils/FileSystemUtils';
import { ipcRenderer } from 'electron';

export const GOT_USERNAME = 'GOT_USERNAME';
export const OPEN_FILE = 'OPEN_FILE';
export const XMIT_FILE = 'XMIT_FILE';

type actionType = {
  type: string
};

export const gotUsername = username => ({ type: GOT_USERNAME, username });
export const openFile = contents => ({ type: OPEN_FILE, contents });
export const xmitFile = contents => ({ type: XMIT_FILE, contents });


export function getUsername() {
  return (dispatch: (action: actionType) => void) => {
    Username().then(name => dispatch(gotUsername(name)))
      .catch(console.error);
  };
}
export function loadFile(selectedFile, currentOpenFiles, currentEditorValues) {
  return (dispatch: (action: actionType) => void) => {
    const loadedFilePath = selectedFile.filePath;

    // Do not try to load a file already inside the Editor
    if (currentOpenFiles.includes(loadedFilePath)) {
      return;
    }

    // Opening a new file, load it into the Editor
    readFile(selectedFile.filePath)
      .then(contents => {
        currentOpenFiles.push(loadedFilePath);
        const text = contents.toString();
        const newEditorValues = currentEditorValues.concat([text]);
        return dispatch(openFile(newEditorValues));
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
