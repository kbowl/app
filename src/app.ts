import express from 'express';
import config from './config';
import { Server } from 'socket.io';
import { createServer } from 'http';

const app = express();

let state = new Map();

const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Connected');

  socket.on('ping', (data) => {
    socket.emit('pong', Math.abs(Date.now() - parseInt(data)));
  });

  socket.on('create', (id) => {
    if (state.has(id)) {
      io.emit('create', false);
    } else {
      socket.join(id);
      state.set(id, {
        host: socket.id,
        teams: [],
      });
      io.emit('create', true);
    }
  });

  socket.on('join', ({ id, teamName }) => {
    if (state.has(id)) {
      const room = state.get(id);
      const team = room.teams.filter(({ name }) => teamName.trim() === name);

      if (team.length !== 0) {
        if (!team[0].members.includes(socket.id)) team[0].members.push(socket.id);
      } else {
        room.teams.push({
          name: teamName,
          members: [socket.id],
        });
      }

      socket.join(id);

      io.to(id).emit('join', teamName);
    }
  });

  socket.on('buzz', ({ id, teamName }) => {
    if (state.has(id)) {
      const team = state.get(id).teams.filter(({ name }) => teamName.trim() === name);
      if (team.length > 0) {
        if (team[0].members.includes(socket.id)) {
          socket.to(id).emit('buzz', teamName);
        }
      }
    }
  });

  socket.on('score', ({ id, score, teamName }) => {
    if (state.has(id)) {
      const { host } = state.get(id);
      if (host === socket.id) {
        socket.to(id).emit('score', { id, score, teamName });
      }
    }
  });

  socket.on('disconnect', data => {
    state.forEach((value, key) => {
      if (value.host === socket.id) {
        io.to(key).emit('quit')
        state.delete(key)
      } else {
      	console.log(value)
        for (const team of value.teams) {
          console.log(team)
        }
        // let new_arr = []
      	// for (const team of value.teams) {
      	//   new_arr = team.members.filter(a => a !== socket.id)
        // }
      	//
      }

    })
    console.log(`Disconnected: ${data}`);
  });
});

import init from './init';

app.enable('trust proxy');
app.disable('view cache');

init(app).then(() => {
  console.log('Initialized app');
});

server.listen(config.PORT, () => {
  console.log(`Running on ${config.PORT}`);
});
