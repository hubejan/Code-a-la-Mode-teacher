// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import filetree from './filetree-reducer';
import tickets from './tickets-reducer';
import panelView from './panelView-reducer';
import auth from './auth-reducer';
import editor from './editor-reducer';
import gitControls from './gitcontrols-reducer';
import lessonSession from './lessonSession-reducer';
import userRepositories from './userRepositories-reducer';
import electronTree from './electron-tree-reducer';

const rootReducer = combineReducers({
  router,
  filetree,
  tickets,
  panelView,
  auth,
  editor,
  gitControls,
  lessonSession,
  userRepositories,
  electronTree
});

export default rootReducer;
