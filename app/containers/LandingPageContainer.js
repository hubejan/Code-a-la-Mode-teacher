import React, { Component } from 'react';
import { connect } from 'react-redux';
import LessonInitContainer from './LessonInitContainer';
import Login from '../components/LoginComponent';
import { teacherLogin, teacherLogout, storageLogin } from '../actions/auth-actions';

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn,
    username: state.auth.username
  };
}

function mapDispatchToProps(dispatch) {
  return {
    githubLogin(authCode) {
      dispatch(teacherLogin(authCode));
    },
    alreadyLoggedIn(token, username) {
      dispatch(storageLogin(token, username));
    },
    githubLogout() {
      dispatch(teacherLogout());
    }
  };
}

class LandingPage extends Component {
  props: {
    loggedIn: boolean,
    username: ?string,
    history: Object,
    alreadyLoggedIn: () => void,
    githubLogin: () => void,
    githubLogout: () => void
  };

  componentWillMount() {
    const token = window.localStorage.getItem('token');
    const username = window.localStorage.getItem('username');
    if (token && username) return this.props.alreadyLoggedIn(token, username);
  }

  render() {
    const { loggedIn, username, githubLogin, githubLogout, history } = this.props;
    return loggedIn
      ? <LessonInitContainer githubLogout={githubLogout} username={username} history={history} />
      : <Login githubLogin={githubLogin} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
