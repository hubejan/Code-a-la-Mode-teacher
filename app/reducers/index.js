// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import filetree from './Filetree-reducer';
import tickets from './tickets-reducer';
import panelView from './panelView-reducer';

const rootReducer = combineReducers({
  counter,
  router,
  filetree,
  tickets,
  panelView
});

export default rootReducer;
