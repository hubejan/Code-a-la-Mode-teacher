// @flow
import { LOAD_USER_REPOS } from '../actions/lessonsession-actions';

export type lessonSessionStateType = {
  userRepositories: []
};

const defaultLessionSessionState = {
  userRepositories: []
};

type actionType = {
  type: string,
  repositories?: Array<Object>
};

export default function lessonsession(state: lessonSessionStateType = defaultLessionSessionState, action: actionType) {
  switch (action.type) {
    case LOAD_USER_REPOS:
      return { ...state, userRepositories: action.userRepositories };
    default:
      return state;
  }
}
