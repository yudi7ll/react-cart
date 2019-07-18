'use strict';

const express = require('express');
const app = express();

const { auth, product } = require('../controllers');
const { isAuthenticated } = auth;
const { getAll, getOne, insert, update } = product;

app.route('/')
  .get(getAll)
  .post(isAuthenticated, insert);

app.route('/:id')
  .get(getOne)
  .put(isAuthenticated, update)

module.exports = app;
