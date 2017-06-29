import axios from 'axios';
import { shell, remote } from 'electron';
// Defaults to current directory
// Need to pass in relevant project directory during operations
const simpleGit = require('simple-git')();

export const SELECT_REPOSITORY = 'SELECT_REPOSITORY';

export const openRepoLink = (repoLink: string): void => {
  shell.openExternal(repoLink);
};

export const cloneRepository = (repoLink: string): void => {
  // let cloneWindow = new remote.BrowserWindow({
  //   width: 800,
  //   height: 600
  // });

  remote.dialog.showSaveDialog({
    title: 'Save Repository',
    properties: ['openDirectory']
  }, (localFilePath) => {
    simpleGit
      .clone(repoLink, localFilePath);
  });
};

export const selectRepository = (selectedRepository: {}) => (dispatch: *) => {
  dispatch({ type: SELECT_REPOSITORY, selectedRepository });
};

// export const loadUserRepos = (userRepositories: []) => (dispatch: *) => {
//   dispatch({ type: LOAD_USER_REPOS, userRepositories });
// };
