import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { USER_LOGOUT } from '../actions/types';
import auth from './auth';

const appReducer = combineReducers({
  auth,
  form: formReducer,
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
