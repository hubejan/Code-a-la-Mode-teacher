import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Filetree from '../components/Filetree';
import * as FiletreeActions from '../actions/filetree-actions';

function mapStateToProps(state) {
  console.log('when mapping Filetreecontainer to props, state.filetree.username  is:', state.filetree.username, ' . its empty as you can see. BUT if you click-to-expand this next object (state.filetree), it will show that it later becomes the correct username, yet react doesnt re-render the connected component!', state.filetree);

  return {
    username: state.filetree.username
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FiletreeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filetree);
