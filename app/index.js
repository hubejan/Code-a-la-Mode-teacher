import React from 'react';
import { ipcRenderer } from 'electron';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
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
  if (store.getState().lessonSession.lessonInfo.repositoryPath) {
    saveCommitAndBranch(ticket.question);
  }
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

export default store;
