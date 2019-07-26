'use strict';

const { Shipper } = require('../models');

const getAll = (_, res) => {
  Shipper.find({}, (err, shipper) => {
	if (err)
	  return res.status(400).json(err);

	return res.status(200).json(shipper);
  })
}

module.exports = {
  getAll
}
