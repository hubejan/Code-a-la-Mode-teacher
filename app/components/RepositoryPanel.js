import React, { Component } from 'react';
import styles from './UserRepositories.css';

export default class UserRepositories extends Component {
  props: {
    repository: Object,
    openRepoLink: () => void,
    selectRepository: () => void,
    loadLesson: () => void,
  };

  render() {
    const { repository, openRepoLink, selectRepository, loadLesson } = this.props;
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
          onClick={(e) => { openRepoLink(repository.html_url, e); }}
        > View on Github </button>
        <button
          onClick={() => {
            loadLesson(repository.html_url);
          }}
        > Load Lesson </button>
        <button
          onClick={() => { selectRepository(repository); }}
        > Select </button>
      </div>
    );
  }
}
