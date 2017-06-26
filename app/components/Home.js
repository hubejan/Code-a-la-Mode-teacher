// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import FiletreeContainer from '../containers/FiletreeContainer';

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
        <FiletreeContainer className={styles.container} />
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
