const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shippersSchema = new Schema({
  name: {
	type: String,
	required: true
  },

  phone: {
	type: String,
	required: true
  }
});

module.exports = mongoose.model('Shippers', shippersSchema);
