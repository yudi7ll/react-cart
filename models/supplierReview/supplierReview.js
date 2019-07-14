const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const supplierReviewSchema = new Schema({
  customerID: {
	type: Schema.Types.ObjectId,
	ref: 'Customers'
  },

  supplierID: {
	type: Schema.Types.ObjectId,
	ref: 'Suppliers'
  },

  rating: {
	type: Number,
	required: true
  }
});


module.exports = mongoose.model('SupplierReview', supplierReviewSchema);
