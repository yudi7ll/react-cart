const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
	type: String,
	required: true
  },
  description: {
	type: String,
	required: true
  },
  category: {
	type: String,
	required: true
  },
  price: {
	type: String,
	required: true
  },
  discount: {
	type: Number,
	default: 0,
	required: false
  },
  inStock: {
	type: Number,
	default: 0,
  },
  soldOut: {
	type: Number,
	default: 0,
  },
  productAvailable: {
	type: Boolean,
	default: true,
  },
  discountAvailable: {
	type: Boolean,
	default: false,
  },
  favorite: {
	type: Number,
	default: 0
  },
  image: {
	type: String,
	required: true
  },
  rating: {
	type: Number,
	default: 0,
	required: true
  },
  review: [{
	customer: String,
	comment: String,
	rating: String,
	created: {
	  type: Date,
	  default: Date.now
	}
  }],
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

module.exports = mongoose.model('Product', productSchema);
