// @flow
import { SELECT_REPOSITORY } from '../actions/userrepositories-actions';
const defaultUserRepositoriesState = {
  selectedRepository: {}
};

export type userRepositoriesStateType = {
  selectedRepository: {}
}

type actionType = {
  type: string,
  selectedRepository?: Object
};

export default function userRepositories(state: userRepositoriesStateType = defaultUserRepositoriesState, action: actionType) {
  switch (action.type) {
    case SELECT_REPOSITORY:
      return { ...state, selectedRepository: action.selectedRepository };
    default:
      return state;
  }
};

