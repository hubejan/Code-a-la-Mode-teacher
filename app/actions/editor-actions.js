// @flow
import { ipcRenderer } from 'electron';

export const EDITOR_CHANGE = 'EDITOR_CHANGE';

export function changeEditor(value: string) {
  ipcRenderer.send('editor-change', value);

  return {
    type: EDITOR_CHANGE,
    newValue: value
  };
}
