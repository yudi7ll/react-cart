const express = require('express');

const app = express();

const { user } = require('../../controllers');

app.get('/:username', user.getOne);

module.exports = app;
