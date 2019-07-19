'use strict';

const express = require('express');
const app = express();

const { getAll, getOne } = require('../controllers').product;

app.route('/')
  .get(getAll)

app.route('/:id')
  .get(getOne)

module.exports = app;
