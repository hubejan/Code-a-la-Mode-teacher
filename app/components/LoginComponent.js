import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserWindow } from 'electron';
import gitAuth from '../utils/github.settings'; // obj with id, secret, scopes
import { connect } from 'react-redux';
import { teacherLogin } from '../reducers/auth-reducer';

class LoginComponent extends React.Component {
  handleAuth() {
    let authWindow = new BrowserWindow({
      width: 800,
      height: 600,
      show: false,
      'node-integration': false
    });
    const githubUrl = 'https://github.com/login/oauth/authorize?';
    const authUrl = `${githubUrl}client_id=${gitAuth.client_id}&scope=${gitAuth.scopes}`;
    authWindow.loadURL(authUrl);
    authWindow.show();

    const handleCallback = (url) => {
      const rawCode = /code=([^&]*)/.exec(url) || null;
      const code = (rawCode && rawCode.length > 1) ? rawCode[1] : null;
      const error = /\?error=(.+)$/.exec(url);

      // Close the mini login-browser if auth code found or error
      if (code || error) {
        authWindow.destroy();
      }

      // If there is an auth code (supplied via callback url), get token from github
      if (code) {
        this.requestGithubToken(gitAuth, code);
      } else if (error) {
        alert('Oops! Something went wrong and we couldn\'t' +
          'log you in using Github. Please try again.');
      }
    };

    // handle response from github, handles first-time-login
    authWindow.webContents.on('will-navigate', (event, url) => {
      handleCallback(url);
    });

    // handles case where already logged into Github
    authWindow.webContents.on('did-get-redirect-request', (event, oldUrl, newUrl) => {
      handleCallback(newUrl);
    });

    // Reset the authWindow on close
    authWindow.on('close', () => { authWindow = null; }, false);
  }

  requestGithubToken(authCode) {
    this.props.githubLogin(authCode);
  }

  render() {
    return (
      <div>
        <Link to="/">
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
        <h3>Press this button to log in to Github!!!</h3>
        <button onClick={() => console.log('haha not implemented yet')}>
          Log in to Github
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    githubLogin(authCode) {
      dispatch(teacherLogin(authCode));
    }
  };
}

export default connect(null, mapDispatchToProps)(LoginComponent);
