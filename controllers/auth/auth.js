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

  // for validating data
  const {
	name,
	username,
	password,
	birthDate
  } = req.body;

  // validate the data
  if (!name || !username || !password || !birthDate)
	return res.status(401).json({
	  errors: {
		msg: 'Data is invalid!'
	  }
	});

  return passport.authenticate('register', (err, doc) => {
	if(err)
	  return res.status(401).json(err);

	doc.password = undefined;
	return res.status(200).json(doc);
  })(req, res);

}

exports.login = (req, res) => {

  const { username, password } = req.body;

  if (!username || !password)
	return res.status(401).json({
	  errors:{
		msg: 'Data is Invalid'
	  }
	});

  // do login
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
  res.status(200).end();
}

// check user auth
exports.checkAuthStatus = (req, res) => {
  return req.isAuthenticated()
	? res.status(200).json({ username: req.user.username })
	: res.status(401).json({
	  errors: {
		msg: 'User doesn\'t logged in!'
	  }
	});
}

