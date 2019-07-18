'use strict';

const { Cart } = require('../models');

exports.getAll = (_, res) => {

  Cart.find({}, (err, doc) => {
	if (err)
	  return res.status(401).json(err);

	return res.status(200).json(doc);
  });

}

exports.insert = (req, res) => {

  const data = req.body;
  const newCart = new Cart(data);

  newCart.save((err, info) => {
	if (err)
	  return res.status(401).json(err);

	return res.status(401).json(info);
  });

}

exports.update = (req, res) => {

  const data = req.body;

  Cart.findById(req.params.id, (err, doc) => {
	if (err)
	  return res.status(401).json(err);

	doc.products = data.products || doc.products;
	doc.qty = data.qty || doc.qty;
	doc.modified = new Date();

	doc.save((err, info) => {
	  if (err)
		return res.status(401).json(err);

	  return res.status(200).json(info);
	});
  });

}


exports.delete = (req, res) => {

  Cart.deleteOne({ _id: req.params.id }, (err, info) => {
	if (err)
	  return res.status(401).json(err);

	return res.status(200).json(info);
  });

}
