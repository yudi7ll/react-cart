const express = require('express');
const app = express();

const { getAll } = require('../controllers').shipper;

app.route('/')
  .get(getAll)

module.exports = app;
