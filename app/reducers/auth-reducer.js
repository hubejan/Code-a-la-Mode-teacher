import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/auth-actions';

const initialState = {
  response: {},
  token: null,
  failed: false
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.access_token
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        failed: true,
        response: action.payload
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
