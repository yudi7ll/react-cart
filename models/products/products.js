const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  categoryID: {
	type: Schema.Types.ObjectId,
	ref: 'Category',
	required: true
  },

  supplierID: {
	type: Schema.Types.ObjectId,
	ref: 'suppliers',
	required: true
  },

  name: {
	type: String,
	required: true
  },

  description: {
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
	required: true
  },

  inStock: {
	type: Number,
	required: true
  },

  soldOut: {
	type: Number,
	default: 0,
	required: true
  },

  productAvailable: {
	type: Boolean,
	default: true,
	required: true
  },

  discountAvailable: {
	type: Boolean,
	default: false,
	required: true
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

module.exports = mongoose.model('Products', ProductSchema);
