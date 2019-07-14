const express = require('express');
const app = express();

const cartHandler = require('../../controllers').cart;

app.route('/')
  .get(cartHandler.getAll)
  .post(cartHandler.insert);

app.route('/:id')
  .put(cartHandler.update)
  .delete(cartHandler.delete);

module.exports = app;
