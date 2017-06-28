// @flow
import axios from 'axios';
import gitAuth from '../utils/github.settings';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

type authInfoType = {
  client_id: string,
  client_secret: string,
  code: string
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

export const storageLogin = (token: string) => ({ type: LOGIN_SUCCESS, token });
export const teacherLogin = (authCode: string) => (dispatch: *) => {
  const authInfo = {
    client_id: gitAuth.client_id,
    client_secret: gitAuth.client_secret,
    code: authCode
  };

  return postCredentials(authInfo)
    .then(response => {
      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
        return dispatch({ type: LOGIN_SUCCESS, token: response.data.access_token });
      }
      return dispatch({ type: LOGIN_FAILURE, error: response.data });
    })
    .catch(error => {
      console.error(error);
      dispatch({ type: LOGIN_FAILURE, error });
    });
};

export const logout = () => ({ type: LOGOUT });
