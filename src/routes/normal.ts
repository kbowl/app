import { Router } from 'express';
import { nanoid } from 'nanoid';

export default {
  path: '/',
  action() {
    const router = new Router();

    router.get('/', (_req, res) => {
      res.render('index',{ title: 'Home' });
    });

    router.get('/host', (_req, res) => {
      res.render('host', { title: 'Host' });
    });

    router.get('/team', (_req, res) => {
      res.render('team', {
        title: 'Team'
      });
    });

    router.get('/create', (_req, res) => {
      res.redirect(301, `/host/${nanoid(4)}`);
    });

    router.get('/host/:id', (req, res) => {
      res.render('host', { id: req.params.id });
    });

    router.get('/host', (_req, res) => {
      res.render('host');
    });

    router.get('/team', (_req, res) => {
      res.render('team');
    });

    return router;
  },
};
