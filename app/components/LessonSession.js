// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FiletreeContainer from '../containers/FiletreeContainer';
import GitControlsContainer from '../containers/GitControlsContainer';
import EditorContainer from '../containers/EditorContainer';
import UserRepositoriesContainer from '../containers/UserRepositoriesContainer';
import { ipcRenderer } from 'electron';
import type { lessonSessionStateType } from '../reducers/lessonSession-reducer';


class LessonSession extends Component {

  props: {
    userRepositories: [],
    loadUserRepos: () => void,
    selectedRepository: {},
    lessonBranches: []
  };

  render() {
    const { userRepositories, selectedRepository, lessonBranches } = this.props;

    return (
      <div>
        <EditorContainer />

        <UserRepositoriesContainer
          repositories={userRepositories}
          selectedRepository={selectedRepository}
        />
      </div>
    );
  }
}

export default LessonSession;
