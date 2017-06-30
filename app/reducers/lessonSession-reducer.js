// @flow
import { LOAD_USER_REPOS, LOAD_LESSON, CHECKOUT_NEXT_BRANCH } from '../actions/lessonsession-actions';

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
    branchNames: [],
    currentBranch: '',
  }
};

type actionType = {
  type: string,
  repositories?: Array<Object>,
  lessonInfo?: Object,
  userRepositories?: Array<Object>,
  repositoryPath?: string,
  currentBranch?: string
};

export default function lessonsession(state: lessonSessionStateType = defaultLessionSessionState, action: actionType) {
  switch (action.type) {
    case LOAD_USER_REPOS:
      return { ...state, userRepositories: action.userRepositories };
    case LOAD_LESSON:
      return { ...state, lessonInfo: action.lessonInfo };
    case CHECKOUT_NEXT_BRANCH:
      const newLessonInfo = { ...state.lessonInfo, currentBranch: action.currentBranch}
      return {...state, lessonInfo: newLessonInfo }
      // return state;
    default:
      return state;
  }
}
