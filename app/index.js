import React from 'react';
import { ipcRenderer } from 'electron';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import { add } from './actions/tickets-actions';
import './app.global.css';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

ipcRenderer.on('newTicket', (event, ticket) => {
  // length temporary.. in reality if we want to open up a past lesson and see its
  // tickets, we need some kind of time machine feature where upon lesson/repo
  // fetch, all help tickets/branches are inserted into the
  // ticket reducer in-order?
  const id = Object.keys(store.getState().tickets).length;
  const newTicket = { id, question: ticket.question }; // code/state later
  store.dispatch(add(newTicket));
});

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
