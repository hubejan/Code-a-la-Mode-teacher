// @flow
import axios from 'axios';
import gitAuth from '../utils/github.settings';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

type authInfoType = {
  client_id: string,
  client_secret: string,
  authCode: string
};

const postCredentials = (authInfo: authInfoType) => {
  const url = 'https://github.com/login/oauth/access_token';
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  };
  return axios.post(url, authInfo, config);
};

export const teacherLogin = (authCode: string) => (dispatch: *) => {
  const authInfo = {
    client_id: gitAuth.client_id,
    client_secret: gitAuth.secret,
    authCode
  };

  return postCredentials(authInfo)
    .then(response => dispatch({ type: LOGIN_SUCCESS, token: response.data.access_token }))
    .catch(error => {
      console.error(error);
      dispatch({ type: LOGIN_FAILURE, payload: error.response.data });
    });
};

export const logout = () => ({ type: LOGOUT });

// export const loginUser = (code) => {
//   return (dispatch, getState) => {

//     const url = 'https://github.com/login/oauth/access_token';
//     const method = 'POST';
//     const data = {
//       client_id: options.client_id,
//       client_secret: options.secret,
//       code: code
//     };

//     dispatch({type: LOGIN.REQUEST});

//     return apiRequest(url, method, data)
//       .then((response) => {
//         return dispatch({type: LOGIN.SUCCESS, payload: response.data});
//       })
//       .then(fetchUsername())
//       .catch((error) => {
//         console.error(error);
//         dispatch({type: LOGIN.FAILURE, payload: error.response.data});
//       });

//   };
// }
