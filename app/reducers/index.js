// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import tickets from './tickets-reducer';
import panelView from './panelView-reducer';

const rootReducer = combineReducers({
  counter,
  router,
  tickets,
  panelView
});

export default rootReducer;
