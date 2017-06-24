import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Filetree from '../components/Filetree';
import * as FiletreeActions from '../actions/filetree-actions';

function mapStateToProps(state) {
  return {
    username: state.filetree.username
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FiletreeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filetree);
