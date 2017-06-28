import axios from 'axios';

import { loadUserRepos } from './lessonsession-actions';

// Defaults to current directory
// Need to pass in relevant project directory during operations
const simpleGit = require('simple-git')();

export const RECEIVED_USER_REPOS = 'RECEIVED_USER_REPOS';

const GITHUB_API_ROOT = 'https://api.github.com';

export const getUserRepositories = (userToken: string) => (dispatch: *) => {
  const config = {
    headers: {
      Authorization: `token ${userToken}`
    }
  };

  axios.get(`${GITHUB_API_ROOT}/user/repos`, config)
    .then(userRepos => {
      simpleGit
        .clone(userRepos.data[0].html_url, `${__dirname}/testRepo`)
        .exec(() => {
          dispatch(loadUserRepos(userRepos.data));
          // dispatch({ type: RECEIVED_USER_REPOS, repositories: userRepos.data });
        });
    })
    .catch(error => {
      console.error(error);
      // dispatch({ type: CLONE_FAILURE, error}); // TODO: Implement failure to clone project
    });
};
