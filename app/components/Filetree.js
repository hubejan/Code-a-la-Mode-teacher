import React, { Component } from 'react';
import FileTree from 'react-filetree-electron';

export default class Filetree extends Component {
  props: {
    username: string,
    loadInEditor: () => void,
    dispatchGetUsername: () => void
  };

  componentDidMount() {
    this.props.dispatchGetUsername();
  }

  render() {
    const { loadInEditor } = this.props;
    return (
      <div>
        <FileTree directory={`/Users/${this.props.username}`} onFileClick={loadInEditor} />
      </div>
    );
  }
}
