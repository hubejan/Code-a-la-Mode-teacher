import { connect } from 'react-redux';
import Filetree from '../components/Filetree';
import * as FiletreeActions from '../actions/filetree-actions';

function mapStateToProps(state) {
  return {
    username: state.filetree.username,
    path: state.lessonSession.lessonInfo.repositoryPath,
    currentBranch: state.lessonSession.lessonInfo.currentBranch,

    // Properties from editor concerning currently open files
    // Array of file names?
    currentOpenFiles: state.editor.currentOpenFiles,
    currentEditorValues: state.editor.contents,
    selectedFileIndex: state.editor.selectedFileIndex
  };
}

function mapDispatchToProps(dispatch) {
  return {
    /* Consider changing this to follow the bindActionCreators convention */
    dispatchGetUsername: () => dispatch(FiletreeActions.getUsername()),
    loadInEditor: (selectedFile, currentOpenFiles, currentEditorValues) => {
      dispatch(FiletreeActions.loadNewFile(selectedFile, currentOpenFiles, currentEditorValues));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filetree);
