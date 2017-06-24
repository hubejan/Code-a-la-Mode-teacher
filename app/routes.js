/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import { configureStore } from './store/configureStore';
import { getUsername } from './actions/filetree-actions';

// import './app.global.css';

const store = configureStore();

const onHomeEnter = () => {
  console.log('reached ON HOME ENTER');
  store.dispatch(getUsername());
  return (<HomePage />);
};

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/" render={onHomeEnter} />
    </Switch>
  </App>
);
