// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ipcRenderer } from 'electron';

import UserRepositoriesContainer from '../containers/UserRepositoriesContainer';
import NewLessonFormContainer from '../containers/NewLessonFormContainer';

import styles from './UserRepositories.css';
import { lessonInfoType } from '../reducers/lessonSession-reducer';

export default class LessonInit extends Component {
  props: {
    userRepositories: Array<Object>,
    lessonInfo: lessonInfoType,
    token: string,
    getUserRepositories: () => void,
    createNewLesson: () => void
  };

  componentDidMount() {
    this.props.getUserRepositories(this.props.token);
  }

  render() {
    const { userRepositories, lessonInfo, createNewLesson, token } = this.props;

    // TODO: Re-route to Editor after creating/selecting a lesson
    return (
      <div>
        <h1>Create A Lesson</h1>
        <Link to="/">
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <div>
          <h1>Load from Local</h1>
          <NewLessonFormContainer />
        </div>
        <div>
          <h1>Load from Github</h1>
          <UserRepositoriesContainer
            repositories={userRepositories}
          />
        </div>
      </div>
    );
  }
}

