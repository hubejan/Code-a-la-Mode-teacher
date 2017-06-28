// @flow
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/auth-actions';

type authErrorType = {
  error: string,
  error_description: string,
  error_uri: string
};

type loginStateType = {
  token: ?string,
  error: {} | authErrorType,
  loggedIn: boolean
};

type loginSuccessAction = { type: 'LOGIN_SUCCESS', token: string };
type loginFailureAction = { type: 'LOGIN_FAILURE', error: authErrorType};
type logoutAction = { type: 'LOGOUT' };

type authActions =
  | loginSuccessAction
  | loginFailureAction
  | logoutAction
  | { type: $Subtype<string> };

const initialState = {
  token: null,
  error: {},
  loggedIn: false
};

function loginReducer(state: loginStateType = initialState, action: authActions) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        loggedIn: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        loggedIn: false
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        loggedIn: false
      };
    default:
      return state;
  }
}

export default loginReducer;
