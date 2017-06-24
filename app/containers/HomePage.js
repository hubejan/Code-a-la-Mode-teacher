// @flow
import React, { Component } from 'react';
import Home from '../components/Home';

export default class HomePage extends Component {
  render() {
    console.log('reached homepage container');
    return (
      <Home />
    );
  }
}
