// @flow
import React, { Component } from 'react';
import Resizable from 'react-resizable-box';

import FileTree from 'react-filetree-electron';

export default class Filetree extends Component {
  props: {
    username: string,
    loadInEditor: () => void,
    dispatchGetUsername: () => void,
    path: string
  };

  componentDidMount() {
    // this.props.dispatchGetUsername();

  }

  render() {
    const { loadInEditor, path } = this.props;
    return (
      <Resizable width={'100%'} height={'100%'}>
        <FileTree directory={path} onFileClick={loadInEditor} />
      </Resizable>
    );
  }
}
