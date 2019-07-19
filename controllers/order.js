'use strict';

const { Order, OrderDetail } = require('../models');

const getAll = (_, res) => {
  Order.find({}, (err, order) => {
	if (err)
	  return res.status(400).json(err);

	return res.status(200).json(order);
  });
}

const getOne = (req, res) => {
  Order.findById(req.params.id, (err, order) => {
	if (err)
	  return res.status(400).json(err);

	return res.status(200).json(order);
  });
}

const orderProduct = (req, res) => {
  const customerID = req.user._id;
  const data = Object.assign(req.body, {
	customer: customerID,
  });

  // insert orderDetail first to get the _id
  OrderDetail.insertMany(data.orderDetail, (err, orderDetailInfo) => {
	if (err)
	  return res.status(400).json(err);

	const orderDetailID = orderDetailInfo.map(v => v._id);
	const newOrder = new Order(data);

	newOrder.orderDetail = orderDetailID;
	newOrder.save((err, info) => {
	  if (err)
		return res.status(400).json(err);

	  return res.status(200).json(info);
	});
  });
}

module.exports = {
  getAll,
  getOne,
  orderProduct
}
