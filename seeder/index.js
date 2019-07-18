const seeder = require('mongoose-seed');
const config = require('config');

const category = require('./data/category.json');
const customer = require('./data/customer.json');
const product = require('./data/product.json');

seeder.connect(config.DBHost, () => {
  seeder.loadModels([
	'models/category',
	'models/customer',
	'models/product'
  ]);

  seeder.clearModels([
	'Category',
	'Customer',
	'Product'
  ], () => {
	seeder.populateModels(data, () => {
	  seeder.disconnect();
	});
  });
});

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
  }
];
