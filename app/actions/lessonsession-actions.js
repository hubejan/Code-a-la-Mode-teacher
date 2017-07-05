import { remote } from 'electron';
import axios from 'axios';
import PromiseB from 'bluebird';

import { lessonInfoType } from '../reducers/lessonSession-reducer';
import { makeDirectory, writeFile } from '../utils/FileSystemUtils';
import { getLastFromPath } from '../utils/file-functions';

import { clearEditorState } from './editor-actions';

const git = require('simple-git');

const GITHUB_API_ROOT = 'https://api.github.com';

export const LOAD_USER_REPOS = 'LOAD_USER_REPOS';
export const LOAD_LESSON = 'LOAD_LESSON';
export const CHECKOUT_NEXT_BRANCH = 'CHECKOUT_NEXT_BRANCH';
export const CHECKOUT_PREVIOUS_BRANCH = 'CHECKOUT_PREVIOUS_BRANCH';
export const CANNOT_CHECKOUT = 'CANNOT_CHECKOUT';
export const ADD_BRANCH = 'ADD_BRANCH';
export const CREATED_NEW_LESSON = 'CREATED_NEW_LESSON';
export const ADD_HEAD_HASH = 'ADD_HEAD_HASH';

export const loadUserRepos = (userRepositories: []) => (dispatch: *) => {
  dispatch({ type: LOAD_USER_REPOS, userRepositories });
};

export const loadAfterCreating = (lessonFilePath: string) => (dispatch: *) => {
  const lessonGit = git(lessonFilePath);
  lessonGit
    .branch((err, branchSummary) => {
      const branchNames = Object.keys(branchSummary.branches).map((branchName) => branchName);

      dispatch({
        type: CREATED_NEW_LESSON,
        lessonInfo: {
          branches: branchSummary.branches,
          branchIndex: 0,
          repositoryPath: lessonFilePath,
          branchNames: branchNames,
          currentBranch: branchSummary.current,
          headHashes: {}
        } });
    });
};


export const loadAfterCloning = (lessonFilePath: string) => (dispatch: *) => {
  const lessonGit = git(lessonFilePath);

  lessonGit
    .branch((err, branchSummary) => {
      const checkoutPromises = [];
      const branchNames = Object.keys(branchSummary.branches).map((branchName) => {
        const localBranchName = getLastFromPath(branchName);

        // Handling remote branches for local working copy
        if (localBranchName !== 'master') {
          checkoutPromises.push(
            new Promise((resolve, reject) => {
              lessonGit
                .checkoutBranch(localBranchName, branchName, (checkoutError, success) => {
                  // Not really using success, just care about checkoutError
                  return checkoutError ? console.error(checkoutError) : localBranchName;
                })
                .exec(resolve());
            }
          ));
        }
        return localBranchName;
      });

      return PromiseB.all(checkoutPromises)
        .then(() => {
          lessonGit
            .checkout('master')
            .exec(() => {
              dispatch({
                type: LOAD_LESSON,
                lessonInfo: {
                  branches: branchSummary.branches,
                  branchIndex: 0,
                  repositoryPath: lessonFilePath,
                  branchNames: branchNames,
                  currentBranch: branchSummary.current,
                  headHashes: {}
                }
              });
            });
        });
    });
};

export const checkoutNextBranch = (lessonInfo: lessonInfoType,
                                   currentOpenFiles: Array<string>,
                                   currentEditorValues: Array<string>) => (dispatch: *) => {
  const currentIndex = lessonInfo.branchIndex;
  if (currentIndex === lessonInfo.branches.length) {
    dispatch({
      type: CANNOT_CHECKOUT
    });
    return;
  }

  saveLesson(currentOpenFiles, currentEditorValues)
    .then(() => {
      const nextBranchName = lessonInfo.branchNames[currentIndex + 1];

      git(lessonInfo.repositoryPath)
        .add('./*')
        .commit(`Temporary commit for branch ${lessonInfo.branchNames[currentIndex]}`)
        .checkout(nextBranchName, (err) => {
          if (err) {
            dispatch({ type: CANNOT_CHECKOUT });
          } else {
            // First time seeing a branch, store the commit hash of the HEAD
            if (!Object.prototype.hasOwnProperty.call(lessonInfo.headHashes, nextBranchName)) {
              git(lessonInfo.repositoryPath)
                .revparse(['master'], (error, headHash) => {
                  const newHeadHash = { [nextBranchName]: headHash };
                  dispatch({ type: ADD_HEAD_HASH, newHeadHash });
                });
            }

            dispatch(clearEditorState());

            dispatch({
              type: CHECKOUT_NEXT_BRANCH,
              currentBranch: nextBranchName,
              newBranchIndex: currentIndex + 1
            });
          }
        });
    })
    .catch(error => console.error(error));
};

export const checkoutPreviousBranch = (lessonInfo: lessonInfoType,
                                        currentOpenFiles: Array<string>,
                                        currentEditorValues: Array<string>) => (dispatch: *) => {
  const currentIndex = lessonInfo.branchIndex;
  if (currentIndex === 0) {
    dispatch({
      type: CANNOT_CHECKOUT
    });
    return;
  }

  saveLesson(currentOpenFiles, currentEditorValues)
    .then(() => {
      const previousBranchName = lessonInfo.branchNames[currentIndex - 1];

      git(lessonInfo.repositoryPath)
        .add('./*')
        .commit(`Temporary commit for branch ${lessonInfo.branchNames[currentIndex]}`)
        .checkout(previousBranchName, (err) => {
          if (err) {
            dispatch({ type: CANNOT_CHECKOUT });
          } else {
            // First time seeing a branch, store the commit hash of the HEAD
            if (!Object.prototype.hasOwnProperty.call(lessonInfo.headHashes, previousBranchName)) {
              git(lessonInfo.repositoryPath)
                .revparse(['master'], (error, headHash) => {
                  const newHeadHash = { [previousBranchName]: headHash };
                  dispatch({ type: ADD_HEAD_HASH, newHeadHash });
                });
            }

            dispatch(clearEditorState());

            dispatch({
              type: CHECKOUT_PREVIOUS_BRANCH,
              currentBranch: previousBranchName,
              newBranchIndex: currentIndex - 1
            });
          }
        });
    })
    .catch(error => console.error(error));
};

export const createNewLesson = (event: Object,
                                newLessonName: string,
                                userToken: string,
                                history) => (dispatch: *) => {
  event.preventDefault();
  remote.dialog.showSaveDialog({ defaultPath: newLessonName }, (newLessonFilePath) => {
    makeDirectory(newLessonFilePath)
      .then((err) => {
        if (err) {
          console.error(`Failed to create direcotry: ${err}`);
          return;
        }
        git(newLessonFilePath)
          .init()
          .commit('Initial commit');
      })
      .then(() => {
        const config = {
          headers: {
            Authorization: `token ${userToken}`,
          }
        };

        const data = {
          name: newLessonName,
          gitignore_template: 'Node'
        };

        axios.post(`${GITHUB_API_ROOT}/user/repos`, data, config)
          .then((response) => {
            console.log(`Repository successfully created with response status ${response.status}`);

            git(newLessonFilePath)
              .addRemote('origin', response.data.html_url)
              .pull('origin', 'master')
              .push('origin', 'master');

            dispatch(loadAfterCreating(newLessonFilePath));
            history.push('/editor');
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => console.error(error));
  });
};

export const addBranch = (branch, branchName) => ({
  type: ADD_BRANCH,
  branch,
  branchName
});

export const saveLesson = (currentOpenFiles: Array<string>, currentEditorValues: Array<string>) => {
  const writePromises = currentOpenFiles.map((filePath, index) => {
    const newFileContent = currentEditorValues[index];
    return writeFile(filePath, newFileContent);
  });
  return Promise.all(writePromises);
};
