'use strict';

const express = require('express');
const app = express();

const {
  getAll,
  getOne,
  getByCategory
} = require('../controllers').product;

app.route('/')
  .get(getAll)

app.route('/:id')
  .get(getOne)

app.route('/category/:category')
  .get(getByCategory)

module.exports = app;
