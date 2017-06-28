import React, { Component } from 'react';

import RepositoryPanel from './RepositoryPanel';

export default class UserRepositories extends Component {
  props: {
    repositories: Array<Object>
  };

  render() {
    const { repositories } = this.props;
    return (
      <div>
        <h1>User Repositories</h1>
        {
          repositories &&
          repositories.map(repository => (
            <RepositoryPanel key={repository.id} repository={repository} />
          ))
        }
      </div>
    );
  }
}
