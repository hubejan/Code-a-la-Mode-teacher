// @flow
import { EDITOR_CHANGE } from '../actions/editor-actions';
import { OPEN_FILE } from '../actions/filetree-actions';

export type editorStateType = {
  contents: Array<string>,
  currentOpenFiles: Array<string>
};

type actionType = {
  type: string,
  contents?: Array<string>,
  currentOpenFiles?: Array<string>
};

const defaultEditorState = {
  contents: [],
  currentOpenFiles: []
};

export default function editorValue(state: editorStateType = defaultEditorState,
                                    action: actionType) {
  switch (action.type) {
    case EDITOR_CHANGE:
      return { ...state, contents: action.contents };
    case OPEN_FILE:
      return { ...state, contents: action.contents };
    default:
      return state;
  }
}
