import React from 'react';
import Flexbox from 'flexbox-react';

import SvgIcon from 'material-ui/SvgIcon';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';

import handleAuth from '../utils/auth';
import Logo from '../components/Logo';
import { cyan, green, orange, magenta } from '../public/colors';

const titleStyles = {
  fontFamily: 'Monaco',
  fontSize: '40px'
};

const flexStyles = {
  height: '70vh'
};

const buttonStyles = {
  width: 130,
  height: 130,
  padding: '7px',
  color: 'rgba(255, 255, 255, 1)',
  boxShadow: '0 5px 15px rgba(145, 92, 182, .4)'
};

const iconStyles = {
  width: 140,
  height: 140,
};

export const GithubIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8" />
  </SvgIcon>
);

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
      <Flexbox style={flexStyles} flexDirection="column" justifyContent="center" alignItems="center">
        <Logo />
        <div style={titleStyles}>
          <span style={{ color: 'whitesmoke' }}>Welcome to </span>
          <span style={{ color: cyan }}>Code </span>
          <span style={{ color: green }}>à </span>
          <span style={{ color: orange }}>la </span>
          <span style={{ color: magenta }}>Mode</span>
        </div>
        <Flexbox style={flexStyles} flexDirection="column" alignItems="center">
          <Paper style={buttonStyles} zDepth={5} circle={true} className="glowbutton" >
            <IconButton
              iconStyle={iconStyles}
              onTouchTap={() => handleAuth(this.props.githubLogin)}
            >
              <GithubIcon />
            </IconButton>
          </Paper>
          <h3 style={{ marginTop: '5px' }}>Log in with Github</h3>
        </Flexbox>
      </Flexbox>
    );
  }
}
