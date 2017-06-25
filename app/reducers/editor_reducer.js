// @flow
import { EDITOR_CHANGE } from '../actions/editor-actions';

type actionType = {
  type: string
};

export default function editorValue(state: string = '', action: actionType) {
  switch (action.type) {
    case EDITOR_CHANGE:
      return action.newValue;
    default:
      return state;
  }
}
