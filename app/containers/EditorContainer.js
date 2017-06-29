import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EditorActions from '../actions/editor-actions';
import Editor from '../components/Editor';

function mapStateToProps(state) {
  return {
    contents: state.editor.contents,
    repositoryPath: state.userRepositories.repositoryPath
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(EditorActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
