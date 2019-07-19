'use strict';

const { Product } = require('../models');

const getAll = (_, res) => {
  Product.find({}, (err, doc) => {
	if (err)
	  return res.status(401).json(err);

	return res.status(200).json(doc);
  });
}

const getOne = (req, res) => {
  Product.findById(req.params.id, (err, doc) => {
	if (err)
	  return res.status(401).json(err);

	return res.status(200).json(doc);
  });
}

const getByCategory = (req, res) => {
  Product
	.find({ category: req.params.category })
	.exec((err, product) => {
	  if (err)
		return res.status(400).json(err);

	  return res.status(200).json(product);
	});
}

module.exports = {
  getAll,
  getOne,
  getByCategory
}
