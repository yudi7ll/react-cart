'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { authStatus, checkAuth } from '../../actions';

import {
  Form,
  Button
} from 'react-bootstrap';

const submitForm = (formData, callback) => {
  fetch('/api/auth/login', {
	headers: {
	  'Content-Type': 'application/json'
	},
	method: 'POST',
	body: JSON.stringify(formData),
  })
	.then(res => res.json())
	.then(res => {
	  res.errors 
		? console.log(res)
		: callback(res);
	});
}

const LoginForm = ({ refreshAuthStatus, checkAuth }) => {
  let username,
	password;

  return (
	<Form
	  onSubmit={(e) => {
		e.preventDefault();

		const formData = {
		  username: username.value,
		  password: password.value
		};

		submitForm(formData, auth => {
		  refreshAuthStatus(auth);
		});
	  }}
	>
	  <Form.Group controlId="username">
		<Form.Control
		  type="text"
		  placeholder="Username"
		  autoComplete={'off'}
		  ref={e => username = e}
		/>
	  </Form.Group>
	  <Form.Group controlId="password">
		<Form.Control
		  type="password"
		  placeholder="Password"
		  ref={e => password = e}
		/>
	  </Form.Group>
	  <Button
		type="submit"
		variant="danger"
		size="sm"
		className="d-block container-fluid"
	  >
		Login
	  </Button>
	</Form>
  );
}

const mapDispatchToProps = dispatch => {
  return {
	refreshAuthStatus: auth => dispatch(authStatus(auth)),
	checkAuthStatus: () => dispatch(checkAuth())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
