'use strict';

const chai = require('chai');
const should = chai.should();

const server = require('../../server');
const User = require('../../models').User;

chai.use(require('chai-http'));

describe('/controllers/user', () => {
  beforeEach(done => {
	User.deleteMany({}, () => {
	  done();
	});
  });

  it('Should check if already exist/not', done => {
	chai.request(server)
	  .get('/api/user/yudi1ll')
	  .end((err, res) => {
		should.not.exist(err);
		res.should.have.status(200);
		res.body.should.be.an('object');
		res.body.should.have.property('msg');
		done();
	  })
  });
});

module.exports = chai;
