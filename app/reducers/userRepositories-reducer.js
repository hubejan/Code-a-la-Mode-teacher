// @flow
import { SELECT_REPOSITORY, CLONED_REPOSITORY, VIEW_REPOSITORY_LINK } from '../actions/userrepositories-actions';

const defaultUserRepositoriesState = {
  selectedRepository: {},
  repositoryPath: ''
};

export type userRepositoriesStateType = {
  selectedRepository: {},
  repositoryPath: string
};

type actionType = {
  type: string,
  selectedRepository?: Object,
  repositoryPath?: string
};

export default function userRepositories(state: userRepositoriesStateType = defaultUserRepositoriesState, action: actionType) {
  switch (action.type) {
    case SELECT_REPOSITORY:
      return { ...state, selectedRepository: action.selectedRepository };
    case CLONED_REPOSITORY:
      return { ...state, repositoryPath: action.repositoryPath };
    case VIEW_REPOSITORY_LINK:
      return state;
    default:
      return state;
  }
};

