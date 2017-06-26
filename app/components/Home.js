// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const tempStyle = {
  position: 'absolute',
  top: '30%',
  right: '10px',
  textAlign: 'center'
};

export default class Home extends Component {
  render() {
    return (
      <div>
        <div style={tempStyle} data-tid="container" >
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
          <br />
          <Link to="/panelView">test the Question/History panel</Link>
          <br />
          <Link to="/editor">Editor</Link>
        </div>
      </div>
    );
  }
}
