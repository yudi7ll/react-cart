const express = require('express');
const app = express();

const {
  register,
  login,
  logout,
  checkAuthStatus
} = require('../../controllers').auth;

app.get('/isAuthenticated', checkAuthStatus);
app.post('/signup', register);
app.post('/login', login);
app.post('/logout', logout);

module.exports = app;
