const git = require('simple-git');

export const LOAD_USER_REPOS = 'LOAD_USER_REPOS';
export const LOAD_LESSON = 'LOAD_LESSON';

export const loadUserRepos = (userRepositories: []) => (dispatch: *) => {
  dispatch({ type: LOAD_USER_REPOS, userRepositories });
};

export const loadAfterCloning = (lessonFilePath: string) => (dispatch: *) => {
  git(lessonFilePath)
    .branch((err, branchSummary) => {
      dispatch({ type: LOAD_LESSON, lessonBranches: branchSummary.all });
    });
};

