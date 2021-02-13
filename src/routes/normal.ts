import { Router } from 'express';

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

    return router;
  },
};
