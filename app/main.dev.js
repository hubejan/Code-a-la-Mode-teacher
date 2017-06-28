/* eslint global-require: 1, flowtype-errors/show-errors: 0 */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build-main`, this file is compiled to
 * `./app/main.prod.js` using webpack. This gives us some performance wins.
 *
 * @flow
 */
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

import MenuBuilder from './menu';

// Global reference of window objects so garbage collection does not close it automatically
// TODO: Store multiple window references into an array
let mainWindow = null;
let serverWindow = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
  require('electron-debug')();
  const p = path.join(__dirname, '..', 'app', 'node_modules');
  require('module').globalPaths.push(p);
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = [
    'REACT_DEVELOPER_TOOLS',
    'REDUX_DEVTOOLS'
  ];

  return Promise
    .all(extensions.map(name => installer.default(installer[name], forceDownload)))
    .catch(console.log);
};


/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('ready', async () => {
  if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728
  });

  mainWindow.loadURL(`file://${__dirname}/app.html`);

  // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }

    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

    // Renderer process handling socket server
  serverWindow = new BrowserWindow({
    show: false,
    width: 1000,
    height: 700
  });

  serverWindow.loadURL(`file://${__dirname}/server.html`);

  serverWindow.webContents.on('did-finish-load', () => {
    if (!serverWindow) {
      throw new Error('"serverWindow" is not defined');
    }

    console.log('Server window loaded...');
  });

  serverWindow.on('closed', () => {
    serverWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();
});

ipcMain.on('server-start', (event, arg) => {
  console.log('Socket server started...', arg);
});

ipcMain.on('server-connection', (event, arg) => {
  console.log(`User with Socket ID: ${arg} connected to server...`);
});

ipcMain.on('server-disconnect', (event, arg) => {
  console.log(`User with Socket ID: ${arg} disconnected from server...`);
});

ipcMain.on('server-error', (event, arg) => {
  console.log(`Socket server could not start ... ${arg}`);
});

// Message received when editor changes
ipcMain.on('editor-change', (event, arg) => {
  // console.log('Editor value is now...', arg);
  serverWindow.webContents.send('editor-change', arg);
});
