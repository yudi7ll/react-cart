const express = require('express');
const app = express();

const { getAll } = require('../controllers').category;

app.route('/')
.get(getAll)

module.exports = app;
