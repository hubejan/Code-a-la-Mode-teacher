// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import filetree from './filetree-reducer';


const rootReducer = combineReducers({
  counter,
  router,
  filetree
});

export default rootReducer;
