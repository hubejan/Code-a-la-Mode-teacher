import React, { Component } from 'react';

import RepositoryPanel from './RepositoryPanel';

export default class UserRepositories extends Component {
  props: {
    repository: Object
  };

  render() {
    const { repository } = this.props;
    return (
      <div>
        { repository.name }
        <br />
      </div>
    );
  }
}
