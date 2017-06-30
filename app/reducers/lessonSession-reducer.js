// @flow
import { LOAD_USER_REPOS, LOAD_LESSON, CHECKOUT_NEXT_BRANCH, CHECKOUT_PREVIOUS_BRANCH, CANNOT_CHECKOUT } from '../actions/lessonsession-actions';

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
  currentBranch?: string,
  branchIndex?: number
};

export default function lessonsession(state: lessonSessionStateType = defaultLessionSessionState, action: actionType) {
  switch (action.type) {
    case LOAD_USER_REPOS:
      return { ...state, userRepositories: action.userRepositories };
    case LOAD_LESSON:
      return { ...state, lessonInfo: action.lessonInfo };
    case CHECKOUT_NEXT_BRANCH: {
      const nextBranchInfo = {
        ...state.lessonInfo,
        currentBranch: action.currentBranch,
        branchIndex: action.branchIndex + 1
      };
      return { ...state, lessonInfo: nextBranchInfo };
    }
    case CHECKOUT_PREVIOUS_BRANCH: {
      const previousBranchInfo = {
        ...state.lessonInfo,
        currentBranch: action.currentBranch,
        branchIndex: action.branchIndex - 1
      };
      return { ...state, lessonInfo: previousBranchInfo };
    }
    case CANNOT_CHECKOUT:
      return state;
    default:
      return state;
  }
}
