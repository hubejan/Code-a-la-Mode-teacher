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
  contents: [`//      ,gggg,
//     ,88"""Y8b,                      8I
//    d8"     \`Y8                      8I
//   d8'   8b  d8                      8I
//  ,8I    "Y88P'                      8I
//  I8'             ,ggggg,      ,gggg,8I   ,ggg,
//  d8             dP"  "Y8ggg  dP"  "Y8I  i8" "8i
//  Y8,           i8'    ,8I   i8'    ,8I  I8, ,8I
//  \`Yba,,_____, ,d8,   ,d8'  ,d8,   ,d8b, \`YbadP'
//    \`"Y8888888 P"Y8888P"    P"Y8888P"\`Y8888P"Y888
//
//     ,gggg,gg
//    dP"  "Y8I
//   i8'    ,8I
//   d8,   ,d8b,
//   "Y8888P"\`Y8
//
//   ,dPYb,
//   IP'\`Yb
//   I8  8I
//   I8  8'
//   I8 dP    ,gggg,gg
//   I8dP    dP"  "Y8I
//   I8P    i8'    ,8I
//  ,d8b,_ ,d8,   ,d8b,
//  8P'"Y88P"Y8888P"\`Y8
//
//   ,ggg, ,ggg,_,ggg,
//  dP""Y8dP""Y88P""Y8b                       8I
//  Yb, \`88'  \`88'  \`88                       8I
//   \`"  88    88    88                       8I
//       88    88    88                       8I
//       88    88    88    ,ggggg,      ,gggg,8I   ,ggg,
//       88    88    88   dP"  "Y8ggg  dP"  "Y8I  i8" "8i
//       88    88    88  i8'    ,8I   i8'    ,8I  I8, ,8I
//       88    88    Y8,,d8,   ,d8'  ,d8,   ,d8b, \`YbadP'
//       88    88    \`Y8P"Y8888P"    P"Y8888P"\`Y8888P"Y888

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
