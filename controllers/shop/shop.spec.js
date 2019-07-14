'use strict';

const chai = require('chai');

const shop = require('./shop.controller');

describe('Shop Unit Testing', () => {

  it('Should get shop data', done => {
	function res() {

	}

	res.prototype.status = (data) => data;

	res.prototype.json = (data) => data;

	var pass = new res();

	console.log(shop.getAll({}, pass), pass);
	done();
  });

});
