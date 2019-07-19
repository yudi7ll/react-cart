import React from 'react';
import {
  Form,
  Button,
  Row,
  Col
} from 'react-bootstrap';

const SignupForm = () => {
  const payload = {
	name: '',
	username: '',
	email: '',
	password: '',
	address: '',
	city: '',
	country: '',
	postalCode: '',
	birthDate: ''
  };

  // responsive value
  const formLabel = {
	sm: 3
  };
  const formControl = {
	sm: 9
  };

  const submitForm = payload => {
	return fetch('/api/auth/signup', {
	  mode: 'cors',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  method: 'POST',
	  body: JSON.stringify(payload)
	})
	  .then(res => res.json());
  };

  const FormGroup = ({id, display, type, placeholder}) => (
	<Form.Group
	  as={Row}
	  controlId={id}
	>
	  <Form.Label
		column
		sm={formLabel.sm}
	  >
		{display || id.charAt(0).toUpperCase() + id.slice(1)}
	  </Form.Label>
	  <Col
		sm={formControl.sm}
	  >
		<Form.Control
		  type={type || 'text'}
		  placeholder={placeholder}
		  ref={e => payload[id] = e}
		  required={true}
		/>
	  </Col>
	</Form.Group>
  );

  return (
	<Form
	  onSubmit={e => {
		e.preventDefault();
		const payload = {
		  name: name.value,
		  username: username.value,
		  password: password.value,
		  birthDate: birthDate.value
		};

		submitForm(payload)
		  .then(res => console.log(res));
	  }}
	>
	  <FormGroup
		id="name"
		display="Full Name"
	  />
	  <FormGroup
		id="username"
	  />
	  <FormGroup
		id="email"
		type="email"
		placeholder="ex. yourname@email.com"
	  />
	  <FormGroup
		id="password"
		placeholder="Password"
		type="password"
	  />
	  <FormGroup
		id="confirmPassword"
		display=" "
		placeholder="Confirm Password"
		type="password"
	  />
	  <hr
		className="py-3"
	  />
	  <FormGroup
		id="address"
		display="Street Address"
	  />
	  <FormGroup
		id="city"
	  />
	  <FormGroup
		id="country"
	  />
	  <FormGroup
		id="postalCode"
		display="Postal Code"
		type="number"
	  />
	  <FormGroup
		id="phone"
		type="number"
	  />
	  <FormGroup
		id="birthDate"
		display="Birth Date"
		type="date"
	  />
	  <Button
		type="submit"
		variant="danger"
		size="sm"
		className="d-block container-fluid"
	  >
		Signup
	  </Button>
	</Form>
  );
}

export default SignupForm;
