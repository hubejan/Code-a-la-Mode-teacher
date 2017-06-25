// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import editorValue from './editor_reducer';

const rootReducer = combineReducers({
  counter,
  editorValue,
  router,
});

export default rootReducer;
