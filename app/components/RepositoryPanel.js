import React, { Component } from 'react';

import styles from './UserRepositories.css';

export default class UserRepositories extends Component {
  props: {
    repository: Object,
    openRepoLink: () => void,
    cloneRepository: () => void,
    selectRepository: () => void
  };

  render() {
    const { repository, openRepoLink, cloneRepository, selectRepository } = this.props;
    const updatedAtObj = new Date(repository.updated_at);
    const updatedAtUTC = updatedAtObj.toUTCString();
    const updatedAtString = `Last updated: ${updatedAtUTC}`;
    return (
      <div
        className={styles.panel}
      >
        <div>
          { repository.name }
        </div>
        <div>
          { repository.html_url }
        </div>
        <div>
          { updatedAtString }
        </div>
        <button
          onClick={() => { openRepoLink(repository.html_url); }}
        > View on Github </button>
        <button
          onClick={() => { cloneRepository(repository.html_url); }}
        > Clone </button>
        <button
          onClick={() => { selectRepository(repository); }}
        > Select </button>
      </div>
    );
  }
}
