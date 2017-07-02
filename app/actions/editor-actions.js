// @flow
import { selectedFileType } from './filetree-actions';

export const EDITOR_CHANGE = 'EDITOR_CHANGE';
export const LOAD_OPENED_FILE = 'LOAD_OPENED_FILE';
export const editorChange = (contents: Array<string>) => ({ type: EDITOR_CHANGE, contents });

type actionType = {
  type: string
};

export function changeEditor(contents: Array<string>) {
  return (dispatch: (action: actionType) => void) => {
    dispatch(editorChange(contents));
  };
}

// TODO: DRY up this code
// ====================================================================

// Load a previously opened file (need to parse out the filePath here)
export const loadFileFromTree = (selectedFile: selectedFileType, currentOpenFiles: Array<string>, currentEditorValues: Array<string>) => (dispatch: *) => {
  const newEditorState = {
    contents: currentEditorValues, // Array of file contents still the same
    currentOpenFiles: currentOpenFiles, // Array of opened files still the same
    selectedFileIndex: currentOpenFiles.indexOf(selectedFile.filePath) // Index of already-opened file changes
  };

  dispatch({ type: LOAD_OPENED_FILE, newEditorState });
};

// Load a file from the tab (only has reference to filePath)
export const loadFileFromTab = (selectedFilePath: string, currentOpenFiles: Array<string>, currentEditorValues: Array<string>) => (dispatch: *) => {
  const newEditorState = {
    contents: currentEditorValues, // Array of file contents still the same
    currentOpenFiles: currentOpenFiles, // Array of opened files still the same
    selectedFileIndex: currentOpenFiles.indexOf(selectedFilePath) // Index of already-opened file changes
  };

  dispatch({ type: LOAD_OPENED_FILE, newEditorState });
};

