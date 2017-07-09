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
  contents: [`
   .d8888b.   .d88888b.  8888888b.  8888888888
  d88P  Y88b d88P   Y88b 888   Y88b 888
  888    888 888     888 888    888 888
  888        888     888 888    888 8888888
  888        888     888 888    888 888
  888    888 888     888 888    888 888
  Y88b  d88P Y88b. .d88P 888  .d88P 888
    Y8888P     Y88888P   8888888P   8888888888



         d8888
        d88888
       d88P888
      d88P 888
     d88P  888
    d88P   888
   d8888888888
  d88P     888



  888             d8888
  888            d88888
  888           d88P888
  888          d88P 888
  888         d88P  888
  888        d88P   888
  888       d8888888888
  88888888 d88P     888



  888b     d888  .d88888b.  8888888b.  8888888888
  8888b   d8888 d88P   Y88b 888   Y88b 888
  88888b.d88888 888     888 888    888 888
  888Y88888P888 888     888 888    888 8888888
  888 Y888P 888 888     888 888    888 888
  888  Y8P  888 888     888 888    888 888
  888       888 Y88b. .d88P 888  .d88P 888
  888       888   Y88888P   8888888P   8888888888
`],
  currentOpenFiles: [],
  selectedFileIndex: 0
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
