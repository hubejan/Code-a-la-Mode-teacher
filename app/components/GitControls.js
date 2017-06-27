import React, { Component } from 'react';

export default class Filetree extends Component {
  props: {
    // username: string,
    // loadInEditor: () => void,
    // dispatchGetUsername: () => void
    cloneRemoteRepository: () => void
  };

  // componentDidMount() {
  //   this.props.dispatchGetUsername();
  // }

  render() {
    const { cloneRemoteRepository } = this.props;
    return (
      <div>
        <button
          onClick={() => { cloneRemoteRepository('https://github.com/hubejan/LecturesCodeTracker'); }}
        > Clone lesson </button>
      </div>
    );
  }
}
