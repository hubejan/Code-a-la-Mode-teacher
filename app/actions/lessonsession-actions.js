const git = require('simple-git');

export const LOAD_USER_REPOS = 'LOAD_USER_REPOS';
export const LOAD_LESSON = 'LOAD_LESSON';
export const CHECKOUT_NEXT_BRANCH = 'CHECKOUT_NEXT_BRANCH';

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
          branchNames: branchIndexArray
        } });
    });
};

export const checkoutNextBranch = (lessonInfo: Object) => (dispatch: *) => {
  const currentIndex = lessonInfo.branchIndex;
  if (currentIndex === lessonInfo.branches.length) return;

  const nextBranchName = lessonInfo.branchNames[currentIndex + 1];
  git(lessonInfo.repositoryPath)
    .checkout(nextBranchName, () => {
      dispatch({
        type: CHECKOUT_NEXT_BRANCH,
        currentBranch: nextBranchName
      });
    });
};
