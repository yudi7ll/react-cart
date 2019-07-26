'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../../actions';

import {
  Form,
  Button,
  Row,
  Col
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
	.then(res => callback(res));
}

const LoginForm = ({ isLoading, refreshAuthStatus }) => {
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

		submitForm(formData, res => {
		  refreshAuthStatus();

		  if (!res.errors)
			document.location.href = '/';
		});
	  }}
	>
	  <Form.Group
		as={Row}
		controlId="username"
	  >
		<Form.Label
		  column 
		  lg={3}
		>
		  Username
		</Form.Label>
		<Col
		  lg={9}
		>
		  <Form.Control
			type="text"
			placeholder="Enter Username or Email"
			autoComplete={'off'}
			autoFocus
			ref={e => username = e}
		  />
		</Col>
	  </Form.Group>
	  <Form.Group
		as={Row}
		controlId="password"
	  >
		<Form.Label
		  column
		  lg={3}
		>
		  Password
		</Form.Label>
		<Col
		  lg={9}
		>
		  <Form.Control
			type="password"
			ref={e => password = e}
		  />
		</Col>
	  </Form.Group>
	  <Button
		type="submit"
		variant="danger"
		size="sm"
		className="d-block font-weight-bold container-fluid"
		disabled={isLoading}
	  >
		{ isLoading ? 'Loading...' : 'Login' }
	  </Button>
	</Form>
  );
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading
})

const mapDispatchToProps = dispatch => {
  return {
	refreshAuthStatus: () => dispatch(checkAuth())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
