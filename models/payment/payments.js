const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentsSchema = new Schema({
  paymentType: {
	type: String,
	required: true
  }
});

module.exports = mongoose.model('Payments', paymentsSchema);
