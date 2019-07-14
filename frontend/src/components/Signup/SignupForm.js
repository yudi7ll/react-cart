import React from 'react';
import {
  Form,
  Button,
  Row,
  Col
} from 'react-bootstrap';

const SignupForm = () => {
  let name,
	username,
	password,
	birthDate;

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
		console.log(payload);

		submitForm(payload)
		  .then(res => console.log(res));

	  }}
	>
	  <Form.Group
		as={Row}
		controlId="name"
	  >
		<Form.Label
		  column
		  sm={formLabel.sm}
		>
		  Name
		</Form.Label>
		<Col
		  sm={formControl.sm}
		>
		  <Form.Control
			type="text"
			placeholder="Enter your name"
			ref={e => name = e}
		  />
		</Col>
	  </Form.Group>
	  <Form.Group
		as={Row}
		controlId="username"
	  >
		<Form.Label
		  column
		  sm={formLabel.sm}
		>
		  Username
		</Form.Label>
		<Col
		  sm={formControl.sm}
		>
		  <Form.Control
			type="text"
			placeholder="Username"
			autoComplete={'off'}
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
		  sm={formLabel.sm}
		>
		  Password
		</Form.Label>
		<Col
		  sm={formControl.sm}
		>
		  <Form.Control
			type="password"
			placeholder="Password"
			ref={e => password = e}
		  />
		</Col>
	  </Form.Group>
	  <Form.Group
		as={Row}
		controlId="birthDate"
	  >
		<Form.Label
		  column
		  sm={formLabel.sm}
		>
		  Birth date
		</Form.Label>
		<Col
		  sm={formControl.sm}
		>
		  <Form.Control
			type="date"
			placeholder="Your birth date"
			ref={e => birthDate = e}
		  />
		</Col>
	  </Form.Group>
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
