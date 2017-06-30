import { connect } from 'react-redux';
import React, { Component } from 'react';

import ElectronTree from '../components/ElectronTree';
import { toggleVisibility } from '../reducers/electron-tree-reducer';

const mapState = state => ({ isVisible: state.electronTree.isVisible });

const mapDispatch = dispatch => ({ toggleVisibility: filePath => dispatch(toggleVisibility(filePath)) });

const ConnectFileTree = connect(mapState, mapDispatch)(ElectronTree);

export default class extends Component {
  render() {
    return (
      <ConnectFileTree {...this.props} />
    );
  }
}
