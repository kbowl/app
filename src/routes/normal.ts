import { Router } from 'express';
import { nanoid } from 'nanoid';

export default {
  path: '/',
  action() {
    const router = new Router();

    router.get('/', (_req, res) => {
      res.render('index', { title: 'Home' });
    });

    router.get('/room/:id', (req, res) => {
      res.render('team', {
        title: 'Team',
        id: req.params.id,
      });
    });

    router.get('/host', (_req, res) => {
      res.render('host', { title: 'Host', id: nanoid(4) });
    });

    router.get('/team', (_req, res) => {
      res.render('team');
    });

    return router;
  },
};

// test
