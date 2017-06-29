import React, { Component } from 'react';

export default class GitControls extends Component {
  props: {
    getUserRepositories: () => void,
    token?: string
  };

  render() {
    const { getUserRepositories, token } = this.props;
    return (
      <div>
        <button
          onClick={() => { getUserRepositories(token); }}
        > Get User&apos;s Repositories </button>
      </div>
    );
  }
}
