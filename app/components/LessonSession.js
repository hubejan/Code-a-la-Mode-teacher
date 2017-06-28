// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FiletreeContainer from '../containers/FiletreeContainer';
import GitControlsContainer from '../containers/GitControlsContainer';
import EditorContainer from '../containers/EditorContainer';
import UserRepositoriesContainer from '../containers/UserRepositoriesContainer';
import { ipcRenderer } from 'electron'; // TODO: Pass info to main process from here?
import type { lessonSessionStateType } from '../reducers/lessonSession-reducer';
import styles from './Home.css';


class LessonSession extends Component {

  props: {
    userRepositories: [],
    loadUserRepos: () => void
  };

  render() {
    return (
      <div>
        <Link to="/">
          <i className="fa fa-arrow-left fa-3x" />
        </Link>

        <FiletreeContainer className={styles.container} />

        <GitControlsContainer />

        <EditorContainer />

        <UserRepositoriesContainer repositories={this.props.userRepositories} />
      </div>
    );
  }
}

export default LessonSession;
