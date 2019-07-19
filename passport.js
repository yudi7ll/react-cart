const LocalStrategy = require('passport-local').Strategy;

const { Customer } = require('./models');

module.exports = passport => {

  passport.serializeUser((user, done) => {
	return done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
	Customer.findById(id, (err, user) => {
	  return done(err, user);
	});
  });

  passport.use('login', new LocalStrategy({
	  passReqToCallback: true
	}, (req, username, password, done) => {
	  // find By email or username
	  Customer.findOne({
		$or: [
		  { username },
		  { email: req.email }
		]
	  }, (err, doc) => {
		if (err)
		  return done(err);

		if (doc) {
		  if (doc.comparePassword(password, doc.password))
			return done(null, doc);
		  else
			return done({ 
			  errors: {
				password: 'Wrong password'
			  }
			});
		  
		} else {

		  return done({
			errors: {
			  username: 'Wrong username'
			}
		  });
		}
	  });
	}
  ));

  passport.use('register', new LocalStrategy({
	passReqToCallback: true
  },
	(req, username, password, done) => {
	  Customer.findOne({
		$or: [
		  { username }, { email: req.email }
		]
	  }, (err, doc) => {
		if (err)
		  return done(err);

		if (doc)
		  return done({
			errors: {
			  username: 'Username or Email has already been used'
			}
		  });

		const newCustomer = new Customer(req.body);
		newCustomer.password = newCustomer.hashPassword(password);

		newCustomer.save((err, customer) => {
		  if (err)
			return done(err);

		  return done(null, customer);
		});
	  });
	}
  ));
}
