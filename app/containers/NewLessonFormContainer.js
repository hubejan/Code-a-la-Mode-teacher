import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NewLessonForm from '../components/NewLessonForm';
import * as NewLessonFormActions from '../actions/newlessonform-actions';

import { createNewLesson } from '../actions/lessonsession-actions';

function mapStateToProps(state) {
  return {
    newLessonName: state.newLessonForm.newLessonName,
    token: state.auth.token
  };
}

function mapDispatchToProps(dispatch) {
  const MasterNewLessonFormActions = Object.assign({}, NewLessonFormActions, { createNewLesson });
  return bindActionCreators(MasterNewLessonFormActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLessonForm);
