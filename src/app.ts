import express from 'express';
import config from './config';
import { Server } from 'socket.io';
import { createServer } from 'http';
import nanoid from 'nanoid';

const app = express();

const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Connected');

  socket.on('ping', () => {
    socket.emit('pong');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected');
  });
});

import init from './init';

app.enable('trust proxy');
app.disable('view cache');

init(app);

server.listen(config.PORT, () => {
  console.log(`Running on ${config.PORT}`);
});
