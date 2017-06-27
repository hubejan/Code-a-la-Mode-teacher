import { connect } from 'react-redux';
import Filetree from '../components/Filetree';
import * as FiletreeActions from '../actions/filetree-actions';

function mapStateToProps(state) {
  return {
    username: state.filetree.username
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchGetUsername: () => dispatch(FiletreeActions.getUsername()),
    loadInEditor: (selectedFile) => dispatch(FiletreeActions.loadFile(selectedFile))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filetree);