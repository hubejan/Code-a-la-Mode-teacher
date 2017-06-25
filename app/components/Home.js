// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Home.css';
import FiletreeContainer from '../containers/FiletreeContainer';

export default class Home extends Component {
  render() {
    console.log('reached /components/home.js');
    return (
      <div>
        <FiletreeContainer />
        {/* <div className={styles.container} data-tid="container">
        </div>*/}
      </div>
    );
  }
}
