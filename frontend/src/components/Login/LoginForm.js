'use strict';

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../../actions';

import {
  Form,
  Button,
  Row,
  Col
} from 'react-bootstrap';

const LoginForm = ({ isLoading, refreshAuthStatus }) => {
  const [errors, setErrors] = useState(false);
  console.log(this);

  const submitForm = e => {
	e.preventDefault();

	const { target } = e;
	const formData = {
	  [target[0].id]: target[0].value,
	  [target[1].id]: target[1].value
	};

	fetch('/api/auth/login', {
	  headers: {
		'Content-Type': 'application/json'
	  },
	  method: 'POST',
	  body: JSON.stringify(formData)
	})
	  .then(res => res.json())
	  .then(res => {
		refreshAuthStatus();

		if (res.errors)
		  return setErrors(res.errors);

		return document.location.href = '/';
	  });
  }

  return (
	<Form
	  onSubmit={submitForm}
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
			isInvalid={errors.username}
			required
		  />
		  <Form.Control.Feedback
			type="invalid"
		  >
			{ errors.username }
		  </Form.Control.Feedback>
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
			required
			isInvalid={errors.password}
		  />
		  <Form.Control.Feedback
			type="invalid"
		  >
			{ errors.password }
		  </Form.Control.Feedback>
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

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.auth.isLoading,
  ownProps
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
