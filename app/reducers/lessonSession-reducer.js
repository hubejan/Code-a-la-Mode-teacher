// @flow
import { LOAD_USER_REPOS, LOAD_LESSON } from '../actions/lessonsession-actions';

export type lessonSessionStateType = {
  userRepositories: [],
  lessonBranches: Array<string>
};

const defaultLessionSessionState = {
  userRepositories: [],
  lessonBranches: []
};

type actionType = {
  type: string,
  repositories?: Array<Object>,
  lessonBranches?: Array<string>
};

export default function lessonsession(state: lessonSessionStateType = defaultLessionSessionState, action: actionType) {
  switch (action.type) {
    case LOAD_USER_REPOS:
      return { ...state, userRepositories: action.userRepositories };
    case LOAD_LESSON:
      return { ...state, lessonBranches: action.lessonBranches };
    default:
      return state;
  }
}
