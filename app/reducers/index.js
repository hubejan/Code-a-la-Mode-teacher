// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import filetree from './filetree-reducer';
import tickets from './tickets-reducer';
import panelView from './panelView-reducer';
import editor from './editor-reducer';

const rootReducer = combineReducers({
  counter,
  router,
  filetree,
  tickets,
  panelView,
  editor
});

export default rootReducer;
