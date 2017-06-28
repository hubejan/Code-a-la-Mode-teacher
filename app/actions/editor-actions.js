// @flow
import { ipcRenderer } from 'electron';

export const EDITOR_CHANGE = 'EDITOR_CHANGE';
export const editorChange = (contents: string) => ({ type: EDITOR_CHANGE, contents });

type actionType = {
  type: string
};

export function changeEditor(contents: string) {
  return (dispatch: (action: actionType) => void) => {
    dispatch(editorChange(contents));
  };
}

