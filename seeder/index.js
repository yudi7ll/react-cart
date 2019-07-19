const seeder = require('mongoose-seed');
const config = require('config');

const category = require('./data/category.json');
const customer = require('./data/customer.json');
const product = require('./data/product.json');
const shipper = require('./data/shipper.json');
const payment = require('./data/payment.json');

const seed = () => {
  seeder.loadModels([
	'models/category',
	'models/customer',
	'models/product',
	'models/shipper',
	'models/payment',
	'models/order',
	'models/order-detail'
  ]);

  seeder.clearModels([
	'Category',
	'Customer',
	'Product',
	'Shipper',
	'Payment',
	'Order',
	'OrderDetail'
  ], () => {
	seeder.populateModels(data, () => {
	  seeder.disconnect();
	});
  });
}

seeder.connect(config.DBHost, seed);

var data = [
  {
	model: 'Category',
	documents: category
  },{
	model: 'Customer',
	documents: customer
  },{
	model: 'Product',
	documents: product
  },{
	model: 'Shipper',
	documents: shipper
  },{
	model: 'Payment',
	documents: payment
  }
];
