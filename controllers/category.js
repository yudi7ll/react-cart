'use strict';

const { Category } = require('../models');

const getAll = (_, res) => {
  Category.find({}, (err, category) => {
	if (err)
	  return res.status(400).json(err);

	return res.status(200).json(category);
  });
}

module.exports = {
  getAll
}
