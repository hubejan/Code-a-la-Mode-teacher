// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import tickets from './tickets-reducer';
import panelView from './panelView-reducer';
import auth from './auth-reducer';

const rootReducer = combineReducers({
  counter,
  router,
  tickets,
  panelView,
  auth
});

export default rootReducer;
