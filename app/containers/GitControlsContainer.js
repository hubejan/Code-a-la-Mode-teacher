import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import GitControls from '../components/GitControls';
import * as GitControlsActions from '../actions/gitcontrols-actions';
// import { loadLesson, getNextBranch } from '../actions/lessonsession-actions';
import * as LessonSessionActions from '../actions/lessonsession-actions';

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    repositoryPath: state.lessonSession.lessonInfo.repositoryPath,
    lessonInfo: state.lessonSession.lessonInfo
  };
}

function mapDispatchToProps(dispatch) {
  const MasterGitControlsActions = Object.assign({}, GitControlsActions, LessonSessionActions);
  return bindActionCreators(MasterGitControlsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GitControls);
