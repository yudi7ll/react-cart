'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
chai.use(require('chai-http'));

const server = require('../server');
const {
  Order,
  OrderDetail,
  Product,
  Shipper,
  Payment
} = require('../models');
const { login } = require('./util');

const agent = chai.request.agent(server);
var data = {};

describe('ORDER TEST', () => {

  beforeEach(done => {
	(async () => {
	  // fetch data
	  const dataProduct = await Product.find().limit(5);
	  let shipper = await Shipper.findOne();
	  let payment = await Payment.findOne();

	  // filter the id
	  const product = dataProduct.map(p => p._id);
	  shipper = shipper._id;
	  payment = payment._id;

	  // count the price total product
	  const total = dataProduct.map(v => {
		let price = v.price.match(/\d/g).join('');
		return parseInt(price);
	  })
		.reduce((sum, price) => sum + price)
		.toString();

	  const orderDetail = product.map(product => ({
		product,
		qty: Math.round(Math.random() * 10),
	  }));

	  data = {
		shipper,
		payment,
		total,
		orderDetail,
		address: {
		  city: 'Order city',
		  country: 'Order country',
		  postalCode: '80123',
		  phone: '80821382'
		}
	  };
	})();

	Order.deleteMany({}, () => OrderDetail.deleteMany({}, done));
  });

  it('Should not order with unauthenticated user', done => {
	chai.request(server)
	  .post('/api/order')
	  .end((err, res) => {
		should.not.exist(err);
		res.should.not.have.status(200);
		res.body.should.have.property('errors');
		done();
	  });
  });

  it('Should order 5 product', (done) => {
	const order = () => {
	  agent
		.post('/api/order')
		.send(data)
		.end((err, res) => {
		  should.not.exist(err);
		  res.should.have.status(200);
		});
	}

	login(agent)
	  .then(order)
	  .then(done)
  });

});
