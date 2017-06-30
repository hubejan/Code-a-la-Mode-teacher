import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EditorActions from '../actions/editor-actions';
import Editor from '../components/Editor';

import { storageLogin } from '../actions/auth-actions';

function mapStateToProps(state) {
  return {
    contents: state.editor.contents,
    repositoryPath: state.lessonSession.lessonInfo.repositoryPath
  };
}

function mapDispatchToProps(dispatch) {
  const EditorActionsWithLogin = Object.assign({}, EditorActions, { storageLogin });
  return bindActionCreators(EditorActionsWithLogin, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
