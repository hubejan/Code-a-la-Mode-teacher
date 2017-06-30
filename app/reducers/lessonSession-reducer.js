// @flow
import { LOAD_USER_REPOS, LOAD_LESSON } from '../actions/lessonsession-actions';

export type lessonSessionStateType = {
  userRepositories: [],
  lessonInfo: Object
};

const defaultLessionSessionState = {
  userRepositories: [],
  lessonInfo: {
    branches: {},
    branchIndex: -1,
    repositoryPath: '',
    branchNames: []
  }
};

type actionType = {
  type: string,
  repositories?: Array<Object>,
  lessonInfo?: Object,
  userRepositories?: Array<Object>,
  repositoryPath?: string
};

export default function lessonsession(state: lessonSessionStateType = defaultLessionSessionState, action: actionType) {
  switch (action.type) {
    case LOAD_USER_REPOS:
      return { ...state, userRepositories: action.userRepositories };
    case LOAD_LESSON:
      return { ...state, lessonInfo: action.lessonInfo };
    default:
      return state;
  }
}
