// @flow
import {
  LOAD_USER_REPOS,
  LOAD_LESSON,
  CHECKOUT_NEXT_BRANCH,
  CHECKOUT_PREVIOUS_BRANCH,
  CANNOT_CHECKOUT,
  ADD_BRANCH,
  CREATED_NEW_LESSON,
  ADD_HEAD_HASH
} from '../actions/lessonsession-actions';

export type lessonInfoType = {
  branches: {},
  branchIndex: number,
  repositoryPath: string,
  branchNames: [],
  currentBranch: string,
  headHashes: {}
};

export type lessonSessionStateType = {
  userRepositories: [],
  lessonInfo: lessonInfoType
};

const defaultLessionSessionState = {
  userRepositories: [],
  lessonInfo: {
    branches: {},
    branchIndex: -1,
    repositoryPath: '',
    branchNames: [],
    currentBranch: '',
    headHashes: {}// hashes of the refs we want HEAD to point to on each branch
  }
};

type actionType = {
  type: string,
  lessonInfo?: lessonInfoType,
  userRepositories?: Array<Object>,
  currentBranch?: string,
  newBranchIndex?: number,
  newHeadHash?: {}
};

export default function lessonsession(state: lessonSessionStateType = defaultLessionSessionState,
                                      action: actionType) {
  switch (action.type) {
    case LOAD_USER_REPOS:
      return { ...state, userRepositories: action.userRepositories };
    case CREATED_NEW_LESSON:
      return { ...state, lessonInfo: action.lessonInfo };
    case LOAD_LESSON:
      return { ...state, lessonInfo: action.lessonInfo };
    case CHECKOUT_NEXT_BRANCH: {
      const nextBranchInfo = {
        ...state.lessonInfo,
        currentBranch: action.currentBranch,
        branchIndex: action.newBranchIndex
      };
      return { ...state, lessonInfo: nextBranchInfo };
    }
    case CHECKOUT_PREVIOUS_BRANCH: {
      const previousBranchInfo = {
        ...state.lessonInfo,
        currentBranch: action.currentBranch,
        branchIndex: action.newBranchIndex
      };
      return { ...state, lessonInfo: previousBranchInfo };
    }
    case CANNOT_CHECKOUT: {
      return state;
    }
    case ADD_BRANCH: {
      const newBranchIncluded = {
        ...state.lessonInfo,
        branches: { ...state.lessonInfo.branches, [action.branchName]: action.branch },
        branchNames: [...state.lessonInfo.branchNames, action.branchName]
      };
      return { ...state, lessonInfo: newBranchIncluded };
    }
    case ADD_HEAD_HASH: {
      const newHeadIncluded = {
        ...state.lessonInfo,
        headHashes: Object.assign({}, state.lessonInfo.headHashes, action.newHeadHash)
      };
      return { ...state, lessonInfo: newHeadIncluded };
    }
    default:
      return state;
  }
}
