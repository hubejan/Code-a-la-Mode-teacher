// @flow
import { CLONED_REPOSITORY, VIEW_REPOSITORY_LINK } from '../actions/userrepositories-actions';

const defaultUserRepositoriesState = {
  repositoryPath: ''
};

export type userRepositoriesStateType = {
  repositoryPath: string
};

type actionType = {
  type: string,
  repositoryPath?: string
};

export default function userRepositories(state: userRepositoriesStateType = defaultUserRepositoriesState, action: actionType) {
  switch (action.type) {
    case CLONED_REPOSITORY:
      return { ...state, repositoryPath: action.repositoryPath };
    case VIEW_REPOSITORY_LINK:
      return state;
    default:
      return state;
  }
}

