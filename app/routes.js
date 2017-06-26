/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import RightPanel from './containers/RightPanelContainer';
import EditorContainer from './containers/EditorContainer';


export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/panelView" component={RightPanel} />
      <Route path="/editor" component={EditorContainer} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
