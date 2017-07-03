import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LessonInit from '../components/LessonInit';
import * as GitControlsActions from '../actions/gitcontrols-actions';
import { createNewLesson } from '../actions/lessonsession-actions';

function mapStateToProps(state) {
  return {
    userRepositories: state.lessonSession.userRepositories,
    lessonInfo: state.lessonSession.lessonInfo,
    token: state.auth.token
  };
}

function mapDispatchToProps(dispatch) {
  const MasterLessonInitActions = Object.assign({}, GitControlsActions, { createNewLesson });
  return bindActionCreators(MasterLessonInitActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonInit);
