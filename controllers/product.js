'use strict';

const { Product, Customer } = require('../models');

exports.getAll = (_, res) => {
  Product.find({}, (err, doc) => {
	if (err)
	  return res.status(401).json(err);

	return res.status(200).json(doc);
  });
}

exports.getOne = (req, res) => {
  Product.findById(req.params.id, (err, doc) => {
	if (err)
	  return res.status(401).json(err);

	return res.status(200).json(doc);
  });
}
