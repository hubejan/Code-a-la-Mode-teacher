// @flow
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

type selectedFileType = {
  filePath: string,
  isDirectory: boolean
}

export const loadFile = (
  selectedFile: selectedFileType, currentOpenFiles: Array<string>,
  currentEditorValues: Array<string>, selectedFileIndex: number) => (dispatch: *) => {
    const newEditorState = {
      contents: currentEditorValues, // Contents still the same
      currentOpenFiles: currentOpenFiles, // Opened files still the same
      selectedFileIndex: currentOpenFiles.indexOf(selectedFile.filePath) // Index from already opened
    };

    dispatch({
      type: LOAD_OPENED_FILE,
      newEditorState
    });
}

