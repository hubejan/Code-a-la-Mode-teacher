import React from 'react';
import { ipcRenderer } from 'electron';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import { add } from './actions/tickets-actions';
import { reqAndXmitFile } from './actions/filetree-actions';
import './app.global.css';
import { saveCommitAndBranch } from './utils/gitHelpers';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

ipcRenderer.on('newTicket', (event, ticket) => {
  // id may be unnecessary- refactor out later
  const id = Object.keys(store.getState().tickets).length;
  const newTicket = { id, question: ticket.question };
  saveCommitAndBranch(ticket.question);
  store.dispatch(add(newTicket));
});

ipcRenderer.on('fileReq', (event, filePath) => reqAndXmitFile(filePath));

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
