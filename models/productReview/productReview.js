const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productReview = new Schema({
  customerID: {
	type: Schema.Types.ObjectId,
	ref: 'Customers',
	required: true
  },

  productID: {
	type: Schema.Types.ObjectId,
	ref: 'Products',
	required: true
  },

  rating: {
	type: Number,
	required: true
  },

  comment: {
	type: String,
	required: false
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

module.exports = mongoose.model('ProductReview', productReview);
