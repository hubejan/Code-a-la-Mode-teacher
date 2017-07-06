// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ipcRenderer } from 'electron';

import UserRepositoriesContainer from '../containers/UserRepositoriesContainer';
import NewLessonFormContainer from '../containers/NewLessonFormContainer';
import NavMenu from './CodingNavMenu';

import styles from './UserRepositories.css';
import { lessonInfoType } from '../reducers/lessonSession-reducer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/arrow-back';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Flexbox from 'flexbox-react';

const style = {
  margin: 12,
};

export default class LessonInit extends Component {
  props: {
    userRepositories: Array<Object>,
    lessonInfo: lessonInfoType,
    token: string,
    getUserRepositories: () => void,
    createNewLesson: () => void,
    open?: boolean
  };

  state = {
    open: false,
  };

  componentDidMount() {
    this.props.getUserRepositories(this.props.token);
  }

  handleOpen = () => { this.setState({ open: true }); };
  handleClose = () => { this.setState({ open: false }); };

  render() {
    const { userRepositories, githubLogout, lessonInfo, createNewLesson, token, open, history } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    // TODO: Re-route to Editor after creating/selecting a lesson
    return (
      <div>
        <AppBar title="Create A Lesson"
              showMenuIconButton="false"
              iconElementLeft={<NavMenu githubLogout={githubLogout} view="lesson" />}
        >
          <RaisedButton label="Load from local" style={style} onClick={() => { this.handleOpen(); }} />
        </AppBar>
        <Dialog
          title="Load from Local"
          actions={actions}
          modal={Boolean(true)}
          open={this.state.open}
        >
          <NewLessonFormContainer
            history={history}
          />
        </Dialog>
        <Flexbox>
          <UserRepositoriesContainer
            history={history}
            repositories={userRepositories}
          />
        </Flexbox>
      </div>
    );
  }
}

