import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LessonSession from '../components/LessonSession';
import * as LessonSessionActions from '../actions/lessonsession-actions';

function mapStateToProps(state) {
  return {
    userRepositories: state.lessonSession.userRepositories,
    selectedRepository: state.userRepositories.selectedRepository
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LessonSessionActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonSession);
