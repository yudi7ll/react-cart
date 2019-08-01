'use strict';

const {
  Cart,
  Customer
} = require('../models');

exports.getAll = (req, res) => {
  Cart
	.find({ 
	  customer: req.user._id
	})
	.populate('product')
	.exec((err, cart) => {
	  if (err)
		return res.status(400).json(err);

	  return res.status(200).json(cart);
	});
}

exports.insert = async (req, res) => {
  const data = req.body;
  const newCart = new Cart(data);
  const customer = await Customer.findById(req.user._id);
  const cart = await Cart.findOne().and([
	{ product: data.product },
	{ customer: customer._id }
  ]);

  // if the product already added to cart
  // then increase the qty
  if (cart) {
	cart.qty++;
	return cart.save((err, info) => {
	  if (err)
		return res.status(400).json(err);

	  return res.status(200).json(info);
	});
  }

  // else
  // assign customer id to Cart
  newCart.customer = customer._id;

  newCart.save((err) => {
	if (err)
	  return res.status(400).json(err);

	Cart
	  .find({ customer: customer._id })
	  .exec((err, cartLength) => {
	  if (err)
		return res.status(400).json(err);

	  // increase customer.cartLength
	  customer.cartLength = cartLength.length;

	  customer.save((err, info) => {
		if (err)
		  return res.status(400).json(err);

		return res.status(200).json(info);
	  });
	});
  });
}

exports.update = (req, res) => {

  const data = req.body;

  /*
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
  */

}


exports.delete = (req, res) => {
  Cart.deleteOne({ _id: req.params.id }, (err, info) => {
	if (err)
	  return res.status(401).json(err);

	return res.status(200).json(info);
  });
}
