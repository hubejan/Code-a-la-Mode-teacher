import React from 'react';
import { Link } from 'react-router-dom';
import gitAuth from '../utils/github.settings.js'; // obj with id, secret, scopes

class LoginComponent extends React.Component {
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

export default LoginComponent;
