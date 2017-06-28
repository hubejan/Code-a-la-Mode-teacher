// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import filetree from './filetree-reducer';
import tickets from './tickets-reducer';
import panelView from './panelView-reducer';
import auth from './auth-reducer';
import editor from './editor-reducer';
import gitControls from './gitcontrols-reducer';
import lessonSession from './lessonSession-reducer';
import userRepositories from './userRepositories-reducer';

const rootReducer = combineReducers({
  counter,
  router,
  filetree,
  tickets,
  panelView,
  auth,
  editor,
  gitControls,
  lessonSession,
  userRepositories
});

export default rootReducer;
