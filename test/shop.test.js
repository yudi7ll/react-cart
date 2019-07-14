'use strict';

const chai = require('chai');
const should = chai.should();

const server = require('../server');
const { Shop, User } = require('../models');

chai.use(require('chai-http'));

const data = {
  user : {
	name: 'Shop test',
	username: 'shoptest',
	password: 'shoptest',
	birthDate: '1999-07-04T05:10:28.685Z'
  },

  shop: {
	name: 'shopsellertest',
	description: 'shopDesc',
	location: 'ShopLoc'
  }
}

describe('SHOP TEST', () => {
  beforeEach(done => {

	User.deleteMany({}, () => {

		Shop.deleteMany({}, () => {
		// register user
		chai.request(server)
		  .post('/api/auth/signup')
		  .send(data.user)
		  .end(() => {
			done();
		  })
		});

	});

  });

  describe('/GET /shop', () => {

	it('Should get shop', done => {
	  chai.request(server)
		.get('/api/shop')
		.end((err, res) => {
		  should.not.exist(err);
		  res.should.have.status(200);
		  res.body.should.be.an('array');
		  done();
		});
	});

  });

  describe('/POST /shop', () => {

	it('Should insert Shop through authenticated user', done => {
	  const agent = chai.request.agent(server)

	  // login
	  agent
		.post('/api/auth/login')
		.send(data.user)
		.end(() => {
		  // insert seller
		  agent
			.post('/api/shop')
			.send({
			  name: 'shopsellertest',
			  description: 'shopDesc',
			  location: 'ShopLoc'
			})
			.end((err, res) => {
			  should.not.exist(err);
			  res.should.have.status(200);
			  done();
			});
		});
	});

	it('Should not insert Shop if user not authenticated', done => {
	  chai.request(server)
		.post('/api/shop')
		.send(data.shop)
		.end((err, res) => {
		  should.not.exist(err);
		  res.should.have.status(401);
		  done();
		});
	});

  });

});
