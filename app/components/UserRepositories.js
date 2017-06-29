import React, { Component } from 'react';
import { shell } from 'electron';

import RepositoryPanel from './RepositoryPanel';

export default class UserRepositories extends Component {
  props: {
    repositories: Array<Object>,
    openLink: () => void
  };

  constructor(props) {
    super(props);
    this.openRepoLink = this.openRepoLink.bind(this);
  }

  openRepoLink(url) {
    shell.openExternal(url);
  }

  render() {
    const { repositories } = this.props;
    return (
      <div>
        <h1>User Repositories</h1>
        {
          repositories &&
          repositories.map(repository => (
            <RepositoryPanel
              key={repository.id}
              repository={repository}
              openRepoLink={this.openRepoLink}
            />
          ))
        }
      </div>
    );
  }
}
