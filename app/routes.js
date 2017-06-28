/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
// import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import RightPanel from './containers/RightPanelContainer';
import LoginComponent from './components/LoginComponent';
import EditorContainer from './containers/EditorContainer';
import LandingPageContainer from './containers/LandingPageContainer';
import LessonSessionContainer from './containers/LessonSessionContainer';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/panelView" component={RightPanel} />
      <Route path="/login" component={LoginComponent} />
      <Route path="/editor" component={EditorContainer} />
      <Route path="/" component={LandingPageContainer} />
      <Route path="/editor" component={LessonSessionContainer} />
    </Switch>
  </App>
);
