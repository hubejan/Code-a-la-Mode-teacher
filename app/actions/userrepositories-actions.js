import axios from 'axios';
import { shell, remote } from 'electron';
import { loadUserRepos } from './lessonsession-actions';

// Defaults to current directory
// Need to pass in relevant project directory during operations
const simpleGit = require('simple-git')();

export const SELECT_REPOSITORY = 'SELECT_REPOSITORY';
export const CLONED_REPOSITORY = 'CLONED_REPOSITORY';

export const openRepoLink = (repoLink: string): void => {
  shell.openExternal(repoLink);
};

export const cloneRepository = (repoLink: string) => (dispatch: *) => {
  remote.dialog.showSaveDialog({
    title: 'Save Repository',
    properties: ['openDirectory']
  }, (localFilePath) => {
    if (localFilePath === undefined) return; // User cancelled
    simpleGit
      .clone(repoLink, localFilePath, () => {
        dispatch({ type: CLONED_REPOSITORY, repositoryPath: localFilePath });
      });
  });
};

export const selectRepository = (selectedRepository: {}) => (dispatch: *) => {
  dispatch({ type: SELECT_REPOSITORY, selectedRepository });
};
