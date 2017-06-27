import { connect } from 'react-redux';
import GitControls from '../components/GitControls';
import * as GitControlsActions from '../actions/gitcontrols-actions';
import { bindActionCreators } from 'redux';


function mapStateToProps(state) {
  return {
    // username: state.filetree.username
  };
}

function mapDispatchToProps(dispatch) {
  // return {
    // dispatchGetUsername: () => dispatch(FiletreeActions.getUsername()),
    // loadInEditor: (selectedFile) => dispatch(FiletreeActions.loadFile(selectedFile))
  //   getRepository: (repositoryLink) => dispatch(GitControlsActionscloneRemoteRepository)
  // };

  return bindActionCreators(GitControlsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GitControls);
