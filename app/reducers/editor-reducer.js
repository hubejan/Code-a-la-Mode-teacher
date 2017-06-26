// @flow
import { EDITOR_CHANGE } from '../actions/editor-actions';
import { OPEN_FILE } from '../actions/filetree-actions';

export type editorStateType = {
  contents: string
};
type actionType = {
  type: string,
  contents?: string
};

const defaultEditorState = {
  contents: ''
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
