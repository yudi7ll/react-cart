'use strict';

const { Shop, User } = require('../../models');

exports.getAll = (_, res) => {

  Shop.find({}, (err, doc) => {
	if (err)
	  return res.status(401).json(err);

	return res.status(200).json(doc);
  });

}

exports.getOne = (req, res) => {

  Shop
	.findById(req.params.id)
	.populate('products')
	.exec((err, doc) => {
	  
	  if (err)
		return res.status(401).json(err);

	  return res.status(200).json(doc);

  });

}


exports.insert = (req, res) => {

  const data = req.body;
  const newShop = new Shop(data);

  User.findOne(req.user, (err, user) => {
	if (err)
	  return res.status(401).json(err);

	if (user.shop && !!user.shop.name)
	  return res.status(401).json({ msg: 'User already has a store' });

	user.shop = newShop._id;

	user.save(err => {
	  if (err)
		return res.status(401).json(err);

	  newShop.user = user._id;

	  newShop.save((err, shopInfo) => {
		if (err)
		  return res.status(401).json(err);

		return res.status(200).json(shopInfo);
	  });
	});

  });


}

exports.update = (req, res) => {

  const id = req.params.id;
  const data = req.body;

  Shop.findById(id, (err, doc) => {

	if (err)
	  return res.status(401).json(err);

	doc.name = data.name || doc.name;
	doc.description = data.description || doc.description;
	doc.rating = data.rating || doc.rating;
	doc.location = data.location || doc.location
	doc.modified = new Date();

	doc.save((err, info) => {

	  if (err)
		return res.status(401).json(err);

	  return res.status(200).json(info);

	});

  });

}

exports.delete = (req, res) => {

  Shop.deleteOne({ _id: req.params.id }, (err, info) => {
	if (err)
	  return res.status(401).json(err);

	return res.status(200).json(info);
  });

}
