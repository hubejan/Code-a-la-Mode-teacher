import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GitControls from '../components/GitControls';
import * as GitControlsActions from '../actions/gitcontrols-actions';

import { loadLesson } from '../actions/lessonsession-actions';

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    repositoryPath: state.userRepositories.repositoryPath
  };
}

function mapDispatchToProps(dispatch) {
  const GitControlsActionsWithLoadLesson = Object.assign({}, GitControlsActions, { loadLesson });
  return bindActionCreators(GitControlsActionsWithLoadLesson, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GitControls);
