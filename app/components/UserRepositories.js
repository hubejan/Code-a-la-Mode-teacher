import React, { Component } from 'react';
import { shell } from 'electron';

import RepositoryPanel from './RepositoryPanel';
import styles from './UserRepositories.css';

export default class UserRepositories extends Component {
  props: {
    repositories: Array<Object>,
    openRepoLink: (repoLink: string, event: Object) => void,
    loadLesson: (repoLink: string) => void,
  };

  render() {
    const { repositories, openRepoLink, loadLesson, history } = this.props;

    return (
      <div className={styles.container}>
        {
          repositories &&
          repositories.map(repository => (
            <RepositoryPanel
              history={history}
              key={repository.id}
              repository={repository}
              openRepoLink={openRepoLink}
              loadLesson={loadLesson}
            />
          ))
        }
      </div>
    );
  }
}
