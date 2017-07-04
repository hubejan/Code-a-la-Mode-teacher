// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ipcRenderer } from 'electron';

import FiletreeContainer from '../containers/FiletreeContainer';
import GitControlsContainer from '../containers/GitControlsContainer';
import EditorContainer from '../containers/EditorContainer';
import UserRepositoriesContainer from '../containers/UserRepositoriesContainer';

import type { lessonSessionStateType, lessonInfoType } from '../reducers/lessonSession-reducer';


class LessonSession extends Component {

  props: {
    userRepositories: Array<Object>,
    loadUserRepos: () => void,
    lessonInfo: lessonInfoType
  };

  render() {
    const { userRepositories, lessonInfo } = this.props;

    return (
      <div>
        <EditorContainer />
      </div>
    );
  }
}

export default LessonSession;
