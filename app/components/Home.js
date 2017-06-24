// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Home.css';
import Filetree from './Filetree';

export default class Home extends Component {
  render() {
    console.log('reached /components/home.js');
    return (
      <div>
        <Filetree />
        {/* <div className={styles.container} data-tid="container">
        </div>*/}
      </div>
    );
  }
}
