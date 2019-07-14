const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderDetailsSchema = new Schema({
  OrderID: {
	type: Schema.Types.ObjectId,
	ref: 'Orders'
  },

  productID: {
	type: Schema.Types.ObjectId,
	ref: 'Products'
  },

  quantity: {
	type: Number,
	default: 0,
	required: true
  },

  price: {
	type: String,
	required: true
  },

  total: {
	type: String,
	required: true
  }
});

module.exports = mongoose.model('OrderDetails', orderDetailsSchema);
