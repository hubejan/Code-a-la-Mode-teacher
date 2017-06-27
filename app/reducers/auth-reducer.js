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
  failed: boolean
};

type loginSuccessAction = { type: 'LOGIN_SUCCESS', token: string };
type loginFailureAction = { type: 'LOGIN_FAILURE', error: authErrorType};
type logoutAction = { type: 'LOGOUT' };

type authActions =
  | loginSuccessAction
  | loginFailureAction
  | logoutAction;

const initialState = {
  token: null,
  error: {},
  failed: false
};

function loginReducer(state: loginStateType = initialState, action: authActions) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        failed: true
      };
    case LOGOUT:
      return {
        ...state,
        response: null,
        token: null
      };
    default:
      return state;
  }
}

export default loginReducer;
