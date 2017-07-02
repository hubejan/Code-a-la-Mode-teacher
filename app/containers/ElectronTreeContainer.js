import { connect } from 'react-redux';
import React, { Component } from 'react';

import ElectronTree from '../components/ElectronTree';
import { toggleVisibility } from '../reducers/electron-tree-reducer';
import { setFiletree } from '../actions/filetree-actions';

const mapStateToProps = state => ({
  isVisible: state.electronTree.isVisible,
  files: state.filetree.filetree
});

const mapDispatchToProps = dispatch => ({
  dispatchSetFiletree: files => dispatch(setFiletree(files)),
  toggleVisibility: filePath => dispatch(toggleVisibility(filePath)) });

const ConnectElectronTree = connect(mapStateToProps, mapDispatchToProps)(ElectronTree);

export default class extends Component {
  render() {
    return (
      <ConnectElectronTree {...this.props} />
    );
  }
}
