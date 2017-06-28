export const LOAD_USER_REPOS = 'LOAD_USER_REPOS';

export const loadUserRepos = (userRepositories: []) => (dispatch: *) => {
  dispatch({ type: LOAD_USER_REPOS, userRepositories });
};

