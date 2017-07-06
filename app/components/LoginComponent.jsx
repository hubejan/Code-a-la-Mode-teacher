import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';

import handleAuth from '../utils/auth';

export default class LoginComponent extends React.Component {
  props: {
    githubLogin: () => void
  };

  requestGithubToken(authCode) {
    this.props.githubLogin(authCode);
  }

  // should have a way to check if localstorage token is still valid
  // if access has been granted, then revoked by user, this won't work
  render() {
    return (
      <Dialog title="Welcome to Codelab" modal={true} open={true}>
        <RaisedButton onClick={() => handleAuth(this.props.githubLogin)} >
          Log in with Github
        </RaisedButton>
        <h5>dev note: If successful, Oauth token + username should be on state + localstorage</h5>
      </Dialog>
    );
  }
}
