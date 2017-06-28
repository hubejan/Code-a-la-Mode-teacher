import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GitControls from '../components/GitControls';
import * as GitControlsActions from '../actions/gitcontrols-actions';

function mapStateToProps(state) {
  return {
    token: state.auth.token
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(GitControlsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GitControls);
