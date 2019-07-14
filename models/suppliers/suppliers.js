const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
  customerID: {
	type: Schema.Types.ObjectId,
	ref: 'Customers'
  },

  name: {
	type: String,
	required: true
  },

  address: {
	type: String,
	required: true
  },

  city: {
	type: String,
	required: true
  },

  country: {
	type: String,
	required: true
  },

  postalCode: {
	type: String,
	required: true
  },

  email: {
	type: String,
	required: true
  },

  logo: {
	type: String,
	default: 'default.jpg',
	required: true
  },

  rating: {
	type: Number,
	default: 0,
	required: true
  },

  description: {
	type: String,
	required: true
  }
});

module.exports = mongoose.model('Shop', shopSchema);
