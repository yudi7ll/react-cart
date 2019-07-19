const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderDetailsSchema = new Schema({
  product: {
	type: Schema.Types.ObjectId,
	ref: 'Product',
	required: true
  },
  qty: {
	type: Number,
	required: true
  }
});

module.exports = mongoose.model('OrderDetail', orderDetailsSchema);
