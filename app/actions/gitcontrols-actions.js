import axios from 'axios';
import PromiseB from 'bluebird';

import { loadUserRepos } from './lessonsession-actions';
import { lessonInfoType } from '../reducers/lessonSession-reducer';

const git = require('simple-git');

export const RECEIVED_USER_REPOS = 'RECEIVED_USER_REPOS';
export const SAVE_LESSON_GITHUB = 'SAVE_LESSON_GITHUB';

const GITHUB_API_ROOT = 'https://api.github.com';

export const getUserRepositories = (userToken: string) => (dispatch: *) => {
  const config = {
    headers: {
      Authorization: `token ${userToken}`
    },
    params: {
      affiliation: 'owner, collaborator',
      per_page: 300,
      sort: 'full_name'
    }
  };

  axios.get(`${GITHUB_API_ROOT}/user/repos`, config)
    .then(userRepos => {
      dispatch(loadUserRepos(userRepos.data));
    })
    .catch(error => {
      console.error(error);
    });
};

export const saveLesson = (repositoryPath: string, lessonInfo: lessonInfoType) => (dispatch: *) => {
  const lessonGit = git(repositoryPath);
  const branchPushPromises = [];
  const modifiedBranches = Object.keys(lessonInfo.headHashes);
  modifiedBranches.map((branch, index) => {
    const pushPromise = new Promise((resolve, reject) => {
      lessonGit
        .checkout(branch)
        .push()
        .exec(resolve());
    });
    branchPushPromises.push(pushPromise);
  });

  return PromiseB.all(branchPushPromises)
    .then(() => {
      lessonGit
        .checkout('master')
        .exec(() => {
          dispatch({
            type: SAVE_LESSON_GITHUB
          })
        })
    })
};
