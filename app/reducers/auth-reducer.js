import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/auth-actions';

const initialState = {
  token: null,
  error: {},
  failed: false
};

export default function loginReducer(state = initialState, action) {
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
