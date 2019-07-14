'use strict';

const express = require('express');
const app = express();

const { auth, products } = require('../../controllers');

app.route('/')
  .get(products.getAll)
  .post(auth.isAuthenticated, products.insert);

app.route('/:id')
  .get(products.getOne)
  .put(auth.isAuthenticated, products.update)
  .delete(auth.isAuthenticated, products.delete);

module.exports = app;
