// @flow
import { RECEIVED_USER_REPOS, SAVE_LESSON_GITHUB } from '../actions/gitcontrols-actions';

export type gitcontrolsStateType = {
  repositories: Array<Object>
};

const defaultGitControlsState = {
  repositories: []
};

type actionType = {
  type: string,
  repositories?: Array<Object>
};

export default function gitControls(
  state: gitcontrolsStateType = defaultGitControlsState, action: actionType)
{
  switch (action.type) {
    case RECEIVED_USER_REPOS:
      return { ...state, repositories: action.repositories };
    case SAVE_LESSON_GITHUB:
      return state;
    default:
      return state;
  }
}
