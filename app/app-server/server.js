import { ipcRenderer } from 'electron';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Node HTTP server
const server = require('http').Server(app);

// try {
//   require.resolve('http');
//   ipcRenderer.send('server-start', require.resolve('http'));
// } catch (e) {
//   ipcRenderer.send('server-start', 'HTTP NOT FOUND');
// }


// CONNECTION THIS TO HTTP SERVER IS BREAKING EVERYTHING
// !!!!!!!!!!!!!!!!!!! ERROR !!!!!!!!!!!!!!!!!!!!!!!!!!!
// try {
//   const io = require('socket.io')(server, {
//     serveClient: false
//   });
// } catch (e) {
//   ipcRenderer.send('server-start', `${e.stack}`);
// }
const io = require('socket.io')(server, {
  serveClient: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'serverIndex.html'));
});

// try {
//   require.resolve('socket.io');
//   ipcRenderer.send('server-start', require.resolve('socket.io'));
// } catch (e) {
//   ipcRenderer.send('server-start', 'SOCKET IO NOT FOUND');
// }

try {
  server.listen(3030, () => {
    ipcRenderer.send('server-start', 'Server listening on port 3000');
  });

  io.on('connection', (socket) => {
    ipcRenderer.send('server-start', `SOCKET IO ${socket.id}`);
  });
} catch (e) {
  ipcRenderer.send('server-start', `ERROR ... ${e}`);
}

// TODO: On instructor's editor change, emit the new state of editor value
//       Performance-wise, might be best to just bounce messages through main process

// io.on('connection', (socket) => {
//   ipcRenderer.send('server-connection', socket);
// });

// Hook this up to io.emit
ipcRenderer.on('editor-change', (event, editorValue) => {
  // Temporary fix to see if server actually got the right stuff
  ipcRenderer.send('server-start', `Editor value: ${editorValue} `);
});

// module.exports = server;
