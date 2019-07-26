const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const customersSchema = new Schema({
  name: {
	type: String,
	required: true
  },
  username: {
	type: String,
	unique: true,
	required: true
  },
  email: {
	type: String,
	unique: true,
	required: true
  },
  image: {
	type: String,
	unique: true,
	default: 'default.png'
  },
  password: {
	type: String,
	required: true
  },
  address: String,
  city: String,
  country: String,
  postalCode: String,
  phone: String,
  birthDate: {
	type: Date,
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

customersSchema.index({ email: 1, username: 1 });

customersSchema.methods.hashPassword = password => {
  return bcrypt.hashSync(password, 10);
}

customersSchema.methods.comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
}

module.exports = mongoose.model('Customer', customersSchema);
