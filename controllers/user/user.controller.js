'use strict';

const { User } = require('../../models');

exports.getOne = (req, res) => {

  User.findOne({ username: req.params.username }, (err, doc) => {
	if (err)
	  return res.status(400).json(err);

	if (!doc)
	  return res.status(200).json({
		errors: {
		  msg: 'User Not Found!'
		}
	  });

	doc.password = undefined;

	return res.status(200).json(doc);
  });

}

  /*
exports.userAvail = (req, res) => {

  const { username } = req.params;

  User.findOne({ username }, (err, user) => {
	if (err)
	  return res.status(400).json(err);

	// username is not used
	if (!user) {

	  if (username.length <= 4)
		return res.status(200).send({
		  status: false,
		  msg: 'Minimum 5 characters'
		});

	  if (username.length > 4)
		return res.status(200).send({
		  status: true,
		  msg: 'Username is available'
		});

	  // username is already exists
	  return res.status(200).send({
		status: false,
		msg: 'Username is already exists'
	  });

	}
  });

}
*/
