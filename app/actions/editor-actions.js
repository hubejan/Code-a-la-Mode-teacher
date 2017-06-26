// @flow
import { ipcRenderer } from 'electron';

export const EDITOR_CHANGE = 'EDITOR_CHANGE';
export const editorChange = (contents: string) => ({ type: EDITOR_CHANGE, contents });

type actionType = {
  type: string
};

export function changeEditor(contents: string) {
  ipcRenderer.send('editor-change', contents);
  console.log('changeEditor contents: ', contents);
  return (dispatch: (action: actionType) => void) => {
    dispatch(editorChange(contents));
  };
}
