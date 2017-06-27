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
        <i
          className="fa fa-arrow-left fa-2x"
          onClick={() => { cloneRemoteRepository('https://github.com/hubejan/LecturesCodeTracker'); }}
        />
        <i className="fa fa-arrow-right fa-2x" />
      </div>
    );
  }
}
