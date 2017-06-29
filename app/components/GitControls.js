import React, { Component } from 'react';

export default class GitControls extends Component {
  props: {
    getUserRepositories: () => void,
    token: string
  };

  render() {
    const { getUserRepositories, token } = this.props;
    return (
      <div>
        <button
          onClick={() => { getUserRepositories(token); }}
        > Get User&apos;s Repositories </button>
        <i className="fa fa-arrow-left fa-3x" />
        <i className="fa fa-arrow-right fa-3x" />
      </div>
    );
  }
}
