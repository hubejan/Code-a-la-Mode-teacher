// @flow
import React, { Component } from 'react';
// Currently breaking Filetree re-render on branch change
import Resizable from 'react-resizable-box';

import FileTree from 'react-filetree-electron';

export default class Filetree extends Component {
  props: {
    username: string,
    loadInEditor: () => void,
    dispatchGetUsername: () => void,
    path: string,
    currentBranch: string
  };

  componentDidMount() {
    // this.props.dispatchGetUsername();
  }

  render() {
    const { loadInEditor, path, currentBranch } = this.props;
    return (
      <Resizable width={'100%'} height={'100%'}>
        {
          currentBranch && <h3>{ currentBranch }</h3>
        }

        { /* Giving currentBranch as a prop to the FileTree component to force a re-render */ }
        <FileTree directory={path} onFileClick={loadInEditor} currentBranch={currentBranch} />
      </Resizable>
    );
  }
}

