const express = require('express');
const app = express();

const { isAuthenticated } = require('../controllers').auth;
const cartHandler = require('../controllers').cart;

app.route('/')
  .get(isAuthenticated, cartHandler.getAll)
  .post(isAuthenticated, cartHandler.insert);

app.route('/:id')
  .put(isAuthenticated, cartHandler.update)
  .delete(isAuthenticated, cartHandler.delete);

module.exports = app;
