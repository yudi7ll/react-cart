const express = require('express');

const app = express();

const { getOne } = require('../controllers').customer;

app.get('/:username', getOne);

module.exports = app;
