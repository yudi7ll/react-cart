'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();

const server = require('../server');
const { Customer } = require('../models');

chai.use(require('chai-http'));

const data = { 
  beforeEach: {
	name: 'beforeCustomer',
	username: 'test1ll',
	email: 'userbefore@email.com',
	address: 'test',
	password: 'password',
	birthDate: '1999-07-04T05:10:28.685Z',
	city: 'test',
	country: 'test',
	postalCode: 'test',
	phone: '109238471',
  },
  user: {
	name: 'Yudi',
	username: 'test2ll',
	password: 'password123',
	birthDate: '1999-07-04T05:10:28.685Z',
	email: 'user@email.com',
	address: 'test',
	city: 'test',
	country: 'test',
	postalCode: 'test',
	phone: '109238471',
  },
  login: {
	username: 'yudi1ll',
	email: 'yudi@gmail.com',
	password: 'password'
  }
}

describe('AUTH TEST', () => {

  afterEach(done => {
	Customer
	  .deleteOne({ username: data.user.username }, () => { done() });
  });

  describe('/POST /auth/register', () => {

	it('Should register a user', done => {
	  chai.request(server)
		.post('/api/auth/signup')
		.send(data.user)
		.end((err, res) => {
		  should.not.exist(err);
		  res.should.have.status(200);
		  res.body.should.be.an('object');
		  res.body.should.have.property('username').eql(data.user.username);
		  should.not.exist(res.body.password);
		  done();
		});
	});

  });

  describe('/POST /auth/login', () => {

	it('Should loggedIn the user & should be authenticated', done => {
	  // request with cookies
	  const agent = chai.request.agent(server);

	  agent
		.post('/api/auth/login')
		.send(data.login)
		.end((err, res) => {
		  should.not.exist(err);
		  res.should.have.status(200);
		  res.body.should.have.property('authenticated').eql(true);
		  should.not.exist(res.body.errors);

		  // request with authenticated user
			agent
			  .get('/api/auth/isAuthenticated')
			  .end((err, res) => {
				should.not.exist(err);
				res.should.have.status(200);
				res.body.should.be.a('object');
				done();
			  });
		  });
	});

	it('Should not authenticated', done => {
	  chai.request(server)
		.get('/api/auth/isAuthenticated')
		.end((err, res) => {
		  should.not.exist(err);
		  res.should.have.status(200);
		  res.body.should.be.a('object');
		  res.body.should.have.property('errors');
		  done();
		});
	});

  });

});
