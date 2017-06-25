import { ipcRenderer } from 'electron';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const server = require('http').Server(app);


const io = require('socket.io-client')(server);

server.listen(80);


server.listen(3000, () => {
  ipcRenderer.send('server-start');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'serverIndex.html'));
});

// TODO: On instructor's editor change, emit the new state of editor value
//       Performance-wise, might be best to just bounce messages through main process

io.on('connection', (socket) => {
  ipcRenderer.send('server-connection', socket);
});

// Hook this up to io.emit
ipcRenderer.on('editor-change', (event, editorValue) => {
  // Temporary fix to see if server actually got the right stuff
  ipcRenderer.send('server-start', `Editor value: ${editorValue} `);
});

// module.exports = server;
