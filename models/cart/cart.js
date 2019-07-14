const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({

  productID: {
	type: Schema.Types.ObjectId,
	ref: 'Products',
	required: true
  },

  customerID: {
	type: Schema.Types.ObjectId,
	ref: 'Customers',
	required: true
  },

  qty: {
	type: Number,
	default: 1,
	required: true
  },

  created: {
	type: Date,
	default: Date.now,
	required: true
  },

  modified: {
	type: Date,
	default: Date.now,
	required: true
  }

});

module.exports = mongoose.model('Cart', cartSchema);
