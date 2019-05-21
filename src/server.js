const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });

const requestHandler = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/post/:id', (req, res) => {
      const page = '/post';
      const query = { id: req.params.id };
      return app.render(req, res, page, query);
    });

    server.get('*', (req, res) => {
      return requestHandler(req, res);
    });

    server.listen(3000, () => {
      console.log(`> Express Server Listen on http://localhost:3000`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  })
  