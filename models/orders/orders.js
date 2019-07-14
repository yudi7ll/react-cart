const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  customerID: {
	type: Schema.Types.ObjectId,
	ref: 'Customers',
	required: true
  },

  paymentID: {
	type: Schema.Types.ObjectId,
	ref: 'Payment',
	required: true
  },

  shipperID: {
	type: Schema.Types.ObjectId,
	ref: 'Shippers',
	required: true
  },

  orderDate: {
	type: Date,
	default: Date.now,
	required: true
  }
});

module.exports = mongoose.model('Orders', ordersSchema);
