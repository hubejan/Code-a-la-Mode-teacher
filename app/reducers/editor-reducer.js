// @flow
import { EDITOR_CHANGE, LOAD_OPENED_FILE, CLEAR_EDITOR } from '../actions/editor-actions';
import { OPEN_FILE } from '../actions/filetree-actions';

export type editorStateType = {
  contents: Array<string>,
  currentOpenFiles: Array<string>,
  selectedFileIndex: number
};

type actionType = {
  type: string,
  newEditorState?: editorStateType,
  contents?: Array<string>,
  currentOpenFiles?: Array<string>,
  selectedFileIndex?: number
};

const defaultEditorState = {
  contents: [],
  currentOpenFiles: [],
  selectedFileIndex: -1
};

export default function editorValue(state: editorStateType = defaultEditorState,
                                    action: actionType) {
  switch (action.type) {
    case EDITOR_CHANGE:
      return { ...state, contents: action.contents };
    case OPEN_FILE:
      return action.newEditorState;
    case LOAD_OPENED_FILE:
      return action.newEditorState;
    case CLEAR_EDITOR:
      return defaultEditorState;
    default:
      return state;
  }
}
