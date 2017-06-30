import React, { Component } from 'react';
import { shell } from 'electron';

import RepositoryPanel from './RepositoryPanel';
import styles from './UserRepositories.css';

export default class UserRepositories extends Component {
  props: {
    repositories: Array<Object>,
    openRepoLink: (repoLink: string, event: Object) => void,
    loadLesson: (repoLink: string) => void,
    selectRepository: () => void,
    repositoryPath: string
  };

  render() {
    const { repositories, openRepoLink, loadLesson, selectRepository } = this.props;

    return (
      <div
        className={styles.container}
      >
        <h1>User Repositories</h1>
        {
          repositories &&
          repositories.map(repository => (
            <RepositoryPanel
              key={repository.id}
              repository={repository}
              openRepoLink={openRepoLink}
              loadLesson={loadLesson}
              selectRepository={selectRepository}
            />
          ))
        }
      </div>
    );
  }
}
