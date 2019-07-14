'use strict';

const express = require('express');
const app = express();

const { shop, auth } = require('../../controllers');

app.route('/')
  .get(shop.getAll)
  .post(auth.isAuthenticated, shop.insert)

app.route('/:id')
  .get(shop.getOne)
  .put(auth.isAuthenticated, shop.update)
  .delete(auth.isAuthenticated, shop.delete)

module.exports = app;
