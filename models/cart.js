const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  product: {
	type: Schema.Types.ObjectId,
	ref: 'Product',
	required: true
  },
  customer: {
	type: Schema.Types.ObjectId,
	ref: 'Customer',
	required: true
  },
  qty: {
	type: Number,
	default: 1,
	required: true
  },
  price: {
	type: Number,
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
