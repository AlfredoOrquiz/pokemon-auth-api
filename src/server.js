'use strict';

const express = require('express');
const cors = require('cors');

const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./routes/routes.js');
const v1Routes = require('./routes/v1.js');
const app = express();
let port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', v1Routes);
app.use('*', notFoundHandler);
app.use(errorHandler);
app.use(authRoutes);
app.use(notFound);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
