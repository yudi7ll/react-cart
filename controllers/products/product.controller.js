'use strict';

const { Products, Shop, User } = require('../../models');

exports.getAll = (_, res) => {

  Products
	.find({})
	.populate('shop')
	.exec((err, doc) => {

	  if (err)
		return res.status(401).json(err);

	  return res.status(200).json(doc);

  });

}

exports.getOne = (req, res) => {

  Products
	.findById(req.params.id)
	.populate('shop')
	.exec((err, doc) => {

	  if (err)
		return res.status(401).json(err);

	  return res.status(200).json(doc);

	});

}

exports.insert = (req, res) => {
  const data = req.body;
  const newProduct = new Products(data);

  // find user info
  User.findOne(req.user, (err, user) => {
	if (err)
	  return res.status(400).json(err);

	// find shop info from user info
	Shop.findById(user.shop, (err, shop) => {
	  if (err)
		return res.status(400).json(err);

	  newProduct.save((err, newProdInfo) => {
		if (err)
		  return res.status(400).json(err);

		// add products id to Shop.products
		shop.products.push(newProdInfo._id);
		shop.save(err => {
		  if (err)
			return res.status(400).json(err);

		  return res.status(200).json(newProdInfo);
		});
	  });
	})
  });
}

exports.update = (req, res) => {

  const data = req.body;

  Products.findById(req.params.id, (err, doc) => {
	if (err)
	  return res.status(401).json(err);

	doc.name = data.name || doc.name;
	doc.description = data.description || doc.description;
	doc.location = data.location || doc.location;
	doc.rating = data.rating || doc.rating;
	doc.modified = new Date();

	doc.save((err, info) => {
	  if (err)
		return res.status(401).json(err);

	  return res.status(200).json(info);
	});
  });

}

exports.delete = (req, res) => {

  Products.deleteOne({ _id: req.params.id }, (err, info) => {
	if (err)
	  return res.status(401).json(err);

	return res.status(200).json(info);
  });

}
