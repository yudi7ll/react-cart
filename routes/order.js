const express = require('express');
const app = express();

const { auth, order } = require('../controllers');
const { isAuthenticated } = auth;
const { orderProduct } = order;

app.route('/')
  .post(isAuthenticated, orderProduct);

module.exports = app;
