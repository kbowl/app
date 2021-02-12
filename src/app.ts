import express from 'express';
import config from './config';
import socket from 'socket.io'

import init from './init';

const app = express();

app.enable('trust proxy');
app.disable('view cache');

init(app);

app.listen(config.PORT, (err) => {
  if (err) throw new Error(err);
  return console.log(`Running on ${config.PORT}`);
});
