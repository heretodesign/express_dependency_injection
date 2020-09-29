'use strict';

const express = require('express');
const dogs = require('./handlers/dogs');
const axios = require('axios');

function server() {
  const app = express();
  app.get('/dogs', dogs(axios));
  return app;
}

module.exports = server;
