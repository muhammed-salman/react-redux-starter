import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';
import { AUTH_USER, AUTH_ERROR, USER_LOGOUT } from './types';

export const signup = (formProps, callback) => async (dispatch) => {
  const { email } = formProps;
  try {
    const response = await axios.post(
      'http://localhost:3090/signup',
      formProps,
    );

    const user = await axios.post(
      'http://localhost:3090/userinfo',
      { email },
    );

    dispatch({ type: AUTH_USER, payload: { token: response.data.token, email } });
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('email', email);
    localStorage.setItem('userid', user.data._id);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

export const signin = (formProps, callback) => async (dispatch) => {
  const { email } = formProps;
  try {
    const response = await axios.post(
      'http://localhost:3090/signin',
      formProps,
    );

    const user = await axios.post(
      'http://localhost:3090/userinfo',
      { email },
    );
    dispatch({ type: AUTH_USER, payload: { token: response.data.token, email } });
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('email', email);
    localStorage.setItem('userid', user.data._id);
    // console.log(token,email,userid);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

export const signout = () => async dispatch => {
  try {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('userid');
    dispatch({ type: AUTH_USER, payload: '' });
    dispatch({ type: USER_LOGOUT, payload: '' });
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Not able to sign out' });
  }
};
