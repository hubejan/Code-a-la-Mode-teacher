import axios from 'axios';
import { loadUserRepos } from './lessonsession-actions';

const git = require('simple-git')();

export const RECEIVED_USER_REPOS = 'RECEIVED_USER_REPOS';

const GITHUB_API_ROOT = 'https://api.github.com';

export const getUserRepositories = (userToken: string) => (dispatch: *) => {
  const config = {
    headers: {
      Authorization: `token ${userToken}`,
    },
    params: {
      affiliation: 'owner, collaborator',
      per_page: 300,
      sort: 'full_name'
    }
  };

  axios.get(`${GITHUB_API_ROOT}/user/repos`, config)
    .then(userRepos => {
      git
        .exec(() => {
          dispatch(loadUserRepos(userRepos.data));
        });
    })
    .catch(error => {
      console.error(error);
    });
};
