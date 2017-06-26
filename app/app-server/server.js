import { ipcRenderer } from 'electron';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Node HTTP server
const server = require('http').Server(app);

const io = require('socket.io')(server, {
  serveClient: false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'serverIndex.html'));
});

try {
  server.listen(3030, () => {
    ipcRenderer.send('server-start', 'Server listening on port 3000');
  });

  io.on('connection', (socket) => {
    ipcRenderer.send('server-connection', socket.id);

    socket.on('disconnect', () => {
      ipcRenderer.send('server-disconnect', socket.id);
    });
  });
} catch (e) {
  ipcRenderer.send('server-error', e);
}

// TODO: On instructor's editor change, emit the new state of editor value
//       Performance-wise, might be best to just bounce messages through main process


// Hook this up to io.emit
ipcRenderer.on('editor-change', (event, editorValue) => {
  // Temporary fix to see if server actually got the right stuff
  ipcRenderer.send('server-start', `Editor value: ${editorValue} `);

  io.emit('editorChanges', editorValue);
});
