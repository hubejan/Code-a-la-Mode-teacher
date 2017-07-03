import { remote } from 'electron';
import axios from 'axios';
// import fs from 'fs';

import { lessonInfoType } from '../reducers/lessonSession-reducer';
import { makeDirectory, writeFile } from '../utils/FileSystemUtils';

const git = require('simple-git');

const GITHUB_API_ROOT = 'https://api.github.com';

export const LOAD_USER_REPOS = 'LOAD_USER_REPOS';
export const LOAD_LESSON = 'LOAD_LESSON';
export const CHECKOUT_NEXT_BRANCH = 'CHECKOUT_NEXT_BRANCH';
export const CHECKOUT_PREVIOUS_BRANCH = 'CHECKOUT_PREVIOUS_BRANCH';
export const CANNOT_CHECKOUT = 'CANNOT_CHECKOUT';
export const ADD_BRANCH = 'ADD_BRANCH';

export const loadUserRepos = (userRepositories: []) => (dispatch: *) => {
  dispatch({ type: LOAD_USER_REPOS, userRepositories });
};

export const loadAfterCloning = (lessonFilePath: string) => (dispatch: *) => {
  git(lessonFilePath)
    .branch((err, branchSummary) => {
      const branchIndexArray = Object.keys(branchSummary.branches).map((branchName) => branchName);

      dispatch({
        type: LOAD_LESSON,
        lessonInfo: {
          branches: branchSummary.branches,
          branchIndex: 0,
          repositoryPath: lessonFilePath,
          branchNames: branchIndexArray,
          currentBranch: branchSummary.current
        } });
    });
};

export const checkoutNextBranch = (lessonInfo: lessonInfoType) => (dispatch: *) => {
  const currentIndex = lessonInfo.branchIndex;
  if (currentIndex === lessonInfo.branches.length) {
    dispatch({
      type: CANNOT_CHECKOUT
    });
    return;
  }

  const nextBranchName = lessonInfo.branchNames[currentIndex + 1];
  git(lessonInfo.repositoryPath)
    .checkout(nextBranchName, (err) => {
      if (err) {
        dispatch({ type: CANNOT_CHECKOUT });
      } else {
        dispatch({
          type: CHECKOUT_NEXT_BRANCH,
          currentBranch: nextBranchName,
          newBranchIndex: currentIndex + 1
        });
      }
    });
};

export const checkoutPreviousBranch = (lessonInfo: lessonInfoType) => (dispatch: *) => {
  const currentIndex = lessonInfo.branchIndex;
  if (currentIndex === 0) {
    dispatch({
      type: CANNOT_CHECKOUT
    });
    return;
  }

  const previousBranchName = lessonInfo.branchNames[currentIndex - 1];
  git(lessonInfo.repositoryPath)
    .checkout(previousBranchName, (err) => {
      if (err) {
        dispatch({ type: CANNOT_CHECKOUT });
      } else {
        dispatch({
          type: CHECKOUT_PREVIOUS_BRANCH,
          currentBranch: previousBranchName,
          newBranchIndex: currentIndex - 1
        });
      }
    });
};

export const createNewLesson = (event, newLessonName: string, userToken: string) => (dispatch: *) => {
  event.preventDefault();
  remote.dialog.showSaveDialog({ defaultPath: newLessonName }, (newLessonFilePath) => {
    makeDirectory(newLessonFilePath)
      .then((err) => {
        if (err) {
          console.error(`Failed to create direcotry: ${err}`);
          return;
        }
        git(newLessonFilePath)
          .init();
      })
      .then(() => {

        const config = {
          headers: {
            Authorization: `token ${userToken}`,
          }
        };
        axios.post(`${GITHUB_API_ROOT}/user/repos`, {
          name: newLessonName,
          gitignore_template: 'Node'
        }, config);
      })
      .catch(error => console.error(error));
  });
};

export const addBranch = (branch, branchName) => ({
  type: ADD_BRANCH,
  branch,
  branchName
});

export const saveLesson = () => (dispatch: *) => {

};
