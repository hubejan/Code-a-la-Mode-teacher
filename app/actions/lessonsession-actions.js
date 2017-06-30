const git = require('simple-git');

export const LOAD_USER_REPOS = 'LOAD_USER_REPOS';
export const LOAD_LESSON = 'LOAD_LESSON';
export const CHECKOUT_NEXT_BRANCH = 'CHECKOUT_NEXT_BRANCH';
export const CHECKOUT_PREVIOUS_BRANCH = 'CHECKOUT_PREVIOUS_BRANCH';
export const CANNOT_CHECKOUT = 'CANNOT_CHECKOUT';

export const loadUserRepos = (userRepositories: []) => (dispatch: *) => {
  dispatch({ type: LOAD_USER_REPOS, userRepositories });
};

export const loadAfterCloning = (lessonFilePath: string) => (dispatch: *) => {
  git(lessonFilePath)
    .branch((err, branchSummary) => {
      console.log(branchSummary);
      const branchIndexArray = Object.keys(branchSummary.branches).map((branchName) => {
        return branchName;
      });

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

export const checkoutNextBranch = (lessonInfo: Object) => (dispatch: *) => {
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
          branchIndex: currentIndex
        });
      }
    });
};

export const checkoutPreviousBranch = (lessonInfo: Object) => (dispatch: *) => {
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
          branchIndex: currentIndex
        });
      }
    });
};
