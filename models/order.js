const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  customer: {
	type: Schema.Types.ObjectId,
	ref: 'Customer',
	required: true
  },
  orderDetail: [
	{
	  type: Schema.Types.ObjectId,
	  ref: 'OrderDetail',
	  required: true
	}
  ],
  payment: {
	type: Schema.Types.ObjectId,
	ref: 'Payment',
	required: true
  },
  shipper: {
	type: Schema.Types.ObjectId,
	ref: 'Shipper',
	required: true
  },
  address: {
	city: String,
	country: String,
	postalCode: String,
	phone: String
  },
  orderDate: {
	type: Date,
	default: Date.now,
	required: true
  }
});

module.exports = mongoose.model('Order', ordersSchema);
