const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const customersSchema = new Schema({
  name: {
	type: String,
	required: true
  },

  email: {
	type: String,
	required: true
  },

  password: {
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

  phone: {
	type: String,
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

customersSchema.methods.hashPassword = password => {
  return bcrypt.hashSync(password, 10);
}

customersSchema.methods.comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
}

module.exports = mongoose.model('Customers', customersSchema);
