const LocalStrategy = require('passport-local').Strategy;

const { Customers } = require('./models');

module.exports = (passport) => {

  passport.serializeUser((user, done) => {
	return done(null, user.id);
  });

  passport.deserializeUser((id, done) => {

	Customers.findById(id, (err, user) => {
	  return done(err, user);
	});

  });

  passport.use('login',
	new LocalStrategy((username, password, done) => {

	  Customers.findOne({username}, (err, doc) => {
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

	  Customers.findOne({username}, (err, doc) => {
		if (err)
		  return done(err);

		if (doc)
		  return done({
			errors: {
			  username: 'Username has already been taken'
			}
		  });

		const newCustomers = new Customers(req.body);
		newCustomers.password = newCustomers.hashPassword(password);

		newCustomers.save((err, customers) => {
		  if (err)
			return done(err);

		  return done(null, customers);
		});
	  });

	}
  ));
}
