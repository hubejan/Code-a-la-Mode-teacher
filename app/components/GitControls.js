import React, { Component } from 'react';

export default class GitControls extends Component {
  props: {
    getUserRepositories: () => void,
    token: string,
    repositoryPath: string
  };

  render() {
    const { getUserRepositories, token, repositoryPath } = this.props;
    return (
      <div>
        <button
          onClick={() => { getUserRepositories(token); }}
        > Get User&apos;s Repositories </button>
        <button
          onClick={() => {
            console.log(repositoryPath);
          }}
        >
          <i className="fa fa-arrow-left fa-3x" />
        </button>
        <i className="fa fa-arrow-right fa-3x" />
      </div>
    );
  }
}
