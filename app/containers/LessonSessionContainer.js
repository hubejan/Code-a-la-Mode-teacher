import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LessonSession from '../components/LessonSession';
import * as LessonSessionActions from '../actions/lessonsession-actions';

function mapStateToProps(state) {
  return {
    // TODO: Figure out if we still need these
    userRepositories: state.lessonSession.userRepositories,
    selectedRepository: state.userRepositories.selectedRepository,
    lessonInfo: state.lessonSession.lessonInfo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LessonSessionActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonSession);
