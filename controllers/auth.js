'use strict';

const passport = require('passport');

// auth middleware
exports.isAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated())
	return res.status(401).json({ 
	  errors: {
		msg: 'Login required!' 
	  }
	});

  next();
}

exports.register = (req, res) => {
  return passport.authenticate('register', (err, doc) => {
	if(err)
	  return res.status(401).json(err);

	doc.password = undefined;
	return res.status(200).json(doc);
  })(req, res);
}

exports.login = (req, res) => {
  debugger;
  const { username, password } = req.body;

  if (!username || !password)
	return res.status(401).json({
	  errors:{
		msg: 'Data is Invalid'
	  }
	});

  return passport.authenticate('login', (err, user) => {
	if (err)
	  return res.status(401).json(err);

	req.logIn(user, (err) => {
	  if (err)
		return res.status(401).json(err);

	  return res.status(200).json({
		authenticated: req.isAuthenticated(),
		username: user.username
	  });
	});
  })(req, res);
}

exports.logout = (req, res) => {
  req.session.destroy();
  req.logout();
  return res.status(200).end();
}

// check user auth
exports.checkAuthStatus = (req, res) => {
  return req.isAuthenticated()
	? res.status(200).json({
	  username: req.user.username,
	  image: req.user.image || null,
	  cartLength: req.user.cartLength
	})
	: res.status(200).json({
	  errors: {
		msg: 'User doesn\'t logged in!'
	  }
	});
}

