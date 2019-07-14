import React from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';

import SignupForm from './SignupForm.js';

const Signup = () => {
  return (
	<>
	<Row>
	  <h2>Signup</h2>
	</Row>
	<Row>
	  <Col lg={6}>
		<SignupForm />
	  </Col>
	</Row>
	</>
  );
}

export default Signup;
