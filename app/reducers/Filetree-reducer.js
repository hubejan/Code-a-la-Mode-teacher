// @flow
import { GOT_USERNAME } from '../actions/filetree-actions';

export type filetreeStateType = {
  username: string
};

type actionType = {
  type: string,
  username?: string
};

const defaultFiletree = {
  username: ''
};

export default function filetree(state: filetreeStateType = defaultFiletree, action: actionType) {
  switch (action.type) {
    case GOT_USERNAME:
      console.log(' ++++++++++ Action');
      // return action.username;
      // return Object.assign(state, { [action.id]: action.ticket });
      return { ...state, username: action.username };
    default:
      return state;
  }
}
