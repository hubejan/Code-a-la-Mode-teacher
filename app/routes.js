/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import RightPanel from './containers/RightPanelContainer';
import LoginComponent from './components/LoginComponent';
import LandingPageContainer from './containers/LandingPageContainer';
import LessonSessionContainer from './containers/LessonSessionContainer';
// import LessonInitContainer from './containers/LessonInitContainer';

export default () => (
  <App>
    <Switch>
      <Route path="/editor" component={LessonSessionContainer} />
      <Route path="/login" component={LoginComponent} />
      <Route path="/panelView" component={RightPanel} />
      <Route path="/" component={LandingPageContainer} />
    </Switch>
  </App>
);
      // <Route path="/lessonInit" component={LessonInitContainer} />
