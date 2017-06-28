// @flow
// export type userRepositoriesStateType = {
//   repositories: Array<Object>
// };

// const defaultGitControlsState = {
//   repositories: []
// };

type actionType = {
  type: string,
  repositories?: Array<Object>
};

export default function userRepositories(state: asdfas = [], action: actionType) {
  switch (action.type) {
    // case RECEIVED_USER_REPOS:
    //   return { ...state, repositories: action.repositories };
    default:
      return state;
  }
}
