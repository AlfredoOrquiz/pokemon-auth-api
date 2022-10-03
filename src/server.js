'use strict';

const express = require('express');
const cors = require('cors');

const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./routes/authRoutes.js');
const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authRoutes);
app.get('/hello', (req, res) => {
  res.send('Hello');
});
app.use('*', notFoundHandler);
app.use(errorHandler);
app.use(notFound);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
