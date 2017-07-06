import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EditorActions from '../actions/editor-actions';
import Editor from '../components/Editor';

import { storageLogin } from '../actions/auth-actions';

function mapStateToProps(state) {
  return {
    contents: state.editor.contents,
    repositoryPath: state.lessonSession.lessonInfo.repositoryPath,
    currEditorVal: state.editor.contents[state.editor.selectedFileIndex],
    currentOpenFiles: state.editor.currentOpenFiles,
    selectedFileIndex: state.editor.selectedFileIndex,
    unread: state.tickets.allTickets.filter(ticket => ticket.unread === true)
  };
}

function mapDispatchToProps(dispatch) {
  const EditorActionsWithLogin = Object.assign({}, EditorActions, { storageLogin });
  return bindActionCreators(EditorActionsWithLogin, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
