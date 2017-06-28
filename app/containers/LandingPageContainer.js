import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import Login from '../components/LoginComponent';
import { teacherLogin, storageLogin, logout } from '../actions/auth-actions';

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return {
    githubLogin(authCode) {
      dispatch(teacherLogin(authCode));
    },
    alreadyLoggedIn(token) {
      dispatch(storageLogin(token));
    },
    githubLogout() {
      dispatch(logout());
    }
  };
}

class LandingPage extends Component {
  props: {
    loggedIn: boolean,
    alreadyLoggedIn: () => void,
    githubLogin: () => void,
    githubLogout: () => void
  };

  componentWillMount() {
    const token = window.localStorage.getItem('token');
    if (token) return this.props.alreadyLoggedIn(token);
  }

  render() {
    const { loggedIn, githubLogin, githubLogout } = this.props;
    return loggedIn
      ? <Home githubLogout={githubLogout} />
      : <Login githubLogin={githubLogin} />;
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
