import express from 'express';
import config from './config';
import { Server } from 'socket.io';
import { createServer } from 'http';
import nanoid from 'nanoid';

const app = express();

const server = createServer(app);
const io = new Server(server);

io.on('connection',(socket) => {
  console.log('Connected');
  socket.id = nanoid.nanoid(4)

  socket.on('ping', () => {
    socket.emit('pong', socket.id);
  });

  socket.on('create', (data) => {
  	socket.join(data)
  })

  socket.on('disconnect', () => {
    console.log('Disconnected');
  });
});

import init from './init';

app.enable('trust proxy');
app.disable('view cache');

init(app).then(() => {
  console.log('Initialized app')
});

app.get('/create', (res, _) => {
  res.redirect(301, `${nanoid.nanoid(4)}`)
})

server.listen(config.PORT, () => {
  console.log(`Running on ${config.PORT}`);
});
