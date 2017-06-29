// @flow
import React, { Component } from 'react';
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
    const { loadInEditor } = this.props;
    return (
      <div>
        <FileTree directory={this.props.path} onFileClick={loadInEditor} fileTreeStyle={{ border: '1px solid gold', width: '100%', height: '100%' }} />
      </div>
    );
  }
}
